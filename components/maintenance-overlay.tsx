import { AlertTriangle } from "lucide-react"

export function MaintenanceOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80">
      <div className="mx-4 max-w-md rounded-lg border-2 border-primary bg-card p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <AlertTriangle className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-foreground">Site Under Maintenance</h2>
          <p className="text-muted-foreground">
            We're currently performing scheduled maintenance to improve your experience. The site will be available
            again shortly.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Thank you for your patience.</p>
        </div>
      </div>
    </div>
  )
}
