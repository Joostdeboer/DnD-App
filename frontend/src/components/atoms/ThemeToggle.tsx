'use client';

import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { DarkModeTwoTone, LightModeTwoTone } from '@mui/icons-material';

export function ThemeToggle() {
    let useDarkTheme: string | null = null;
    if (typeof window !== 'undefined') {
        useDarkTheme = localStorage.getItem('useDarkTheme');
    }
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (useDarkTheme && JSON.parse(useDarkTheme) === true) {
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
        <Switch
            checked={enabled}
            onChange={onChange}
            // className={classNames([
            //     enabled ? 'bg-brand-secondary-500' : 'bg-brand-neutral-500',
            //     'relative inline-flex h-6 w-11 items-center rounded-full',
            // ])}
        >
            <span className="sr-only">Enable notifications</span>
            <span className="text-brand-secondary-500">{enabled ? <DarkModeTwoTone /> : <LightModeTwoTone />}</span>
            {/*<span*/}
            {/*    className={classNames([*/}
            {/*        enabled ? 'translate-x-6' : 'translate-x-1',*/}
            {/*        'inline-block h-4 w-4 transform rounded-full bg-white transition',*/}
            {/*    ])}*/}
            {/*/>*/}
        </Switch>
    );
}
