type EditorialInsightProps = {
  body: string
  headline: string
}

export function EditorialInsight({ body, headline }: EditorialInsightProps) {
  return (
    <div className="relative overflow-hidden rounded-panel border border-line bg-ink p-6 text-white sm:p-10">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent-soft uppercase">
        Key message
      </p>
      <p className="mt-5 max-w-2xl text-2xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-3xl">
        {headline}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
        {body}
      </p>
    </div>
  )
}
