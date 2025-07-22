'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

export interface SetSearchParamsInput {
    name: string;
    value: string[] | string | undefined | null | false;
}

// https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
export function useSetSearchParams() {
    const searchParams = useSearchParams();

    return useCallback(
        (inputParams: SetSearchParamsInput[]) => {
            // delete a param if it is undefined
            const params = new URLSearchParams(searchParams.toString());
            for (const { name, value } of inputParams) {
                if (value === '' || value === null || value === undefined || value === false) {
                    params.delete(name);
                } else {
                    const paramValue = Array.isArray(value) ? value.join(';') : value;
                    params.set(name, paramValue);
                }
            }

            return params.toString();
        },
        [searchParams],
    );
}
