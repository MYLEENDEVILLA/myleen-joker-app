function Section({ title, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-slate-700">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">About myJOKER</h1>
        <p className="mt-1 text-slate-600">What the app does and where the jokes come from.</p>
      </div>

      <Section title="What is myJOKER?">
        <p>
          myJOKER is a small website for browsing jokes. The home page shows a list of jokes that you can
          search. Click a joke to open it on its own page, then press the button to reveal the punchline.
          Press &quot;Shuffle new jokes&quot; on the home page to get a fresh batch.
        </p>
      </Section>

      <Section title="Where do the jokes come from?">
        <p>
          The jokes come from a free public website called the Official Joke API on GitHub. The app does
          not store any jokes itself. Every time you open it, the jokes are fetched from the internet.
        </p>
      </Section>
    </div>
  )
}
