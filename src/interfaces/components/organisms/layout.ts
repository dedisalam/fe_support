import type { Col, Row } from 'interfaces/components/atoms';

export type Row2Col1 = {
  children: [React.ReactNode, React.ReactNode] ;
  style?: {
    row1?: Omit<Row, 'children'>;
    row2?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
    col2?: Omit<Col, 'children'>;
  };
};

export type Row2Col2 = {
  children: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
  style?: {
    row1?: Omit<Row, 'children'>;
    row2?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
    col2?: Omit<Col, 'children'>;
    col3?: Omit<Col, 'children'>;
    col4?: Omit<Col, 'children'>;
  };
};

export type Row2Col3 = {
  children: [
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
  ];
  style?: {
    row1?: Omit<Row, 'children'>;
    row2?: Omit<Row, 'children'>;
    col1?: Omit<Col, 'children'>;
    col2?: Omit<Col, 'children'>;
    col3?: Omit<Col, 'children'>;
    col4?: Omit<Col, 'children'>;
    col5?: Omit<Col, 'children'>;
    col6?: Omit<Col, 'children'>;
  };
};

export type LayoutForm = {
  children: React.ReactNode | React.ReactNode[];
};
