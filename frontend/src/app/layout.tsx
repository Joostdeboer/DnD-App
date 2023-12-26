import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/src/components/organisms/layout/Header';
import { Footer } from '@/src/components/organisms/layout/Footer';
import { classNames } from '@/src/utils/functions/classnames';
import { Metadata } from 'next';
import { ClampedWidth } from '@/src/components/atoms/ClampedWidth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The Luroan Codex',
    description: 'A website containing information about Luroa',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
    icons: {
        icon: 'DnD-App/public/icon.ico',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="w-full">
            <body
                className={classNames([
                    inter.className,
                    'bg-brand-neutral-100 dark:bg-brand-neutral-900',
                    'flex flex-col items-center justify-center w-full',
                ])}
            >
                <Header />
                <ClampedWidth>
                    <div className="flex flex-row items-start min-h-96">{children}</div>
                </ClampedWidth>
                <Footer />
            </body>
        </html>
    );
}
