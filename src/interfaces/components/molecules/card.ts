import type { Icon } from 'react-bootstrap-icons';

export type Card = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
};

export type CardButton = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  button: {
    type: 'add' | 'edit';
    links: string;
  };
};

export type CardLogin = {
  children: React.ReactNode | React.ReactNode[];
};

export type CardMenu = {
  title: string;
  links: string;
  icon: Icon;
};
