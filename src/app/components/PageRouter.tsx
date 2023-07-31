'use client';
import { JSX, SetStateAction, useState } from 'react';
import { Skills } from './skills';
import { Projects } from './projects';
import { Work } from './work';
import { HomePage } from './homePage';
import { CurrentPageProps } from '../types/CurrentPageProps';

export const PageRouter = ({ currentPage }: CurrentPageProps) => {
  switch (currentPage) {
    case 0:
      return <HomePage />;
    case 1:
      return <Projects />;
    case 2:
      return <Work />;
    case 3:
      return <Skills />;
  }
};
