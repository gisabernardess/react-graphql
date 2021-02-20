import { useQuery } from '@apollo/client';
import React from 'react';
import { PageAlert, PageLoading } from '../../components';
import { JOBS_QUERY } from '../../graphql';
import { Container, Grid, Item } from './styles';
import { JobListView } from '../job-list/JobListView';

export const DashboardView = () => {
  const { loading, error, data } = useQuery(JOBS_QUERY, {
    variables: { type: '', slug: '' },
  });

  if (loading) return <PageLoading />;
  if (error) return <PageAlert />;

  return (
    <Container>
      <Grid>
        <Item style={{ justifyContent: 'flex-start' }}>
          <span>Title</span>
        </Item>
        <Item>
          <span>Company</span>
        </Item>
        <Item>
          <span>City</span>
        </Item>
        <Item>
          <span>Country</span>
        </Item>
        <Item>
          <span>Remote</span>
        </Item>
      </Grid>
      <JobListView jobs={data?.jobs} />
    </Container>
  );
};
