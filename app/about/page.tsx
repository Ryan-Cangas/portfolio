import {
  GraduationCap,
  Award,
  CheckCircle2,
  Shield,
  Server,
  Lock,
  Terminal,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 space-y-12">
        <section>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Background
          </span>
          <h1 className="text-3xl font-bold mt-1 text-zinc-100">About Me</h1>
          <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
            Security & Systems Engineer with hands-on experience in Secure
            System Architecture, Applied Cryptography, Multi-Tenant IAM, and SOC
            Operations. Adept at evaluating client infrastructure, automating
            incident triage, and delivering compliance-focused telemetry
            solutions.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
            Production Experience
          </h2>
          <div className="border-l border-cyan-500/30 pl-6 space-y-6">
            <div>
              <span className="text-xs text-cyan-400 font-mono">
                May 2026 - Present
              </span>
              <h3 className="text-base font-semibold text-zinc-100">
                CloudHost Technology (RVS Group)
              </h3>
              <p className="text-xs text-zinc-400 mb-2">
                SOC Analyst & Platform Engineer • Dubai, UAE
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li>
                  • Architected and deployed OpenObserve SIEM telemetry across
                  multi-tenant infrastructures.
                </li>
                <li>
                  • Enforced strict IAM, RBAC, and SSO frameworks for client
                  isolation and compliance dashboards.
                </li>
                <li>
                  • Built high-throughput Vector Remap Language (VRL) log
                  normalization pipelines.
                </li>
                <li>
                  • Formulated threat detection triggers with automated alerts
                  via ntfy.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-1.5">
              <GraduationCap size={15} className="text-cyan-400" /> Education
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40">
                <span className="text-[11px] text-cyan-400 font-mono">
                  June 2026
                </span>
                <p className="text-xs font-medium text-zinc-200">
                  BSc (Hons) Software Engineering
                </p>
                <p className="text-[11px] text-zinc-400">
                  Upper Second Class Honors • Univ. of Stirling
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40">
                <span className="text-[11px] text-cyan-400 font-mono">
                  2022 - 2024
                </span>
                <p className="text-xs font-medium text-zinc-200">
                  Computer Science Diploma
                </p>
                <p className="text-[11px] text-zinc-400">
                  Scottish Qualifications Authority (SQA)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-1.5">
              <Award size={15} className="text-cyan-400" /> Certifications
            </h2>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <CheckCircle2 size={13} className="text-cyan-400" />
                <span>RHEL Foundations (2026)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <CheckCircle2 size={13} className="text-cyan-400" />
                <span>AWS Cloud & Security Foundations (2026)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <CheckCircle2 size={13} className="text-cyan-400" />
                <span>Cisco Networking Basics (2026)</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
