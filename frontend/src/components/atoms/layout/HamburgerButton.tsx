import { ToggleIcon } from '@/src/components/atoms/generic/ToggleIcon';
import { Menu, Close } from '@mui/icons-material';

export function HamburgerButton({
    isOpen,
    onClick,
    className,
}: {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}) {
    return (
        <button onClick={onClick} className={className}>
            <ToggleIcon
                on={isOpen}
                renderOffIcon={({ style }) => <Menu style={style} />}
                renderOnIcon={({ style }) => <Close style={style} />}
                duration="500ms"
            />
        </button>
    );
}
