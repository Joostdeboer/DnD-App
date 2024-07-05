import Link from 'next/link';
import { ClampedWidth } from '@/src/components/atoms/layout/ClampedWidth';
import { BrandLogoText } from '@/src/components/atoms/logo/BrandLogo';
import { Copyright } from '@/src/components/atoms/logo/Copyright';
import { FOOTERLINKS, HEADERLINKS } from '@/src/utils/constants/links';

export function Footer() {
    return (
        <ClampedWidth className="mt-auto border-t border-brand-primary-600 text-white">
            <footer className="flex flex-row gap-8 md:gap-16 bg-brand-primary-500 w-full pt-4 pb-10 grow px-2 md:px-4 divide-x divide-brand-primary-600">
                <div className="flex flex-col gap-2">
                    <BrandLogoText useDarkMode={false} useWhite />
                    <Copyright />
                </div>
                <div className="flex flex-col gap-2 pl-5 md:pl-10">
                    {HEADERLINKS.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:underline">
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-2 pl-5 md:pl-10">
                    {FOOTERLINKS.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:underline">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </footer>
        </ClampedWidth>
    );
}
