'use client';

import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { DarkModeTwoTone, LightModeTwoTone } from '@mui/icons-material';
import { ToggleIcon } from '@/src/components/atoms/generic/ToggleIcon';

export function ThemeToggle({ className }: { className?: string }) {
    let useDarkTheme: string | null = null;
    if (typeof window !== 'undefined') {
        useDarkTheme = localStorage.getItem('useDarkTheme');
    }
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (
            (useDarkTheme && JSON.parse(useDarkTheme) === true) ||
            (!useDarkTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setEnabled(true);
        } else {
            document.documentElement.classList.remove('dark');
            setEnabled(false);
        }
    }, [useDarkTheme]);

    function onChange(value: boolean) {
        setEnabled(value);
        localStorage.setItem('useDarkTheme', value.toString());
    }

    return (
        <Switch checked={enabled} onChange={onChange} className={className}>
            <span className="sr-only">Enable notifications</span>
            <ToggleIcon
                className="text-brand-secondary-500"
                renderOnIcon={({ style }) => <DarkModeTwoTone style={style} />}
                renderOffIcon={({ style }) => <LightModeTwoTone style={style} />}
                on={enabled}
                duration="300ms"
            />
        </Switch>
    );
}
