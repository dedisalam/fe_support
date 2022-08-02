type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
export type Card = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  bg?: Variant;
};

export type CardBody = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export type CardTitle = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  as?: React.ElementType;
};
