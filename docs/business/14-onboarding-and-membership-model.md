# Onboarding & Membership Model

## Document Purpose

This document defines the business shape of family creation, membership, and
early participation so planning can align onboarding, permissions, and visibility.

## Membership Principles

- MVP assumes one adult starts the household setup.
- Child members are managed profiles, not standalone login users.
- The second adult is invited into a shared family space rather than silently
  added as a passive record.
- Household participation should be possible before every member is fully active.

## Membership Types

### Adult Member

- Has direct participation rights in the shared household
- Can review and finalize relevant household actions
- Can own rewards and respond to reward requests

### Child Member

- Exists as a managed profile under adult control
- Can be the actor or beneficiary of household actions
- Does not require direct authentication in MVP

## Default Onboarding Flow

### 1. Create Family

- First adult creates the family space
- Family is immediately usable by the creating adult

### 2. Add Memberships

- Adult can invite another adult member
- Adult can create one or more child profiles directly

### 3. Start Household Activity

- Household can begin recording contributions as soon as the first adult and any
  needed child profiles exist
- Invited adult can join later without blocking first use

## Adult Invite Model

- Another adult should be represented as an invited participant, not a shadow
  profile with full rights before acceptance
- MVP should assume an invite-and-join model for adults even if the later
  technical mechanism changes

## Child Profile Model

- A child profile is created by an adult
- The adult is responsible for accuracy, rewards, and review actions tied to the
  child profile
- Child activity may be entered by the adult or through a managed interaction
  surface, but business authority remains adult-controlled in MVP

## Permission Implications

- Only adults are full decision-makers in MVP
- Children may appear as actors, recipients, and point holders without being
  autonomous permission owners
- Household authority stays simple: avoid extra owner/admin strata unless later
  product needs prove them necessary

## Onboarding Success Definition

Household setup is successful when:

- a family space exists;
- at least one adult member can act inside it;
- at least one additional member or child profile can be added;
- the household can record its first contribution without hidden prerequisites.

## Explicit Non-Goals

- No child-first onboarding
- No child email/password requirement
- No broad membership role customization in MVP
