import { WeeklyGoals } from "@/components/dashboard/WeeklyGoals"
import { BooksLog } from "@/components/dashboard/BooksLog"
import { IndustryContacts } from "@/components/dashboard/IndustryContacts"
import { ProjectProgress } from "@/components/dashboard/ProjectProgress"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <WeeklyGoals />
        <BooksLog />
        <IndustryContacts />
        <ProjectProgress />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex items-center justify-center text-muted-foreground">
        Main Dashboard Content Area
      </div>
    </div>
  )
}
