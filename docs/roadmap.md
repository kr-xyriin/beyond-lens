<div align="center">

# 🗺 DEVELOPMENT ROADMAP

**Six phases. Clear deliverables. Honest progress.**

[![Last commit](https://img.shields.io/github/last-commit/kr-xyriin/beyond-lens?style=for-the-badge&color=8B5CF6)](https://github.com/kr-xyriin/beyond-lens/commits/main)
[![Open issues](https://img.shields.io/github/issues/kr-xyriin/beyond-lens?style=for-the-badge&color=6366F1)](https://github.com/kr-xyriin/beyond-lens/issues)
[![Open PRs](https://img.shields.io/github/issues-pr/kr-xyriin/beyond-lens?style=for-the-badge&color=7C3AED)](https://github.com/kr-xyriin/beyond-lens/pulls)

[← Docs home](./README.md) · [Live issues](https://github.com/kr-xyriin/beyond-lens/issues) · [Recent commits](https://github.com/kr-xyriin/beyond-lens/commits/main)

</div>

---

## ◈ Phase overview

| Phase | Focus | Documented status |
|:--:|:--|:--:|
| **A** | Frontend foundation | 🟣 In progress |
| **B** | Authentication & profiles | ⚪ Planned |
| **C** | Date-based booking system | ⚪ Planned |
| **D** | AI-assisted guidance | ⚪ Planned |
| **E** | Payments & communication | ⚪ Planned |
| **F** | Testing & production launch | ⚪ Planned |

> These statuses mirror the provided root README at the time this documentation was prepared. They are **manually maintained** and must be reviewed when work changes; commits alone cannot certify completion.

## 🟣 Phase A — Frontend foundation

**Goal:** Establish a coherent, usable, maintainable web interface.

- [ ] Review page structure, navigation, and responsive layouts.
- [ ] Refine accessibility, keyboard behavior, and reduced-motion support.
- [ ] Separate reusable components from page-level UI.
- [ ] Distinguish demo content from real data.
- [ ] Confirm `npm ci`, `npm run dev`, and `npm run build` on a clean clone.

**Exit criteria:** Frontend builds reliably; key prototype flows are reviewable and known limitations are documented.

## ⚪ Phase B — Authentication & profiles

**Goal:** Establish secure identity and role-aware profiles.

- [ ] Define roles for prospective students and current students.
- [ ] Design registration, sign-in, recovery, and session handling.
- [ ] Implement server-side validation and authorization.
- [ ] Create profile editing and privacy controls.
- [ ] Test unauthorized and invalid access paths.

**Exit criteria:** Users can securely access only the accounts and resources they are permitted to use.

## ⚪ Phase C — Date-based booking system

**Goal:** Support reliable scheduling between users.

- [ ] Model availability and booking states.
- [ ] Handle time zones and date validation.
- [ ] Prevent double-booking and race conditions.
- [ ] Implement booking, cancellation, and rescheduling rules.
- [ ] Test concurrent booking requests and edge cases.

**Exit criteria:** Scheduling behaves consistently under normal and concurrent usage.

## ⚪ Phase D — AI-assisted guidance

**Goal:** Provide helpful AI-assisted guidance without presenting speculation as fact.

- [ ] Define the AI's supported tasks and limitations.
- [ ] Establish grounding and citation/attribution rules where applicable.
- [ ] Separate student experiences from generated summaries.
- [ ] Evaluate accuracy, bias, safety, and failure behavior.
- [ ] Add monitoring, feedback, and graceful fallback paths.

**Exit criteria:** AI behavior is evaluated, clearly labeled, and safe to use within the defined scope.

## ⚪ Phase E — Payments & communication

**Goal:** Enable trustworthy transactions and communication.

- [ ] Select providers based on actual product requirements.
- [ ] Define pricing, refund, and dispute rules.
- [ ] Implement verified payment callbacks and idempotency.
- [ ] Add notification and communication flows.
- [ ] Test failures, cancellations, and reconciliation.

**Exit criteria:** Financial and communication flows are tested end to end with appropriate controls.

## ⚪ Phase F — Testing & production launch

**Goal:** Release a stable, observable, secure platform.

- [ ] Run unit, integration, and end-to-end tests.
- [ ] Perform security, privacy, and accessibility reviews.
- [ ] Load-test important paths and define operational limits.
- [ ] Configure deployment, backups, monitoring, and rollback.
- [ ] Complete a launch checklist and incident-response plan.

**Exit criteria:** Launch owners explicitly approve readiness against documented criteria.

## 📊 Live work tracking

[![Monthly commits](https://img.shields.io/github/commit-activity/m/kr-xyriin/beyond-lens?style=flat-square&color=8B5CF6)](https://github.com/kr-xyriin/beyond-lens/commits/main)
[![Issues](https://img.shields.io/github/issues/kr-xyriin/beyond-lens?style=flat-square&color=6366F1)](https://github.com/kr-xyriin/beyond-lens/issues)
[![PRs](https://img.shields.io/github/issues-pr/kr-xyriin/beyond-lens?style=flat-square&color=7C3AED)](https://github.com/kr-xyriin/beyond-lens/pulls)

For genuinely dynamic task status, track each item as a **GitHub issue or project item** and use [GitHub Issues](https://github.com/kr-xyriin/beyond-lens/issues) / [Projects](https://github.com/kr-xyriin/beyond-lens/projects). Markdown checkboxes here are **planning templates**, not automatically synchronized issue state.

**Update rule:** When a phase passes its exit criteria, update this table and the [root README](../README.md) together in a reviewed PR.

---

<div align="center"><sub>[Docs home](./README.md) · [Architecture](./architecture.md) · [Main README](../README.md)</sub></div>
