import { MessageCircleHeart } from 'lucide-react';

export function Header() {
  return (
    <header className="p-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="OrderEase homepage">
            <MessageCircleHeart className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold font-headline text-foreground">
              OrderEase
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
