'use client';

import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';
import { classNames } from '@/src/utils/functions/classnames';
import { Popover, Transition, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Fragment } from 'react';

export interface HeaderLinkProps {
    name: string;
    href: string;
    disabled?: boolean;
    menuItems?: HeaderLinkProps[];
    parentOnClose?: () => void;
    isNested?: boolean;
    className?: string;
    nameClasses?: string;
}

export function HeaderLink({
    name,
    disabled = false,
    parentOnClose,
    menuItems,
    isNested,
    className,
    nameClasses,
}: HeaderLinkProps) {
    return (
        <Popover
            className={classNames([
                'flex flex-col w-full h-full items-center justify-center relative',
                className,
                // need to distinguish because of nesting, otherwise the rounding does not properly work
                isNested ? 'group/subparent' : 'group/parent',
            ])}
        >
            {({ open, close }) => (
                <>
                    <PopoverButton
                        className={classNames([
                            'w-full h-full focus:outline-none transition-colors ease-in-out duration-200',
                            isNested
                                ? 'p-2 flex flex-row group-first/subparent:rounded-t-lg group-last/subparent:rounded-b-lg hover:bg-brand-primary-500'
                                : 'group-first/parent:rounded-l-md group-last/parent:rounded-r-md hover:bg-brand-primary-600',
                            disabled ? 'line-through bg-brand-primary-700 hover:bg-brand-primary-500' : '',
                            open ? 'bg-brand-primary-500 *:text-white' : '',
                        ])}
                        disabled={disabled}
                    >
                        <span className={nameClasses}>{name}</span>
                        {menuItems?.length ? (
                            <KeyboardArrowDown
                                className={classNames([
                                    open ? 'rotate-180' : 'rotate-0',
                                    'transition-transform ease-in-out duration-100 absolute right-5',
                                    isNested
                                        ? 'text-black dark:text-white group-hover/subparent:text-white'
                                        : 'text-white',
                                ])}
                            />
                        ) : undefined}
                    </PopoverButton>
                    {menuItems?.length && (
                        <Transition
                            as={Fragment}
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-0"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                className={classNames([
                                    'absolute z-10 transform w-full',
                                    isNested ? 'left-full top-0 ml-1' : 'top-12',
                                ])}
                            >
                                <div
                                    className={classNames([
                                        'text-black dark:text-white',
                                        'rounded-lg border border-brand-primary-600 relative flex flex-col bg-brand-neutral-100 dark:bg-brand-neutral-900 divide-y divide-brand-primary-600',
                                    ])}
                                >
                                    {menuItems?.map((item) => {
                                        if (item.disabled) {
                                            return (
                                                <div
                                                    key={item.name}
                                                    className="cursor-not-allowed flex items-center first:rounded-t-lg last:rounded-b-lg bg-brand-primary-700 hover:bg-brand-primary-600 p-2 transition-colors ease-in-out duration-200 line-through text-white"
                                                >
                                                    {item.name}
                                                </div>
                                            );
                                        }

                                        if (item.menuItems?.length) {
                                            return (
                                                <HeaderLink
                                                    key={item.name}
                                                    {...item}
                                                    parentOnClose={() => close()}
                                                    className="hover:text-white"
                                                    isNested
                                                />
                                            );
                                        }

                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => {
                                                    // we need to close both the current panel and potentially the one on top
                                                    parentOnClose?.();
                                                    close();
                                                }}
                                                className="flex items-center first:rounded-t-lg last:rounded-b-lg hover:bg-brand-primary-500 p-2 transition-colors ease-in-out duration-200 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    )}
                </>
            )}
        </Popover>
    );
}
