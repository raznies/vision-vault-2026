import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProjectProgress() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
        <CardDescription>Milestones achieved.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>MVP Launch</span>
            <span>80%</span>
          </div>
          <Progress value={80} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Marketing Campaign</span>
            <span>45%</span>
          </div>
          <Progress value={45} />
        </div>
      </CardContent>
    </Card>
  )
}
