import React from 'react';
import { ButtonGroup, Table as T } from 'react-bootstrap';
import ButtonDelete from './buttonDelete';
import ButtonEdit from './buttonEdit';

interface TableProps {
  data: any[];
  onDelete?: (id: number) => Promise<void>;
}
function Table(props: TableProps) {
  const { data, onDelete } = props;
  if (data.length === 0) {
    return <div>No data</div>;
  }
  const columns = Object.keys(data[0]).map((key, index) => ({
    id: index,
    value: key,
  }));
  const rows = data;
  return (
    <T striped responsive hover>
      <thead>
        <tr>
          {columns.map((key) => {
            if (key.value === 'id') {
              return <th key={key.id}>No</th>;
            }
            if (key.value === 'links') {
              return <th key={key.id}>Action</th>;
            }
            return (
              <th key={key.id}>
                {key.value.charAt(0).toUpperCase() + key.value.slice(1)}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id}>
            {columns.map((column) => {
              if (column.value === 'id') {
                return <td key={`${row.id}${column.id}`}>{index + 1}</td>;
              }
              if (column.value === 'links') {
                return (
                  <td key={`${row.id}${column.id}`}>
                    <ButtonGroup aria-label="Basic example">
                      <ButtonEdit links={row[column.value]} />
                      <ButtonDelete onDelete={onDelete} id={row.id} />
                    </ButtonGroup>
                  </td>
                );
              }
              return <td key={`${row.id}${column.id}`}>{row[column.value]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </T>
  );
}

Table.defaultProps = {
  onDelete: () => {},
};

export default Table;
