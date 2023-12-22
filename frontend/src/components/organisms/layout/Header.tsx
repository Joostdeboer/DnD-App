import Link from 'next/link';
import { ThemeToggle } from '@/src/components/atoms/ThemeToggle';

export function Header() {
    // TODO: fix max-w-[1440px] to apply on the header links
    return (
        <header className="h-16 flex flex-col w-full">
            <div className="flex flex-row justify-between">
                <span />
                <Link href="/">Logo</Link>
                <ThemeToggle />
            </div>
            <div className="flex flex-row justify-around bg-brand-primary-700">
                <nav>
                    <Link href="/luroa">Luroa</Link>
                </nav>
                <nav>
                    <Link href="/writing">Writing</Link>
                </nav>
                <nav>
                    <Link href="/gameplay">Gameplay</Link>
                </nav>
                <nav>
                    <Link href="/tools">Tools</Link>
                </nav>
            </div>
        </header>
    );
}
