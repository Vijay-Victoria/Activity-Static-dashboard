import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Cards from './Cards';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import styled from 'styled-components';
import NetProfit from './netProfit';
import ExtraDetails from './extraDetails';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #181818;
  padding: 2rem;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem; /* Gap between grid items */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:not(:last-child) {
    margin-bottom: 2rem; /* Space between different ContentWrapper sections */
  }
`;

const LeftSide = styled.div`
  flex: 6; /* 60% of the width */
`;

const RightSide = styled.div`
  flex: 4; /* 40% of the width */
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <ContentWrapper>
          <Cards />
          <NetProfit />
        </ContentWrapper>
        <ContentWrapper>
          <ActivityChart />
          <ExtraDetails />
        </ContentWrapper>
        <ContentWrapper>
          <RecentOrders />
          <CustomerFeedback />
        </ContentWrapper>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;