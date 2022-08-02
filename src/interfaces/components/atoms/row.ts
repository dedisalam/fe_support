type RowColWidth = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
export type Row = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  xs?: RowColWidth;
  sm?: RowColWidth;
  md?: RowColWidth;
  lg?: RowColWidth;
  xl?: RowColWidth;
  xxl?: RowColWidth;
};
