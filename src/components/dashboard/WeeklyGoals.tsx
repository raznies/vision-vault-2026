import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

export function WeeklyGoals() {
  const goals = [
    { id: 1, text: "Complete Next.js Project", completed: true },
    { id: 2, text: "Read 50 pages", completed: false },
    { id: 3, text: "Network with 2 people", completed: false },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Weekly Goals</CardTitle>
        <CardDescription>Track your weekly targets.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {goals.map((goal) => (
            <li key={goal.id} className="flex items-center gap-2">
              {goal.completed ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground" />
              )}
              <span className={goal.completed ? "line-through text-muted-foreground" : ""}>
                {goal.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
