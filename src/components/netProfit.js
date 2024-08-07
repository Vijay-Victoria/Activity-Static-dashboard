import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
`;

const ProfitInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const CardValue = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
`;

const CardPercentage = styled.span`
  font-size: 14px;
  color: ${({ isPositive }) => (isPositive ? '#4CAF50' : '#FF5722')};
  margin-top: 0.5rem;
`;

const ProgressCircleContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const ProgressCircleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #373737;
`;

const ProgressCircleFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4285F4;
  clip-path: ${({ progress }) => progress >= 50 
    ? 'polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    : 'polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0 100%)'};
  transform: ${({ progress }) => `rotate(${(progress / 100) * 360}deg)`};
  transform-origin: 50% 50%;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
`;

const NetProfit = () => {
  const netProfit = 6759.25; // Replace with actual profit value
  const progress = 70; // Replace with actual progress value
  const isPositive = true; // Replace with actual condition for positive/negative

  return (
    <CardContainer>
      <ProfitInfo>
        <CardTitle>Net Profit</CardTitle>
        <CardValue>${netProfit.toFixed(2)}</CardValue>
        <CardPercentage isPositive={isPositive}>
          {isPositive ? '▲' : '▼'} 3%
        </CardPercentage>
      </ProfitInfo>
      <ProgressCircleContainer>
        <ProgressCircleBackground />
        <ProgressCircleFill progress={progress} />
        <ProgressText>{progress}%</ProgressText>
      </ProgressCircleContainer>
    </CardContainer>
  );
};

export default NetProfit;