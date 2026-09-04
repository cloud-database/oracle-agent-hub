import Link from "next/link";

const productLinks = [
  { label: "Agent Kits", href: "/agent-kits" },
  { label: "Agents", href: "/agents" },
  { label: "Skills", href: "/skills" },
  { label: "Agent Lab", href: "/agent-lab" },
  { label: "Pricing", href: "/pricing" },
];

const resourceLinks = [
  { label: "Documentation", href: "/documentation" },
  { label: "FAQ", href: "/faq" },
  { label: "Deployment", href: "/documentation#deployment" },
  { label: "Blog", href: "#" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Custom Kits", href: "/request-custom-kit" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.svg"
              alt="OracleAgentHub"
              width={40}
              height={40}
              className="h-10 w-auto brightness-200"
            />
            <div>
              <p className="text-white font-semibold text-base">OracleAgentHub</p>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                Agentic intelligence for Oracle environments.
              </p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 OracleAgentHub. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Oracle is a registered trademark of Oracle Corporation. OracleAgentHub is not affiliated with or endorsed by Oracle.
          </p>
        </div>
      </div>
    </footer>
  );
}
