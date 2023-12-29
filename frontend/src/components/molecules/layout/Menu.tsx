'use client';

import { HamburgerButton } from '@/src/components/atoms/layout/HamburgerButton';
import { useState } from 'react';
import { MenuContent } from '@/src/components/molecules/layout/MenuContent';

export function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <HamburgerButton onClick={() => setShowMenu(!showMenu)} isOpen={showMenu} />
            {showMenu && <MenuContent isOpen={showMenu} setIsOpen={setShowMenu} />}
        </>
    );
}
