import { useQuery } from '@apollo/client';
import React from 'react';
import { PageAlert, PageLoading } from '../../components';
import { JOBS_QUERY } from '../../graphql';

export const DashboardView = () => {
  const { loading, error, data } = useQuery(JOBS_QUERY, {
    variables: { type: '', slug: '' },
  });

  if (loading) return <PageLoading />;
  if (error) return <PageAlert />;

  console.log(data.jobs);

  return <div>Main</div>;
};
