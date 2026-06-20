# Security Overview

This project applies a "push left" approach: a STRIDE threat model was created with
[OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) **before** writing
any application code, right-sized for a static, unauthenticated single-page portfolio
with no backend, database, or contact form processing user input.

The full threat model source files are in [`/docs/ThreatDragonModels/My Portfolio 2026/My Portfolio 2026.json`](./docs/ThreatDragonModels/My%20Portfolio%202026.json)
(re-openable in Threat Dragon).

## Threat Model Summary

| Component | Threat (STRIDE) | Status | Severity | Notes / Mitigation |
|---|---|---|---|---|
| User/Browser (Actor) | Spoofing | N/A | TBD | No authentication system exists |
| User/Browser (Actor) | Repudiation | N/A | TBD | No logged user actions to dispute |
| GitHub Pages (Process) | Spoofing | Mitigated | Low | GitHub-managed HTTPS certificate + domain control |
| GitHub Pages (Process) | Tampering | Mitigated | Medium | 2FA enabled on the GitHub account |
| GitHub Pages (Process) | Repudiation | N/A | TBD | Static content, no audit trail needed |
| GitHub Pages (Process) | Information Disclosure | Open | Low | Contact email obfuscated behind a "reveal" click in the UI |
| GitHub Pages (Process) | Denial of Service | Mitigated | Low | Covered by GitHub's infrastructure-level protection |
| GitHub Pages (Process) | Elevation of Privilege | N/A | TBD | No privilege levels exist |
| NPM Dependencies (Actor) | Spoofing (typosquatting) | Open | Low | Manual verification + `package-lock.json`; ongoing vigilance, no full technical control |
| NPM Dependencies (Actor) | Repudiation | N/A | TBD | Not applicable |
| Data Flow: View Portfolio | Tampering | Mitigated | Low | HTTPS/TLS |
| Data Flow: View Portfolio | Information Disclosure | Mitigated | Low | HTTPS encryption |
| Data Flow: View Portfolio | Denial of Service | Mitigated | Low | GitHub infrastructure |
| Data Flow: Fetch Dependencies | **Tampering (supply chain)** | **Open** | **Medium** | **`npm audit` run regularly; `package-lock.json` committed; Dependabot alerts enabled** |
| Data Flow: Fetch Dependencies | Information Disclosure | Mitigated | Low | HTTPS to npm registry |
| Data Flow: Fetch Dependencies | Denial of Service | N/A | TBD | Availability issue, not a security vulnerability |

The single most relevant residual risk in this model is **supply chain tampering via a
compromised npm package** — addressed through `npm audit`, a committed lockfile, and
Dependabot, but not fully eliminated (no static site can fully eliminate this class of risk).

## Implemented Controls

- ✅ Two-factor authentication (2FA) enabled on the GitHub account
- ✅ HTTPS enforced (GitHub Pages default)
- ✅ `package-lock.json` committed; `npm audit` run before each release
- ✅ Dependabot alerts enabled
- ✅ Contact email obfuscated in the UI (click-to-reveal) to reduce bot scraping
- ✅ Security-related meta tags set in `index.html` (see below)
- ✅ `node_modules`, `.env`, and build output excluded via `.gitignore`

## `index.html` Security Meta Tags

Add inside `<head>` (Vite generates `index.html`; this is not automatic):

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self';" />
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
<meta name="referrer" content="strict-origin-when-cross-origin" />
```

## Known Limitation

GitHub Pages does not support custom HTTP response headers, so `X-Frame-Options`
(clickjacking protection) cannot be enforced via meta tag and is **not currently
implemented**. A future migration to a host that supports custom headers (e.g.,
Cloudflare Pages, Netlify) could close this gap.

## Reporting

This is a personal portfolio project with no user data collection. If you spot a
security issue anyway, feel free to open an issue or reach out via the contact
details on the site.