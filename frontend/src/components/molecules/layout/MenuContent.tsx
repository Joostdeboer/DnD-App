import { Dialog, Transition, Description, DialogTitle, DialogPanel, TransitionChild } from '@headlessui/react';
import { HEADERLINKS } from '@/src/utils/constants/links';
import { Close } from '@mui/icons-material';
import { Fragment } from 'react';
import { BrandLogoText } from '@/src/components/atoms/logo/BrandLogo';
import { MenuItem } from '../../atoms/layout/MenuItem';

export function MenuContent({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (input: boolean) => void }) {
    return (
        <Transition as={Fragment} show={isOpen}>
            <Dialog onClose={() => setIsOpen(false)} className="relative">
                {/* backdrop */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <span className="fixed inset-0 bg-black/30 z-10" aria-hidden="true" />
                </TransitionChild>

                {/* content */}
                <TransitionChild
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <DialogPanel className="fixed top-0 right-0 flex flex-col w-2/3 h-full p-4 bg-brand-neutral-100 dark:bg-brand-neutral-900 z-20 border-l border-brand-primary-600 overflow-y-auto">
                        <DialogTitle className="flex flex-row justify-between">
                            <BrandLogoText size="md" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex flex-col justify-start pt-1.5 text-black dark:text-white"
                            >
                                <Close />
                            </button>
                        </DialogTitle>
                        <Description
                            className="text-black dark:text-white font-bold border-b border-brand-neutral-500"
                            as="div"
                        >
                            {HEADERLINKS.map((link) => (
                                <MenuItem key={link.name} {...link} parentOnClose={() => setIsOpen(false)} />
                            ))}
                        </Description>
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
