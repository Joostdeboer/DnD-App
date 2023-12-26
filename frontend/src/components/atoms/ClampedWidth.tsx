import { ReactNode } from 'react';

export function ClampedWidth({ children }: { children: ReactNode }) {
    return <div className="max-w-[1440px] w-full">{children}</div>;
}
