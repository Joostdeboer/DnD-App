import { HeaderLinkProps } from '@/src/components/atoms/layout/HeaderLink';
import { Disclosure, Transition, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { classNames } from '@/src/utils/functions/classnames';
import { KeyboardArrowUp } from '@mui/icons-material';
import Link from 'next/link';

export function MenuItem(link: HeaderLinkProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <div
                    className={classNames([
                        'border-t border-brand-neutral-500',
                        open ? 'pt-2' : 'py-2',
                        link.className,
                        link.disabled ? 'cursor-not-allowed' : '',
                    ])}
                >
                    <DisclosureButton
                        className={classNames([
                            'flex w-full justify-between focus:outline-none',
                            open ? 'pb-2' : '',
                            link.disabled ? 'line-through text-brand-neutral-500' : '',
                        ])}
                        disabled={link.disabled}
                    >
                        {link.disabled ? (
                            <span className="cursor-not-allowed w-full flex items-start">{link.name}</span>
                        ) : link.menuItems?.length ? (
                            <>
                                <span>{link.name}</span>
                                <KeyboardArrowUp
                                    className={classNames([
                                        open ? 'rotate-180' : 'rotate-0',
                                        'h-5 w-5 transition-transform ease-in-out duration-100',
                                    ])}
                                />
                            </>
                        ) : (
                            <Link
                                href={link.href}
                                onClick={link.parentOnClose}
                                className="w-full flex items-start"
                                prefetch={true}
                            >
                                {link.name}
                            </Link>
                        )}
                    </DisclosureButton>
                    {link.menuItems?.length && (
                        <Transition
                            enter="transition ease-out duration-500"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-50"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <DisclosurePanel as="span">
                                {link.menuItems.map((item) => {
                                    return (
                                        <MenuItem
                                            key={item.name}
                                            {...item}
                                            parentOnClose={link.parentOnClose}
                                            className="pl-2 text-sm"
                                        />
                                    );
                                })}
                            </DisclosurePanel>
                        </Transition>
                    )}
                </div>
            )}
        </Disclosure>
    );
}
