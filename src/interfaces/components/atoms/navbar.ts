type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
export type Navbar = {
  children: React.ReactNode | React.ReactNode[];
  bg?: Variant;
  sticky?: 'top';
  variant?: 'dark' | 'light';
  expand?: 'lg' | 'md' | 'sm' | 'xl';
};

export type NavbarBrand = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
};

export type NavbarCollapse = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  className?: string;
};

export type NavbarToggle = {
  'aria-controls': string;
};
