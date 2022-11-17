import { HTMLAttributes } from 'react';

type PageInformation = {
  title: string;
  subtitle: string;
  highlights?: {
    words: string[];
    className?: 'heading--highlight';
  };
  props?: HTMLAttributes<HTMLDivElement>;
};

export default PageInformation;
