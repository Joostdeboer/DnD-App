import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/src/components/organisms/layout/Header';
import { Footer } from '@/src/components/organisms/layout/Footer';
import { classNames } from '@/src/utils/functions/classnames';
import { Metadata, Viewport } from 'next';
import { ClampedWidth } from '@/src/components/atoms/layout/ClampedWidth';
import { SanityLive } from '@/src/configs/sanityConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The Luroan Codex',
    description: 'A website containing information about Luroa',
    icons: {
        icon: 'DnD-App/public/icon.ico',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="w-full">
            <body
                className={classNames([
                    inter.className,
                    'bg-brand-neutral-100 dark:bg-brand-neutral-900',
                    'flex flex-col items-center w-full min-h-screen',
                ])}
            >
                <SanityLive />
                <Header />
                <ClampedWidth>
                    <main className="flex flex-row items-start min-h-96 px-2 md:px-4 py-4">{children}</main>
                </ClampedWidth>
                <Footer />
            </body>
        </html>
    );
}
