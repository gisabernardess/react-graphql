import React from 'react';
import { render, screen } from '@testing-library/react';
import { JobListView } from '../JobListView';
import { City, Country, Job } from '../../../@types/model';

const job = {
  id: '1',
  title: 'Job 1',
  locationNames: 'Location',
  applyUrl: '/',
  company: {
    id: '1',
    name: 'Company name',
  },
  cities: [{} as City],
  countries: [{} as Country],
  remotes: [{ id: '1' }],
};

test('renders learn react link', () => {
  render(<JobListView jobs={[job as Job]} />);
  const linkElement = screen.getByText(/Job 1/i);
  expect(linkElement).toBeInTheDocument();
});
