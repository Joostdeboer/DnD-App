import { SetSearchParamsInput, useSetSearchParams } from '@/src/hooks/useSetSearchParams';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export function useSetUrl() {
    const setSearchParams = useSetSearchParams();
    const pathname = usePathname();

    return useCallback(
        (params: SetSearchParamsInput[]) => {
            return pathname + '?' + setSearchParams(params);
        },
        [pathname, setSearchParams],
    );
}
