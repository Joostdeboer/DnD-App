import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { ReactNode } from 'react';
import { Close } from '@mui/icons-material';
import { Text } from '@/src/components/atoms/generic/Text';

export function Modal({
    children,
    title,
    isOpen,
    setIsOpen,
}: {
    children: ReactNode;
    title?: string;
    isOpen: boolean;
    setIsOpen: (input: boolean) => void;
}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/75" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="bg-white p-8">
                    <div className="flex flex-row justify-between items-center">
                        {title && <DialogTitle className="font-bold">{title}</DialogTitle>}
                        <button onClick={() => setIsOpen(false)}>
                            <Text isMuted>
                                Close
                                <Close />
                            </Text>
                        </button>
                    </div>
                    <Description>{children}</Description>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
