export const CORE_SCHEMA_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    display_name TEXT,
    primary_email TEXT,
    avatar_url TEXT,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
  )`,
  `CREATE TABLE IF NOT EXISTS auth_identities (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    provider TEXT NOT NULL,
    provider_subject TEXT NOT NULL,
    provider_email TEXT,
    last_login_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    UNIQUE(provider, provider_subject),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`,
  `CREATE TABLE IF NOT EXISTS refresh_sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    token_hash TEXT NOT NULL UNIQUE,
    expires_at TEXT NOT NULL,
    revoked_at TEXT,
    user_agent TEXT,
    ip_address TEXT,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`,
  `CREATE TABLE IF NOT EXISTS families (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_by TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY(created_by) REFERENCES users(id)
  )`,
  `CREATE TABLE IF NOT EXISTS family_members (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    role TEXT NOT NULL,
    state TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    UNIQUE(family_id, user_id),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`,
  `CREATE TABLE IF NOT EXISTS child_profiles (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    display_name TEXT NOT NULL,
    managed_by_member_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(managed_by_member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS contributions (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    actor_member_id TEXT NOT NULL,
    subject_member_id TEXT NOT NULL,
    point_type TEXT NOT NULL,
    point_value INTEGER NOT NULL,
    state TEXT NOT NULL,
    description TEXT,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    CHECK (state IN ('pending', 'approved', 'rejected')),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(actor_member_id) REFERENCES family_members(id),
    FOREIGN KEY(subject_member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS contribution_events (
    id TEXT PRIMARY KEY,
    contribution_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    actor_member_id TEXT NOT NULL,
    visibility TEXT NOT NULL DEFAULT 'all',
    note TEXT,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    CHECK (visibility IN ('all', 'adults_only')),
    FOREIGN KEY(contribution_id) REFERENCES contributions(id),
    FOREIGN KEY(actor_member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS rewards (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    title TEXT NOT NULL,
    point_type TEXT NOT NULL,
    point_cost INTEGER NOT NULL,
    decision_owner_member_id TEXT NOT NULL,
    status TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(decision_owner_member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS reward_requests (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    reward_id TEXT NOT NULL,
    requester_member_id TEXT NOT NULL,
    point_cost_snapshot INTEGER NOT NULL,
    state TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    CHECK (state IN ('submitted', 'accepted', 'rejected', 'delayed', 'fulfilled')),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(reward_id) REFERENCES rewards(id),
    FOREIGN KEY(requester_member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS reward_request_events (
    id TEXT PRIMARY KEY,
    reward_request_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    actor_member_id TEXT NOT NULL,
    visibility TEXT NOT NULL DEFAULT 'all',
    note TEXT,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    CHECK (visibility IN ('all', 'adults_only')),
    FOREIGN KEY(reward_request_id) REFERENCES reward_requests(id),
    FOREIGN KEY(actor_member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS points_ledger (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    member_id TEXT NOT NULL,
    point_type TEXT NOT NULL,
    delta INTEGER NOT NULL,
    source_type TEXT NOT NULL,
    source_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    CHECK (source_type IN ('contribution', 'reward_request')),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS point_balances (
    family_id TEXT NOT NULL,
    member_id TEXT NOT NULL,
    point_type TEXT NOT NULL,
    balance INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    PRIMARY KEY (family_id, member_id, point_type),
    FOREIGN KEY(family_id) REFERENCES families(id),
    FOREIGN KEY(member_id) REFERENCES family_members(id)
  )`,
  `CREATE TABLE IF NOT EXISTS user_preferences (
    member_id TEXT PRIMARY KEY,
    preferences TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY(member_id) REFERENCES family_members(id)
  )`,
  `CREATE INDEX IF NOT EXISTS idx_auth_identities_provider_subject ON auth_identities(provider, provider_subject)`,
  `CREATE INDEX IF NOT EXISTS idx_refresh_sessions_user_id ON refresh_sessions(user_id)`,
  `CREATE INDEX IF NOT EXISTS idx_refresh_sessions_expires_at ON refresh_sessions(expires_at)`,
  `CREATE INDEX IF NOT EXISTS idx_family_members_family_id ON family_members(family_id)`,
  `CREATE INDEX IF NOT EXISTS idx_points_ledger_family_member ON points_ledger(family_id, member_id, created_at)`,
  `CREATE INDEX IF NOT EXISTS idx_contributions_family_created ON contributions(family_id, created_at)`,
  `CREATE INDEX IF NOT EXISTS idx_reward_requests_family_created ON reward_requests(family_id, created_at)`,
]

export const applyCoreSchema = async (db: D1Database): Promise<void> => {
  for (const statement of CORE_SCHEMA_STATEMENTS) {
    await db.prepare(statement).run()
  }
}
