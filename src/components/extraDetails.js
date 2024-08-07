import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #282828; /* Dark background color */
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333; /* Slightly lighter background on hover */
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 16px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  flex-shrink: 0;
`;

const ExtraDetails = () => {
  const items = [
    {
      icon: <svg><circle cx="10" cy="10" r="10" fill="#fff" /></svg>,
      text: 'Goals',
      color: '#8A523A',
    },
    {
      icon: <svg><rect x="4" y="4" width="12" height="12" rx="2" ry="2" fill="#fff" /></svg>,
      text: 'Popular Dishes',
      color: '#4B72A4',
    },
    {
      icon: <svg><path d="M16 10v6h-8v-6h8zm-8 0h-6v4h6v-4z" fill="#fff" /></svg>,
      text: 'Menus',
      color: '#2E8571',
    },
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <Item key={index}>
          <Icon color={item.color}>{item.icon}</Icon>
          <Text>{item.text}</Text>
          <Arrow>&gt;</Arrow>
        </Item>
      ))}
    </Container>
  );
};

export default ExtraDetails;