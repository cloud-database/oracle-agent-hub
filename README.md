# OracleAgentHub

**Agentic Intelligence for Oracle Environments**

OracleAgentHub is a specialized marketplace for tested, verified, Oracle-focused agentic skills, AI agents, workflows, automation utilities, and complete Agent Kits.

---

## What Is OracleAgentHub?

OracleAgentHub packages specialized Oracle intelligence into reusable agentic skills, agents, workflows, and complete Agent Kits. These are not generic AI prompts — they are deployment-ready agentic capabilities engineered for Oracle database environments.

**Product hierarchy:**

```
SKILL
  ↓
AGENT
  ↓
WORKFLOW
  ↓
AGENT KIT
  ↓
ENTERPRISE AGENTIC AUTOMATION
```

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Animation | CSS transitions (Agent Lab) |
| Database (future) | Oracle AI Database 26 AI |
| Deployment | Vercel |
| Source Control | GitHub |

---

## Project Structure

```
oracle-agent-hub/
│
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── agent-kits/             # Agent Kits marketplace
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     # Individual kit detail
│   ├── agents/page.tsx         # Agents marketplace
│   ├── skills/page.tsx         # Skills marketplace
│   ├── agent-lab/page.tsx      # Interactive Agent Lab demo
│   ├── documentation/page.tsx  # Documentation
│   ├── pricing/page.tsx        # Pricing
│   ├── about/page.tsx          # About
│   ├── contact/page.tsx        # Contact form
│   ├── request-custom-kit/     # Custom kit request
│   └── faq/page.tsx            # FAQ
│
├── components/
│   ├── layout/                 # Header, Footer
│   ├── ui/                     # Badge, Button, Card
│   ├── product/                # AgentKitCard, AgentCard, SkillCard, filters, badges
│   ├── hero/                   # HeroSection, FeatureStrip
│   ├── search/                 # SearchModal
│   └── agent-lab/              # WorkflowDiagram, DemoResult
│
├── data/products/              # Product catalog data (source of truth)
│   ├── agent-kits.ts           # 6 Agent Kit definitions
│   ├── agents.ts               # 10+ Agent definitions
│   └── skills.ts               # 20 Skill definitions
│
├── types/index.ts              # TypeScript interfaces
├── lib/
│   ├── utils.ts                # cn(), formatPrice(), slugify()
│   └── db.ts                   # Oracle DB abstraction layer (future)
│
├── public/
│   ├── logo.svg                # Full wordmark
│   ├── logo-mark.svg           # OA mark only
│   └── favicon.svg             # Favicon
│
├── assets/
│   └── visual.png              # Design reference visual
│
├── .env.example                # Environment variable template
└── README.md
```

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/cloud-database/oracle-agent-hub.git
cd oracle-agent-hub

# Install dependencies
npm install

# Copy environment template (edit as needed)
cp .env.example .env.local

# Start development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed.

| Variable | Description | Required |
|---|---|---|
| `ORACLE_DB_USER` | Oracle database user | Future |
| `ORACLE_DB_PASSWORD` | Oracle database password | Future |
| `ORACLE_DB_HOST` | Oracle host (default: localhost) | Future |
| `ORACLE_DB_PORT` | Oracle port (default: 1521) | Future |
| `ORACLE_DB_SERVICE` | Oracle service name (default: freepdb1) | Future |
| `NEXT_PUBLIC_APP_URL` | Public URL of the deployed site | Recommended |
| `CONTACT_FORM_EMAIL` | Email address for contact form submissions | Future |
| `RESEND_API_KEY` | Resend API key for email sending | Future |

**V1 runs without any database connection.** Oracle integration is prepared as an abstraction layer for future use.

---

## Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/agent-kits` | Agent Kits marketplace |
| `/agent-kits/[slug]` | Individual Agent Kit detail page |
| `/agents` | Agents marketplace with filtering |
| `/skills` | Skills marketplace with filtering |
| `/agent-lab` | Interactive workflow demo |
| `/documentation` | Documentation |
| `/pricing` | Pricing tiers |
| `/about` | About OracleAgentHub |
| `/contact` | Contact form |
| `/request-custom-kit` | Custom Agent Kit request |
| `/faq` | Frequently asked questions |

---

## Product Catalog Architecture

All product data lives in `data/products/`. Adding new products requires only editing these data files — no UI component changes needed.

### Agent Kit fields

```typescript
{
  id, slug, name, category,
  shortDescription, longDescription, businessProblem,
  icon, price, status, verificationStatus,
  agentCount, skillCount, workflowCount,
  features, agents, skills,
  compatibility, capabilities, whatIsIncluded,
  featured, popular, new
}
```

### Verification Status

```
Development    → ● In Development (amber)
Testing        → ● In Testing (blue)
Verified       → ✓ Verified (emerald)
Production Ready → ✓ Production Ready (green)
Coming Soon    → ○ Coming Soon (slate)
```

Only mark products as `Verified` or `Production Ready` when testing is actually complete.

---

## Deployment (Vercel)

1. Push repository to GitHub (`cloud-database` account)
2. Connect repository to Vercel
3. Set environment variables in Vercel project settings
4. Deploy

The application has no local path dependencies or hard-coded localhost references in production code.

---

## Oracle 26 AI Integration (Future)

Oracle integration is prepared in `lib/db.ts` as a stub abstraction layer. Future implementation:

1. Install `oracledb` npm package
2. Implement `executeQuery()` and `isDBAvailable()` in `lib/db.ts`
3. Use for: product catalog, customer accounts, license management, demo data, telemetry

The public website will never directly expose Oracle to the internet. All Oracle access is server-side only.

---

## Future Roadmap (V2+)

- [ ] User accounts and authentication
- [ ] Product purchases and licensing
- [ ] Secure kit downloads
- [ ] Customer dashboard
- [ ] Email contact form (Resend integration)
- [ ] Version management
- [ ] Blog
- [ ] Oracle 26 AI backend integration
- [ ] Real Agent Lab (authenticated, live Oracle connection)
- [ ] Enterprise licensing portal
- [ ] Custom kit builder UI

---

## Security

- No secrets in source code or `.env` files committed to git
- `.env.local` is git-ignored
- Oracle credentials are environment variables only
- No public exposure of Oracle database
- All database access is server-side only

---

## License

Proprietary. All rights reserved. OracleAgentHub products are commercial software.
