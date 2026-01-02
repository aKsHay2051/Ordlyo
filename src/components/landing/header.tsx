import { MessageCircleHeart } from 'lucide-react';

export function Header() {
  return (
    <header className="p-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="Ordlyo homepage">
            <MessageCircleHeart className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Ordlyo
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
