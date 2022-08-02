export type Nav = {
  children: React.ReactNode | React.ReactNode[];
};

type AlignDirection = 'end' | 'start';
type ResponsiveAlignProp = {
  lg: AlignDirection;
} | {
  md: AlignDirection;
} | {
  sm: AlignDirection;
} | {
  xl: AlignDirection;
} | {
  xxl: AlignDirection;
};
type AlignType = AlignDirection | ResponsiveAlignProp;
export type NavDropdown = {
  align?: AlignType;
  className?: string;
  id?: string;
  title?: string;
  children: React.ReactNode | React.ReactNode[];
};

export type NavDropdownItem = {
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};
