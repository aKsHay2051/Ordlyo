export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ordlyo. Built for small sellers.
        </p>
        <p className="text-sm text-muted-foreground">
          Contact: <a href="mailto:hello@ordlyo.app" className="underline hover:text-primary">hello@ordlyo.app</a>
        </p>
      </div>
    </footer>
  );
}
