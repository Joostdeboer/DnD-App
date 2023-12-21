'use client';

import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { classNames } from '@/src/utils/functions/classnames';

export function ThemeToggle() {
    let useDarkTheme: string | null = null;
    if (typeof window !== undefined && !!localStorage) {
        useDarkTheme = localStorage.getItem('useDarkTheme');
    }

    useEffect(() => {
        if (useDarkTheme && JSON.parse(useDarkTheme) === true) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [useDarkTheme]);

    const [enabled, setEnabled] = useState(useDarkTheme ? JSON.parse(useDarkTheme) === true : false);

    function onChange(value: boolean) {
        setEnabled(value);
        localStorage.setItem('useDarkTheme', value.toString());
    }

    return (
        <Switch
            checked={enabled}
            onChange={onChange}
            className={classNames([
                enabled ? 'bg-brand-secondary-500' : 'bg-brand-neutral-500',
                'relative inline-flex h-6 w-11 items-center rounded-full',
            ])}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={classNames([
                    enabled ? 'translate-x-6' : 'translate-x-1',
                    'inline-block h-4 w-4 transform rounded-full bg-white transition',
                ])}
            />
        </Switch>
    );
}
