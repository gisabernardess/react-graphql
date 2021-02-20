import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Job } from '../../@types/model';
import { Container, Grid, Item } from './styles';

interface JobListViewProps {
  jobs: [Job];
}

export const JobListView = ({ jobs }: JobListViewProps) => {
  return (
    <Container>
      <Grid>
        {jobs.map((job: Job) => (
          <>
            <Item style={{ justifyContent: 'flex-start' }}>{job.title}</Item>
            <Item>{job.company.name}</Item>
            <Item>{job.locationNames ?? job.cities[0]?.name ?? '-'}</Item>
            <Item>{job.countries[0]?.name ?? '-'}</Item>
            <Item>
              {job.remotes.length > 0 ? (
                <FaCheck color="#008000" />
              ) : (
                <FaTimes color="#FF0000" />
              )}
            </Item>
          </>
        ))}
      </Grid>
    </Container>
  );
};
