export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} OrderEase. Built for small sellers.
        </p>
        <p className="text-sm text-muted-foreground">
          Contact: <a href="mailto:hello@orderease.app" className="underline hover:text-primary">hello@orderease.app</a>
        </p>
      </div>
    </footer>
  );
}
