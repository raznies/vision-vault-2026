import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BooksLog() {
  const books = [
    { title: "Zero to One", author: "Peter Thiel", status: "Reading" },
    { title: "Atomic Habits", author: "James Clear", status: "Completed" },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Books Log</CardTitle>
        <CardDescription>Reading list for 2026.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {books.map((book, i) => (
            <li key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                {book.status}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
