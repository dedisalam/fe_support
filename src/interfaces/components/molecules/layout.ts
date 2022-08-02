import type { Col, Row } from 'interfaces/components/atoms';

export type Row1Col1 = {
  children: React.ReactNode | React.ReactNode[];
  style?: {
    row1?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
  };
};

export type Row1Col2 = {
  children: [React.ReactNode, React.ReactNode];
  style?: {
    row1?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
    col2?: Omit<Col, 'children'>;
  };
};

export type Row1Col3 = {
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
  style?: {
    row1?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
    col2?: Omit<Col, 'children'>;
    col3?: Omit<Col, 'children'>;
  };
};

export type Row1Col5 = {
  children: React.ReactNode | React.ReactNode[];
  style?: {
    row1?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
    col2?: Omit<Col, 'children'>;
    col3?: Omit<Col, 'children'>;
    col4?: Omit<Col, 'children'>;
    col5?: Omit<Col, 'children'>;
  };
};
