import Link from 'next/link';
import { ThemeToggle } from '@/src/components/atoms/ThemeToggle';

export function Header() {
    return (
        <header className="h-16 flex flex-col">
            <div className="flex flex-row justify-between">
                <span />
                <Link href="/">Logo</Link>
                <ThemeToggle />
            </div>
            <div className="flex flex-row justify-around bg-brand-primary-300 ">
                <nav>
                    <Link href="/a">a</Link>
                </nav>
                <nav>
                    <Link href="/a">a</Link>
                </nav>
                <nav>
                    <Link href="/a">a</Link>
                </nav>
                <nav>
                    <Link href="/a">a</Link>
                </nav>
            </div>
        </header>
    );
}
