import Link from 'next/link';
import { ThemeToggle } from '@/src/components/atoms/layout/ThemeToggle';
import { BrandLogoText } from '@/src/components/atoms/logo/BrandLogo';
import { HeaderLink } from '@/src/components/atoms/layout/HeaderLink';
import { ClampedWidth } from '@/src/components/atoms/layout/ClampedWidth';
import { Menu } from '@/src/components/molecules/layout/Menu';
import { HEADERLINKS } from '@/src/utils/constants/header';

export function Header() {
    const Toggle = () => <ThemeToggle className="md:absolute md:right-4" />;
    return (
        <header className="h-fit flex flex-col w-full items-center">
            <ClampedWidth>
                {/* mobile */}
                <div className="contents md:hidden">
                    <div className="flex flex-row w-full relative justify-between items-center p-2">
                        <Link href="/">
                            <BrandLogoText size="md" />
                        </Link>
                        <Toggle />
                    </div>
                    <div className="flex flex-row w-full h-12 bg-brand-primary-500 justify-end border-y border-brand-primary-600 px-2">
                        <Menu />
                    </div>
                </div>
                {/* desktop */}
                <div className="hidden md:contents">
                    <div className="flex flex-row w-full relative justify-center items-center py-8">
                        <Link href="/">
                            <BrandLogoText size="xl" />
                        </Link>
                        <Toggle />
                    </div>
                    <div className="flex flex-row w-full justify-around h-12 bg-brand-primary-500 items-center rounded-lg border-2 border-brand-primary-600 divide-x divide-brand-primary-600">
                        {HEADERLINKS.map((link) => (
                            <HeaderLink key={link.name} {...link} nameClasses="font-bold text-white" />
                        ))}
                    </div>
                </div>
            </ClampedWidth>
        </header>
    );
}
