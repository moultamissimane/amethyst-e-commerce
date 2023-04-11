import { ReactNode } from 'react';
import { Card, Table } from 'react-bootstrap';

type Props = {
  children: ReactNode;
  cols: any;
};

const TableContainer = ({ children, cols }: Props) => {
  return (
    // <Card className='shadow border-0 mt-5 '>
      <Table responsive hover
      style={{borderRadius: '20px'}}
      className=' border-2 rounded-xl mt-14'>
        <thead
          style={{ backgroundColor: '#863CCC', color: '#fff', borderRadius: '20px' }}
          className=' text-white'
        >
          <tr>
            {cols.map((col: any) => (
              <th key={col} scope='col'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    // </Card>
  );
};

export default TableContainer;
