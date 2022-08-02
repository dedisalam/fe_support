export type ListGroup = {
  variant?: 'flush';
  activeKey?: string;
  children: React.ReactNode | React.ReactNode[];
};

export type ListGroupItem = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  itemkey: string;
};
