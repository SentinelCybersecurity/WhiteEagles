interface MetricCardProps {
  title: string
  value: string
  delay: string
  visible: boolean
}

export function MetricCard({ title, value, delay, visible }: MetricCardProps) {
  return (
    <div
      className={`text-center p-6 bg-muted/50 rounded-lg transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  )
}
