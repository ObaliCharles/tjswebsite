import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/settings")({
  head: () => ({ meta: [{ title: "Settings — TJ's Beauty Line" }] }),
  component: () => (
    <div>
      <h1 className="font-serif text-3xl">Settings</h1>
      <p className="text-muted-foreground text-sm mt-2">Notification preferences, password and privacy.</p>
      <div className="mt-8 space-y-4 max-w-md">
        <label className="flex items-center justify-between border border-border p-4 text-sm">
          Email promotions <input type="checkbox" defaultChecked />
        </label>
        <label className="flex items-center justify-between border border-border p-4 text-sm">
          SMS appointment reminders <input type="checkbox" defaultChecked />
        </label>
        <label className="flex items-center justify-between border border-border p-4 text-sm">
          WhatsApp updates <input type="checkbox" />
        </label>
      </div>
    </div>
  ),
});
