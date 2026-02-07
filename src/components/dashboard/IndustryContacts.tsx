import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function IndustryContacts() {
  const contacts = [
    { name: "Alice Johnson", role: "Product Manager", initials: "AJ" },
    { name: "Bob Smith", role: "CTO", initials: "BS" },
    { name: "Charlie Davis", role: "Investor", initials: "CD" },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Industry Contacts</CardTitle>
        <CardDescription>Key connections.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contacts.map((contact, i) => (
            <div key={contact.name} className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{contact.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-muted-foreground">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
