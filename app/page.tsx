import Countdown from './components/Countdown';
import DeadlineCountdown from './components/DeadlineCountdown';

const stats = [
  { label: 'Applicants', value: '24', icon: '👥' },
  { label: 'Sponsors', value: '5', icon: '🤝' },
  { label: 'Judges', value: '8', icon: '⚖️' },
  { label: 'Teams Confirmed', value: '3', icon: '✅' },
];

const activity = [
  { time: '2h ago', text: 'New applicant: MIT team submitted application' },
  { time: '5h ago', text: 'Sponsor confirmed: Anthropic partnership finalized' },
  { time: '1d ago', text: 'Judge added: Harvard CS professor joined panel' },
  { time: '1d ago', text: 'New applicant: Stanford solo founder applied' },
  { time: '2d ago', text: 'Sponsor inquiry: Series A fund reached out' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold text-gray-950">
              C
            </div>
            <span className="text-lg font-bold tracking-tight">ClawComp</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Dashboard</a>
            <a href="https://clawcomp.net" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Apply</a>
            <a href="https://clawcomp.net" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Sponsors</a>
          </nav>
          <div className="flex flex-col items-end">
            <a
              href="https://clawcomp.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Apply Now
            </a>
            <DeadlineCountdown />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 mb-2">
            Season 1 · Now Accepting Applications
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            The AI Build Program<br />
            <span className="text-cyan-400">for Elite Innovators</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Three months. Real projects. Real outcomes. Every accepted team gets a Mac Mini — and a shot at ClawWeek.
          </p>
        </section>

        {/* Countdown */}
        <section className="text-center space-y-6">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-1">ClawWeek Begins</h2>
            <p className="text-gray-300 font-medium">June 15–18, 2026 · Link Studios, Cambridge MA</p>
          </div>
          <Countdown />
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-lg font-semibold text-gray-300 mb-6">Pipeline Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ label, value, icon }) => (
              <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-2">
                <div className="text-2xl">{icon}</div>
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Feed */}
        <section>
          <h2 className="text-lg font-semibold text-gray-300 mb-6">Recent Activity</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl divide-y divide-gray-800">
            {activity.map(({ time, text }, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                <span className="text-gray-200 flex-1 text-sm">{text}</span>
                <span className="text-xs text-gray-600 shrink-0">{time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-10 space-y-6">
          <h2 className="text-2xl font-bold">What is ClawComp?</h2>
          <p className="text-gray-400 leading-relaxed">
            ClawComp is a month-long AI build program for the most serious builders. Not a weekend hackathon —
            teams of 1–3 have roughly three months to design, build, and iterate on autonomous AI systems that solve real problems
            with measurable outcomes. Wrapper products don&apos;t make the cut.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {[
              { title: 'Hardware Included', body: 'Every accepted team receives a Mac Mini funded by Link Ventures. You keep it regardless of where you finish.' },
              { title: 'ClawWeek Summit', body: 'The final 4 days at Link Studios in Cambridge. Founders, investors, Harvard & MIT professors. Live leaderboard. Formal awards.' },
              { title: 'Real Prizes', body: 'Top 3 teams receive cash prizes. The overall winner gets pitch intros and access to the full Link Ventures ecosystem.' },
            ].map(({ title, body }) => (
              <div key={title} className="space-y-2">
                <h3 className="font-semibold text-cyan-400">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-cyan-500 rounded flex items-center justify-center text-xs font-bold text-gray-950">C</div>
            <span>ClawComp · A Link Ventures Program</span>
          </div>
          <a href="https://clawcomp.net" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            clawcomp.net
          </a>
          <span>© 2026 ClawComp LLC. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
