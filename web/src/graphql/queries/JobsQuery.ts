import { gql } from '@apollo/client';

export const JOBS_QUERY = gql`
  query JobsQuery($type: String!, $slug: String!) {
    jobs(input: { type: $type, slug: $slug }) {
      id
      title
      applyUrl
      locationNames
      company {
        id
        name
      }
      cities {
        id
        name
      }
      countries {
        id
        name
      }
      remotes {
        id
      }
    }
  }
`;
