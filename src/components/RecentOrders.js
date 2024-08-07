import React from 'react';
import styled from 'styled-components';

const RecentOrdersContainer = styled.div`
  background-color: #282828; /* Dark background */
  border-radius: 8px;
  padding: 1.5rem;
  color: #fff; /* Light text color */
`;

const RecentOrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
  }

  th {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.85rem;
  }

  tbody tr {
    border-bottom: 1px solid #333;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StatusBadge = styled.span`
  padding: 0.3rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  background-color: ${({ status }) => {
    switch (status) {
      case 'Delivered':
        return '#2ecc71'; // Green
      case 'Cancelled':
        return '#e74c3c'; // Red
      case 'Pending':
        return '#f39c12'; // Orange
      default:
        return '#7f8c8d'; // Grey
    }
  }};
`;

const orders = [
  {
    customer: 'Wade Warren',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
    orderNo: '15478256',
    amount: '$124.00',
    status: 'Delivered',
  },
  {
    customer: 'Jane Cooper',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
    orderNo: '48967586',
    amount: '$365.02',
    status: 'Delivered',
  },
  {
    customer: 'Guy Hawkins',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
    orderNo: '78958215',
    amount: '$45.88',
    status: 'Cancelled',
  },
  {
    customer: 'Kristin Watson',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
    orderNo: '20965732',
    amount: '$65.00',
    status: 'Pending',
  },
  {
    customer: 'Cody Fisher',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
    orderNo: '95715620',
    amount: '$545.00',
    status: 'Delivered',
  },
  {
    customer: 'Savannah Nguyen',
    avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
    orderNo: '78514568',
    amount: '$128.20',
    status: 'Delivered',
  },
];

const RecentOrders = () => {
  return (
    <RecentOrdersContainer>
      <h3>Recent Orders</h3>
      <RecentOrdersTable>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <CustomerInfo>
                  <Avatar src={order.avatar} alt={order.customer} />
                  {order.customer}
                </CustomerInfo>
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <StatusBadge status={order.status}>{order.status}</StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </RecentOrdersTable>
    </RecentOrdersContainer>
  );
};

export default RecentOrders;