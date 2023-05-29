import { defineCliConfig } from 'sanity/cli';
import { SANITY_PROJECT_ID } from './constants';

export default defineCliConfig({
    api: {
        projectId: SANITY_PROJECT_ID,
        dataset: 'production',
    },
});
