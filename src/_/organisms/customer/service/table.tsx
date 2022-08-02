import React from 'react';
import { ButtonGroup, Table as TableBootstrap } from 'react-bootstrap';
import ButtonDelete from '_/atoms/buttonDelete';
import ButtonEdit from '_/atoms/buttonEdit';
import { isEmptyArray } from '_/utils';

type TableProps = {
  data: {
    id: number;
    name: string;
    cir: string;
    desc: string;
  }[];
  onClickDelete: (id: number) => void;
  onClickEdit: (id: number) => string;
  isMutate: boolean;
};

function Table(props: TableProps) {
  const {
    data, onClickEdit, onClickDelete, isMutate,
  } = props;

  if (isEmptyArray(data)) {
    return <div>No data</div>;
  }

  return (
    <TableBootstrap striped responsive hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>CIR</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.cir}</td>
            <td>{item.desc}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <ButtonEdit disabled={isMutate} onClick={onClickEdit(item.id)} />
                <ButtonDelete disabled={isMutate} onClick={() => { onClickDelete(item.id); }} />
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </TableBootstrap>
  );
}

export default Table;
