import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Card = styled.div`
  flex: 1;
  background-color: #1c1c1e; /* Darker background */
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  color: #fff; /* Light text color */
`;

const CardIcon = styled.div`
  font-size: 24px; /* Larger icon size */
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 14px; /* Smaller font size for titles */
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const CardValue = styled.div`
  font-size: 24px; /* Larger font size for values */
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const CardPercentageContainer = styled.div`
  font-size: 12px;
  color: ${({ isPositive }) => (isPositive ? '#4CAF50' : '#FF5722')}; /* Conditional color */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PercentageIcon = styled.span`
  margin-left: 4px;
  transform: ${({ isPositive }) => (isPositive ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

const Cards = () => {
  const cardData = [
    {
      title: 'Total Orders',
      value: 75,
      percentage: 3,
      isPositive: true,
      icon: '🛒',
    },
    {
      title: 'Total Delivered',
      value: 70,
      percentage: 3,
      isPositive: false,
      icon: '📦',
    },
    {
      title: 'Total Cancelled',
      value: 5,
      percentage: 3,
      isPositive: true,
      icon: '❌',
    },
    {
      title: 'Total Revenue',
      value: '$12k',
      percentage: 3,
      isPositive: false,
      icon: '💵',
    },
  ];

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index}>
          <CardIcon>{card.icon}</CardIcon> {/* Display the icon */}
          <CardTitle>{card.title}</CardTitle>
          <CardValue>{card.value}</CardValue>
          <CardPercentageContainer isPositive={card.isPositive}>
            {card.isPositive ? '▲' : '▼'}{card.percentage}%
          </CardPercentageContainer>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Cards;