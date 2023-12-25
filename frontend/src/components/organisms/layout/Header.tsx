import Link from 'next/link';
import { ThemeToggle } from '@/src/components/atoms/ThemeToggle';
import { BrandLogo } from '@/src/components/atoms/BrandLogo';
import { HeaderLink } from '@/src/components/atoms/HeaderLink';

export function Header() {
    // TODO: fix max-w-[1440px] to apply on the header links
    return (
        <header className="h-fit flex flex-col w-full">
            <div className="flex flex-row justify-between items-center">
                <span />
                <Link href="/">
                    <BrandLogo />
                </Link>
                <ThemeToggle />
            </div>
            <div className="flex flex-row justify-around h-12 bg-brand-primary-500 items-center">
                <HeaderLink
                    name="Luroa"
                    href="/luroa"
                    menuItems={[
                        { name: 'About', href: '/luroa/about' },
                        { name: 'About', href: '/luroa/about' },
                    ]}
                />
                <HeaderLink name="Writing" href="/writing" />
                <HeaderLink name="Gameplay" href="/gameplay" />
                <HeaderLink name="Tools" href="/tools" />
            </div>
        </header>
    );
}
