type NumberAttr = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
export type Col = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  xs?: NumberAttr;
  sm?: NumberAttr;
  md?: NumberAttr;
  lg?: NumberAttr;
  xl?: NumberAttr;
  xxl?: NumberAttr;
};
