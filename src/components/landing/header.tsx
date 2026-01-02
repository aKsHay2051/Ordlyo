import { Button } from '@/components/ui/button';
import { MessageSquareText } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2" aria-label="Ordlyo homepage">
          <MessageSquareText className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Ordlyo
          </span>
        </a>
        <Button asChild variant="ghost" className="hidden sm:inline-flex">
          <a href="#waitlist">
            Join Waitlist
          </a>
        </Button>
      </div>
    </header>
  );
}
