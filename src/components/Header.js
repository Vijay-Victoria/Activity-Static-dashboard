import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaBell, FaSearch, FaEnvelope, FaCog } from 'react-icons/fa';

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  padding: 26px 24px;
  margin-left:0;
  margin-bottom:26px;
  marging-top:0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2d2d2d;
  padding: 8px 16px;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: #ffffff;
  margin-left: 8px;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: #9ca3af;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #ffffff;
  }
`;

const UserAvatar = styled.div`
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <FaSearch />
        <SearchInput type="text" placeholder="Search" />
      </SearchContainer>
      <IconContainer>
        <IconWrapper>
          <FaEnvelope size={20} />
        </IconWrapper>
        <IconWrapper>
          <FaCog size={20} />
        </IconWrapper>
        <IconWrapper>
          <FaBell size={20} />
        </IconWrapper>
        <UserAvatar>
          <AvatarImage src="path_to_avatar_image.jpg" alt="User Avatar" />
        </UserAvatar>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;