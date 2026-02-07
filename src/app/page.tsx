import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight">Vision Vault 2026</h1>
        <p className="text-xl text-muted-foreground">Premium Dashboard Template</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/dashboard">
            <Button size="lg" className="rounded-full">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
