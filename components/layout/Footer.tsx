import Link from "next/link";
import { Linkedin, Github, Youtube, Mail } from "lucide-react";

const productLinks = [
  { label: "Agent Kits", href: "/agent-kits" },
  { label: "Demo", href: "/agent-lab" },
  { label: "Pricing", href: "/pricing" },
];

const resourceLinks = [
  { label: "Documentation", href: "/documentation" },
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "/faq" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#",         bg: "bg-blue-600"  },
  { icon: Github,   label: "GitHub",   href: "#",         bg: "bg-slate-700" },
  { icon: Youtube,  label: "YouTube",  href: "#",         bg: "bg-red-600"   },
  { icon: Mail,     label: "Email",    href: "/contact",  bg: "bg-slate-500" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand (col-span-2) + Product + Resources + Company + Connect = 6 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.svg"
              alt="OracleAgentHub"
              width={40}
              height={40}
              className="h-10 w-auto brightness-200"
            />
            <div>
              <p className="text-white font-semibold text-base">
                Oracle<span className="text-brand-blue">Agent</span>Hub
              </p>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xs">
                Intelligence. Automation. Results.
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
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
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
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
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
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map(({ icon: Icon, label, href, bg }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center hover:opacity-80 transition-opacity`}
                >
                  <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © 2026 OracleAgentHub. All rights reserved. Built with{" "}
            <span className="text-red-400">♥</span> for the Oracle Community.
          </p>
        </div>
      </div>
    </footer>
  );
}
