import { useQuery } from '@apollo/client';
import console from 'console';
import React from 'react';
import { PageError } from '../components/error/PageError';
import { PageLoading } from '../components/loading/PageLoading';
import { JOBS_QUERY } from '../graphql/queries/JobsQuery';

export const Dashboard = () => {
  const { loading, error, data } = useQuery(JOBS_QUERY, {
    variables: { type: '', slug: '' },
  });

  if (loading) return <PageLoading />;
  if (error) return <PageError />;

  //console.log(data.jobs)

  return <PageLoading />;
};
