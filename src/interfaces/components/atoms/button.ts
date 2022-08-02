type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
type ButtonVariant = Variant | 'link' | 'outline-danger' | 'outline-dark' | 'outline-info' | 'outline-light' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning';

export type Button = {
  children: React.ReactNode | React.ReactNode[];
  variant?: ButtonVariant;
  size?: 'lg' | 'sm';
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
