'use client';

import { CopyrightOutlined } from '@mui/icons-material';

export function Copyright() {
    // https://ondernemersplein.kvk.nl/auteursrecht/
    return (
        <span className="text-sm flex flex-row gap-1 items-center justify-center">
            <CopyrightOutlined fontSize="small" />
            <span> 2023, LuroanCodex</span>
        </span>
    );
}
