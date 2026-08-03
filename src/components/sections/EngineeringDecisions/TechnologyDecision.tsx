const technologyTable: readonly { responsibility: string; technology: string }[] = [
  { responsibility: 'Web Applications', technology: 'React · Vite' },
  { responsibility: 'Mobile Application', technology: 'React Native · Expo' },
  { responsibility: 'Language', technology: 'TypeScript / JavaScript' },
  { responsibility: 'Backend API', technology: 'Node.js · Express' },
  { responsibility: 'ORM', technology: 'Prisma' },
  { responsibility: 'Database', technology: 'PostgreSQL' },
  { responsibility: 'Web Deployment', technology: 'Vercel' },
  { responsibility: 'Backend Hosting', technology: 'Render' },
  { responsibility: 'Mobile Distribution', technology: 'Android APK' },
]

export function TechnologyDecision() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Technology decisions</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            Technology follows responsibility.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          Each technology is selected for a specific architectural responsibility—not to create a list of tools.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-panel border border-line bg-surface shadow-control">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="px-5 py-3 font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase" scope="col">
                Responsibility
              </th>
              <th className="px-5 py-3 font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase" scope="col">
                Technology
              </th>
            </tr>
          </thead>
          <tbody>
            {technologyTable.map((row) => (
              <tr key={row.responsibility} className="border-b border-line last:border-b-0">
                <th className="px-5 py-4 text-sm font-medium text-ink" scope="row">
                  {row.responsibility}
                </th>
                <td className="px-5 py-4 text-sm text-muted">{row.technology}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
