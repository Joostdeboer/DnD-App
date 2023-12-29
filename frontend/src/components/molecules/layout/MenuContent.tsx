import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { HEADERLINKS } from '@/src/utils/constants/header';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Fragment } from 'react';
import { classNames } from '@/src/utils/functions/classnames';
import { HeaderLinkProps } from '@/src/components/atoms/layout/HeaderLink';
import Link from 'next/link';
import { BrandLogoText } from '@/src/components/atoms/logo/BrandLogo';

function MenuItem(link: HeaderLinkProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <div
                    className={classNames([
                        'border-t border-brand-neutral-500',
                        open ? 'pt-2' : 'py-2',
                        link.className,
                    ])}
                >
                    <Disclosure.Button
                        className={classNames(['flex w-full justify-between focus:outline-none', open ? 'pb-2' : ''])}
                    >
                        {link.menuItems?.length ? (
                            <>
                                <span>{link.name}</span>
                                <KeyboardArrowUp
                                    className={classNames([
                                        open ? 'rotate-180 transform' : '',
                                        'h-5 w-5 duration-100 ease-in-out',
                                    ])}
                                />
                            </>
                        ) : (
                            <Link href={link.href}>{link.name}</Link>
                        )}
                    </Disclosure.Button>
                    {link.menuItems?.length && (
                        <Disclosure.Panel as="span">
                            {link.menuItems.map((item) => {
                                return <MenuItem key={item.name} {...item} className="pl-2" />;
                            })}
                        </Disclosure.Panel>
                    )}
                </div>
            )}
        </Disclosure>
    );
}

export function MenuContent({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (input: boolean) => void }) {
    return (
        <Transition as={Fragment} show={isOpen}>
            <Dialog onClose={() => setIsOpen(false)} className="relative">
                {/* backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <span className="fixed inset-0 bg-black/30 z-10" aria-hidden="true" />
                </Transition.Child>

                {/* content */}
                <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-1000"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-2/3"
                    leave="transform transition ease-in-out duration-1000"
                    leaveFrom="translate-x-2/3"
                    leaveTo="translate-x-full"
                >
                    <Dialog.Panel className="fixed top-0 right-0 flex flex-col w-2/3 h-full p-4 bg-brand-neutral-100 dark:bg-brand-neutral-900 z-20 border-l border-brand-primary-600 overflow-y-auto">
                        <Dialog.Title className="flex flex-row justify-between">
                            <BrandLogoText size="md" />
                        </Dialog.Title>
                        <Dialog.Description className="text-black dark:text-white font-bold border-b border-brand-neutral-500">
                            {HEADERLINKS.map((link) => (
                                <MenuItem key={link.name} {...link} />
                            ))}
                        </Dialog.Description>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
