import ProjectCarousel from "@/components/ui/project-carousel";

export default function ProjectsPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Engineering Work
          </span>
          <h1 className="text-3xl font-bold mt-1 text-zinc-100">
            Featured Projects & Labs
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Cryptographic systems, threat modeling labs, and real-time
            observability architectures[cite: 2].
          </p>
        </div>

        <ProjectCarousel />
      </div>
    </main>
  );
}
