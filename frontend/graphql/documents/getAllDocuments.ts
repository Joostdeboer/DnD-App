import { gql } from '@apollo/client';

export const AllGodsDocument = gql`
    {
        allGod {
            name
            title
            domains
        }
    }
`;
