---
status: draft
# status lifecycle: draft → approved → implemented | cancelled
#
# draft:       requirements being written; Claude will not implement
# approved:    all [NEEDS CLARIFICATION] resolved; signed off; Claude may proceed
# implemented: fulfillment audit passed; feature is shipped
# cancelled:    feature was cancelled before completion

iteration: 1775470061
feature: refactor
approved_by: —
approved_date: —
---

# 1775470061 — Refactor

---

## Why We're Building This

[1–3 sentences: what we're building, for whom, and the single most important constraint.]

> Example: "We are adding task filtering to TaskFlow so that users can focus on
> active work without seeing completed items. The most important constraint is that
> filter state must be derived from task state — never duplicated."

---

## Functional Requirements

### FR-1: [Short name]

**As a [role]**, I can [action] so that [benefit].

**Acceptance Criteria**:
- [Specific, testable criterion — what exactly must be true]
- [Each criterion maps to exactly one test]
- [NEEDS CLARIFICATION: example — "Should this also work offline?"]

### FR-2: [Short name]

**As a [role]**, I can [action] so that [benefit].

**Acceptance Criteria**:
- [Criterion]
- [Criterion]

<!-- Add FR-3, FR-4 etc. as needed. Delete unused stubs. -->

---

## Non-Functional Requirements

### NFR-1: [Category — e.g. Performance]
- [Measurable target — e.g. "API response under 200ms at p95 with 1000 concurrent users"]

### NFR-2: [Category — e.g. Security]
- [Measurable target — e.g. "All inputs validated before processing; no PII in logs"]

### NFR-3: [Category — e.g. Reliability]
- [Measurable target — e.g. "Feature degrades gracefully when external service is unavailable"]

<!-- Add or remove NFR sections to match what actually matters for this feature. -->

---

## Technical Design

> Written by engineers after FR/NFR are approved.
> Concrete library, pattern, and data-model choices for this specific stack.

### TD-1: Data Model Changes
```
[Show new or modified types/schemas/tables here]
```

### TD-2: Component / Module Changes
```
[Which files change, which are created, which are deleted]
```

### TD-3: Key Decisions
| Decision | Choice | Alternatives rejected | Reason |
|----------|--------|-----------------------|--------|
| [e.g. state management] | [chosen approach] | [alternatives] | [why] |

---

## Fulfillment Audit Log
<!-- Filled in during Phase 4. One row per acceptance criterion. -->

| Criterion | Status | Code evidence | Tested by |
|-----------|--------|---------------|-----------|
| *(filled by /fulfillment-audit)* | | | |

<!-- Status values: ✅ Met · ❌ Not met · ⚠️ Partial -->
<!-- NOTE: FR tags in this document use local form (FR-1, FR-2).
     In code and tests, use the namespaced form: FR-[iteration]-N (e.g. FR-1740700800-1).
     This prevents tag collisions when multiple features are developed in parallel. -->
