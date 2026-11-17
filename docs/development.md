<div align="center">

# ⚡ DEVELOPMENT GUIDE

**From clean clone to a reviewable contribution.**

[![Frontend version](https://img.shields.io/github/package-json/v/kr-xyriin/beyond-lens?filename=frontend%2Fpackage.json&style=for-the-badge&label=Frontend%20version&color=8B5CF6)](https://github.com/kr-xyriin/beyond-lens/blob/main/frontend/package.json)
[![Last commit](https://img.shields.io/github/last-commit/kr-xyriin/beyond-lens?style=for-the-badge&color=6366F1)](https://github.com/kr-xyriin/beyond-lens/commits/main)

[← Docs home](./README.md) · [Repository](https://github.com/kr-xyriin/beyond-lens) · [Pull requests](https://github.com/kr-xyriin/beyond-lens/pulls)

</div>

---

## ✦ Prerequisites

- Git
- Node.js and npm compatible with the frontend's [`package.json`](https://github.com/kr-xyriin/beyond-lens/blob/main/frontend/package.json) and lockfile
- A code editor (VS Code or equivalent)

## 🚀 Run the frontend locally

```bash
git clone https://github.com/kr-xyriin/beyond-lens.git
cd beyond-lens/frontend
npm ci
npm run dev
```

Open the local URL printed by Vite. To verify the production bundle:

```bash
npm run build
```

> **Important:** The frontend commands are run inside `frontend/`, **not** the repository root. `npm ci` installs the dependencies (including Vite) from the lockfile; run it before `npm run dev` on a fresh clone.

## 🗂 Repository map

```text
beyond-lens/
├── frontend/       # React + TypeScript + Vite
├── docs/           # Project documentation
├── archive/        # Earlier prototypes
└── README.md       # GitHub project landing page
```

The backend is planned and will be added as development progresses. Do not assume a backend service is available locally yet.

## 🔀 Suggested two-person Git workflow

1. Pull the latest `main` before beginning a task.
2. Create a focused branch, for example `feat/profile-ui` or `docs/booking-design`.
3. Keep commits descriptive and scoped; avoid committing generated dependencies or secrets.
4. Push your branch and open a pull request describing what changed and how it was tested.
5. Have the other contributor review changes before merging to `main`.
6. Update documentation whenever behavior, commands, dependencies, or project status changes.

Example:

```bash
git checkout main
git pull origin main
git checkout -b feat/example-change
# Make and test changes
git add .
git commit -m "feat: describe the change"
git push -u origin feat/example-change
```

## ✅ Pull request checklist

- [ ] Scope and motivation are explained.
- [ ] Existing behavior was checked for regressions.
- [ ] Relevant frontend build checks pass (`npm run build`).
- [ ] No API keys, tokens, credentials, or personal data are committed.
- [ ] UI changes were reviewed on narrow and wide screens where relevant.
- [ ] Docs and roadmap statuses were updated if necessary.

## 🧰 Troubleshooting

| Symptom | Likely next step |
|:--|:--|
| `npm ERR! ENOENT` for `package.json` | Confirm you're inside `beyond-lens/frontend` |
| `'vite' is not recognized` | Run `npm ci` in `frontend/`, then retry |
| Dependency installation fails | Confirm Node/npm compatibility and lockfile integrity; read the full error |
| Build fails | Run `npm run build`, inspect the error, and fix before merging |

## 🔄 Always-current repository links

[![Commits this month](https://img.shields.io/github/commit-activity/m/kr-xyriin/beyond-lens?style=flat-square&color=8B5CF6)](https://github.com/kr-xyriin/beyond-lens/commits/main)
[![Open PRs](https://img.shields.io/github/issues-pr/kr-xyriin/beyond-lens?style=flat-square&color=6366F1)](https://github.com/kr-xyriin/beyond-lens/pulls)

[Commits](https://github.com/kr-xyriin/beyond-lens/commits/main) · [PR reviews](https://github.com/kr-xyriin/beyond-lens/pulls) · [Current frontend dependencies](https://github.com/kr-xyriin/beyond-lens/blob/main/frontend/package.json)

---

<div align="center"><sub>[Docs home](./README.md) · [Decisions](./decisions.md) · [Main README](../README.md)</sub></div>
