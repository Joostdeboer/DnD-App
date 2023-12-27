import Link from 'next/link';
import { ThemeToggle } from '@/src/components/atoms/ThemeToggle';
import { BrandLogoText } from '@/src/components/atoms/BrandLogo';
import { HeaderLink } from '@/src/components/atoms/HeaderLink';
import { ClampedWidth } from '@/src/components/atoms/ClampedWidth';

export function Header() {
    // TODO: make mobile header with hamburger menu
    return (
        <header className="h-fit flex flex-col w-full items-center">
            <ClampedWidth>
                <div className="flex flex-row w-full relative justify-center items-center py-8">
                    <Link href="/">
                        <BrandLogoText size="xl" />
                    </Link>
                    <ThemeToggle />
                </div>
                <div className="w-full flex flex-row justify-around h-12 bg-brand-primary-500 items-center rounded-lg border-2 border-brand-primary-600 divide-x divide-brand-primary-600">
                    <HeaderLink
                        name="Luroa"
                        href="/luroa"
                        menuItems={[
                            { name: 'About', href: '/luroa/about' },
                            {
                                name: 'Test',
                                href: '/luroa/about',
                            },
                        ]}
                    />
                    <HeaderLink name="Writing" href="/writing" />
                    <HeaderLink name="Gameplay" href="/gameplay" />
                    <HeaderLink name="Tools" href="/tools" />
                </div>
            </ClampedWidth>
        </header>
    );
}
