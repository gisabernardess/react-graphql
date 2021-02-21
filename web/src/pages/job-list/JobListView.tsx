import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
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
          <React.Fragment key={job.id}>
            <Item>
              <a href={job.applyUrl} target="_blank" rel="noreferrer">
                {job.title}
              </a>
            </Item>
            <Item>{job.company.name}</Item>
            <Item>{job.locationNames ?? job.cities[0]?.name ?? '-'}</Item>
            <Item>{job.countries[0]?.name ?? '-'}</Item>
            <Item>
              {job.remotes.length > 0 ? (
                <FaCheck color="var(--color-success)" />
              ) : (
                <FaTimes color="var(--color-danger)" />
              )}
            </Item>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};
