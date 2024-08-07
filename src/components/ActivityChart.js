import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import styled from 'styled-components';

const ActivityChartContainer = styled.div`
  background-color: #282828;
  border-radius: 8px;
  padding: 1.5rem;
  color: #fff;
  width: 100%;
  max-width: 100%; /* Ensure it does not overflow */
  box-sizing: border-box; /* Include padding in width calculation */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ActivityChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    h3 {
      font-size: 1.25rem;
    }
  }
`;

const Dropdown = styled.select`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.25rem;
    font-size: 0.875rem;
  }
`;

const ActivityChart = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [4000, 8000, 6000, 7000, 9000, 10000, 15000, 12000, 10000, 11000, 9000],
        backgroundColor: '#7289da',
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#444',
          lineWidth: 1,
        },
        ticks: {
          color: '#fff',
          stepSize: 5000,
          callback: function(value) {
            return value >= 1000 ? `${value / 1000}k` : value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <ActivityChartContainer>
      <ActivityChartHeader>
        <h3>Activity</h3>
        <Dropdown>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Dropdown>
      </ActivityChartHeader>
      <div style={{ position: 'relative', height: '300px', width: '100%' }}>
        <Bar data={data} options={chartOptions} />
      </div>
    </ActivityChartContainer>
  );
};

export default ActivityChart;