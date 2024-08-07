import React from 'react';
import styled from 'styled-components';
import { FaThLarge, FaHome, FaChartBar, FaClipboardList, FaShoppingBag, FaPowerOff  } from 'react-icons/fa';

// Styled Components
const SidebarContainer = styled.div`
  background-color: #282828;
  width: 64px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

const IconList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 40px;
`;

const IconItem = styled.li`
  color: ${(props) => (props.active ? '#3b82f6' : '#9ca3af')};
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconList>
        <IconItem style={{marginBottom:'10vh'}} active>
          <FaThLarge size={24} />
        </IconItem>
        <IconItem active>
          <FaHome size={24} />
        </IconItem>
        <IconItem>
          <FaChartBar size={24} />
        </IconItem>
        <IconItem>
          <FaClipboardList size={24} />
        </IconItem>
        <IconItem>
          <FaShoppingBag size={24} />
        </IconItem>
        <IconItem>
          <FaPowerOff style={{marginTop:'40vh'}} size={24} />
        </IconItem>
      </IconList>
    </SidebarContainer>
  );
};

export default Sidebar;