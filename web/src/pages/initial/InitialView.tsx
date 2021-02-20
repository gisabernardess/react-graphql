import React from 'react';
import { DashboardView } from '../dashboard/DashboardView';
import {
  FaHeart,
  FaHandPointRight,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import { Footer, Header, Main } from './styles';

export const InitialView = () => (
  <>
    <Header />
    <Main>
      <DashboardView />
    </Main>
    <Footer>
      <div>
        Made with
        <FaHeart color="red" style={{ margin: '0 0.25rem' }} />
        by Gisele Silva
        <FaHandPointRight color="#FFD700" style={{ margin: '0 0.25rem' }} />
        <a href="mailto:giiselebernardes@gmail.com">Get in touch!</a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/gisabernardess/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin color="#1E90FF" size="1.2rem" />
        </a>

        <a
          href="https://github.com/gisabernardess"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub color="#000000" size="1.2rem" />
        </a>
      </div>
    </Footer>
  </>
);
