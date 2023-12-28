'use client';

import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';
import { classNames } from '@/src/utils/functions/classnames';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface HeaderLinkProps {
    name: string;
    href: string;
    menuItems?: HeaderLinkProps[];
    isNested?: boolean;
    className?: string;
    nameClasses?: string;
}

export function HeaderLink({ name, menuItems, isNested, className, nameClasses }: HeaderLinkProps) {
    return (
        <Popover
            className={classNames([
                'flex flex-col w-full h-full items-center justify-center relative',
                className,
                // need to distinguish because of nesting, otherwise the rounding does not properly work
                isNested ? 'group/subparent' : 'group/parent',
            ])}
        >
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classNames([
                            'w-full h-full focus:outline-none hover:bg-brand-primary-400',
                            isNested
                                ? 'p-2 flex flex-row group-first/subparent:rounded-t-lg group-last/subparent:rounded-b-lg'
                                : 'group-first/parent:rounded-l-md group-last/parent:rounded-r-md transition-colors ease-in-out',
                        ])}
                    >
                        <span className={nameClasses}>{name}</span>
                        {/* TODO: figure out why the icon does not appear if closed. Current implementation is hacky and not completely correct */}
                        {menuItems?.length ? (
                            <>
                                <Transition
                                    as={Fragment}
                                    show={open}
                                    enter="transition-transform ease-out duration-100"
                                    enterFrom="rotate-0"
                                    enterTo="rotate-180"
                                    leave="transition-transform ease-in duration-100"
                                    leaveFrom="rotate-180"
                                    leaveTo="rotate-0"
                                >
                                    <KeyboardArrowDown className={classNames(['absolute right-5'])} />
                                </Transition>
                                {!open ? <KeyboardArrowDown className={classNames(['absolute right-5'])} /> : undefined}
                            </>
                        ) : undefined}
                    </Popover.Button>
                    {menuItems?.length && (
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-0"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className={classNames([
                                    'absolute z-10 transform w-full',
                                    isNested ? 'left-full top-0 ml-1' : 'top-12',
                                ])}
                            >
                                <div className="rounded-lg border border-brand-primary-600 relative flex flex-col bg-brand-primary-500">
                                    {menuItems?.map((item) => {
                                        if (item.menuItems?.length) {
                                            return <HeaderLink key={item.name} {...item} isNested />;
                                        }
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center first:rounded-t-lg last:rounded-b-lg hover:bg-brand-primary-400 p-2"
                                            >
                                                <p>{item.name}</p>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    )}
                </>
            )}
        </Popover>
    );
}
