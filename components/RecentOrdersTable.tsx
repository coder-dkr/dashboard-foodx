import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Helper function to create dummy data
function createData(
  orderId: string,
  customer: string,
  orderDate: string,
  food: string,
  amount: number,
  orderType: string,
  status: string
) {
  return { orderId, customer, orderDate, food, amount, orderType, status };
}

// Dummy data with different order statuses
const rows = [
  createData('ORD12345', 'John Doe', '2025-02-01', 'Pizza', 200.0, 'Delivery', 'Approved'),
  createData('ORD12346', 'Jane Smith', '2025-02-01', 'Burger', 150.0, 'Dine-in', 'Pending'),
  createData('ORD12347', 'Michael Brown', '2025-02-02', 'Sushi', 250.0, 'Delivery', 'Cancelled'),
  createData('ORD12348', 'Emily White', '2025-02-02', 'Pasta', 300.0, 'Dine-in', 'Approved'),
  createData('ORD12349', 'Chris Green', '2025-02-03', 'Salad', 180.0, 'Delivery', 'Pending'),
];

interface StatusType {
    text : string;
    bg : string
}
const getStatusColor = (status: string) : StatusType => {
  switch (status) {
    case 'Approved':
      return {text : 'green' , bg : '#DDEBDC'};
    case 'Pending':
        return {text : '#DAA520' , bg : '#F8F8E9'};
    case 'Cancelled':
      return {text : 'red' , bg : '#FFD4D2'};
    default:
        return {text : 'black' , bg : 'white'};
  }
};

export default function RecentOrdersTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="recent orders table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#f2f2f2', color: '#333' }}>
            <TableCell style={{ fontWeight : 'bold'}}>Order ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Order Date</TableCell>
            <TableCell align="left">Food</TableCell>
            <TableCell align="right">Amount ($)</TableCell>
            <TableCell align="left">Order Type</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.orderDate}</TableCell>
              <TableCell align="left">{row.food}</TableCell>
              <TableCell align="right">{row.amount.toFixed(2)}</TableCell>
              <TableCell align="left">{row.orderType}</TableCell>
              <TableCell align="right">
                <span
                  style={{
                    color: getStatusColor(row.status)?.text,
                    background: getStatusColor(row.status)?.bg,
                    fontWeight: 'bold',
                    padding : 3
                  }}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
