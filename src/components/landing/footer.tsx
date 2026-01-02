import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ordlyo. Built for small sellers.
        </p>
        <nav className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
            </Link>
        </nav>
      </div>
    </footer>
  );
}
