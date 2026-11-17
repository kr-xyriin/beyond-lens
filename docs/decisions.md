<div align="center">

# 🧭 TECHNICAL DECISIONS

**Record the why, not just the what.**

[![Last commit](https://img.shields.io/github/last-commit/kr-xyriin/beyond-lens?style=for-the-badge&color=8B5CF6)](https://github.com/kr-xyriin/beyond-lens/commits/main)
[![Contributors](https://img.shields.io/github/contributors/kr-xyriin/beyond-lens?style=for-the-badge&color=6366F1)](https://github.com/kr-xyriin/beyond-lens/graphs/contributors)

[← Docs home](./README.md) · [Architecture](./architecture.md) · [Commit history](https://github.com/kr-xyriin/beyond-lens/commits/main)

</div>

---

## ✦ Decision register

| ID | Topic | Status | Basis |
|:--|:--|:--|:--|
| ADR-001 | React + TypeScript + Vite frontend | Current stack | Root README |
| ADR-002 | Python + FastAPI backend | Proposed | Root README lists as planned |
| ADR-003 | PostgreSQL persistence | Proposed | Root README lists as planned |
| ADR-004 | Phased delivery A–F | Documented plan | Root README roadmap |
| ADR-005 | AI-assisted guidance with trust safeguards | Product direction | Root README concept; safeguards require design review |

**Status meanings:** *Current stack* = documented as in development; *Proposed* = not implemented or formally finalized; *Documented plan* = project sequencing, not proof of completion.

## ◈ ADR-001 — Frontend foundation

**Context:** The platform needs an interactive frontend that can evolve through the early phases.

**Recorded direction:** React, TypeScript, Vite, and CSS are listed as the frontend stack.

**Implications:** Components should remain maintainable and testable. Frontend prototype behavior should not be confused with a production service.

**Review when:** The frontend framework, build tooling, or major UI architecture changes.

## ◈ ADR-002 — Backend direction

**Context:** Authentication, bookings, AI integration, and payments will require server-side logic.

**Proposed direction:** Python + FastAPI.

**Still to decide:** Hosting, API contracts, authentication mechanism, deployment approach, and operational limits.

**Review when:** Backend implementation begins or requirements invalidate this choice.

## ◈ ADR-003 — Data persistence

**Context:** Users, profiles, availability, bookings, and transaction state need durable records.

**Proposed direction:** PostgreSQL.

**Still to decide:** Schema, migration tooling, backup strategy, access policy, and retention rules.

**Review when:** The data model is first implemented or major storage requirements change.

## ◈ ADR-004 — Development sequencing

**Recorded direction:** A frontend foundation → B authentication/profiles → C booking → D AI guidance → E payments/communication → F production testing/launch.

**Trade-off:** A phased plan keeps work focused, but some cross-cutting concerns (security, accessibility, testing) must begin earlier rather than wait for Phase F.

**Review when:** Milestones or dependencies change. Keep [roadmap](./roadmap.md) and the root README aligned.

## ◈ ADR-005 — Trust and AI assistance

**Product direction:** Help prospective students and parents make informed decisions through firsthand perspectives and AI assistance.

**Proposed safeguards:** Label AI-generated content, avoid treating individual experiences as verified universal facts, and review claims about institutions for fairness and accuracy.

**Still to decide:** AI providers, retrieval strategy, evaluation criteria, escalation paths, and moderation rules.

## 📝 Template for new decisions

Copy this section when a substantive decision is made:

```markdown
### ADR-006 — Short decision title

- **Status:** Proposed | Accepted | Superseded
- **Date:** YYYY-MM-DD
- **Owners:** Contributors involved
- **Context:** What problem are we solving?
- **Decision:** What did we choose?
- **Alternatives:** What else was considered?
- **Consequences:** What trade-offs follow?
- **Review trigger:** What would cause us to revisit it?
- **Related PR / issue:** Link
```

## 🔄 Change tracking

The badges and [commit history](https://github.com/kr-xyriin/beyond-lens/commits/main) update as the repository evolves. **Decision text does not auto-change from commits**: amend or supersede an ADR in the PR that makes the change. This preserves an auditable explanation of *why* the architecture evolved.

---

<div align="center"><sub>[Docs home](./README.md) · [Roadmap](./roadmap.md) · [Main README](../README.md)</sub></div>
