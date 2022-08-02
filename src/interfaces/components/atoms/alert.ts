type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
export type Alert = {
  children: React.ReactNode | React.ReactNode[];
  variant?: Variant;
};

export type AlertHeading = {
  children: React.ReactNode | React.ReactNode[];
};
