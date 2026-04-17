import { newId } from '@/utils/id'

export interface StoredUser {
  id: string
  displayName: string | null
  primaryEmail: string | null
  avatarUrl: string | null
}

interface FirebaseIdentityInput {
  subject: string
  email: string | null
  name: string | null
  picture: string | null
}

const toStoredUser = (row: {
  id: string
  display_name: string | null
  primary_email: string | null
  avatar_url: string | null
}): StoredUser => ({
  id: row.id,
  displayName: row.display_name,
  primaryEmail: row.primary_email,
  avatarUrl: row.avatar_url,
})

export const upsertUserByFirebaseIdentity = async (
  db: D1Database,
  identity: FirebaseIdentityInput,
): Promise<StoredUser> => {
  const existingIdentity = await db
    .prepare(
      `SELECT user_id
       FROM auth_identities
       WHERE provider = ? AND provider_subject = ?
       LIMIT 1`,
    )
    .bind('firebase', identity.subject)
    .first<{ user_id: string }>()

  const nowEpoch = Date.now()

  if (existingIdentity) {
    await db
      .prepare(
        `UPDATE users
         SET display_name = ?, primary_email = ?, avatar_url = ?, updated_at = ?
         WHERE id = ?`,
      )
      .bind(
        identity.name,
        identity.email,
        identity.picture,
        nowEpoch,
        existingIdentity.user_id,
      )
      .run()

    await db
      .prepare(
        `UPDATE auth_identities
         SET provider_email = ?, last_login_at = ?, updated_at = ?
         WHERE provider = ? AND provider_subject = ?`,
      )
      .bind(identity.email, nowEpoch, nowEpoch, 'firebase', identity.subject)
      .run()

    const updated = await db
      .prepare(
        `SELECT id, display_name, primary_email, avatar_url
         FROM users
         WHERE id = ?
         LIMIT 1`,
      )
      .bind(existingIdentity.user_id)
      .first<{
        id: string
        display_name: string | null
        primary_email: string | null
        avatar_url: string | null
      }>()

    if (!updated) {
      throw new Error('User upsert failed unexpectedly')
    }

    return toStoredUser(updated)
  }

  const userId = newId()
  const identityId = newId()

  await db
    .prepare(
      `INSERT INTO users (id, display_name, primary_email, avatar_url)
       VALUES (?, ?, ?, ?)`,
    )
    .bind(userId, identity.name, identity.email, identity.picture)
    .run()

  await db
    .prepare(
      `INSERT INTO auth_identities (id, user_id, provider, provider_subject, provider_email)
       VALUES (?, ?, ?, ?, ?)`,
    )
    .bind(identityId, userId, 'firebase', identity.subject, identity.email)
    .run()

  const created = await db
    .prepare(
      `SELECT id, display_name, primary_email, avatar_url
       FROM users
       WHERE id = ?
       LIMIT 1`,
    )
    .bind(userId)
    .first<{
      id: string
      display_name: string | null
      primary_email: string | null
      avatar_url: string | null
    }>()

  if (!created) {
    throw new Error('User creation failed unexpectedly')
  }

  return toStoredUser(created)
}
