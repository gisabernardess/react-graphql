import React from 'react';
import { DashboardView } from '../dashboard/DashboardView';

import { Header, Main } from './styles';

export const InitialView = () => (
  <>
    <Header />
    <Main>
      <DashboardView />
    </Main>
  </>
);
