import React from 'react';
import styled from 'styled-components';

const CustomerFeedbackContainer = styled.div`
  background-color: #282828; /* Dark background */
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #333; /* Subtle border */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const FeedbackTitle = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const FeedbackItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap; /* Allows the content to wrap on smaller screens */
`;

const Avatar = styled.img`
  width: 10%;
  max-width: 40px;
  height: auto;
  border-radius: 50%;
  margin-right: 0.5rem;
  flex-shrink: 0; /* Prevents avatar from shrinking on small screens */
`;

const UserName = styled.div`
  color: #fff;
  font-weight: bold;
  flex-grow: 1; /* Allows the name to take up remaining space */
  font-size: 1rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap; /* Allows the rating to wrap on smaller screens */
`;

const Star = styled.span`
  color: #ffd700;
  font-size: 1rem;
  margin-right: 0.1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const FeedbackText = styled.p`
  color: #ccc; /* Lighter gray text */
  line-height: 1.5; /* Consistent line spacing */
  margin: 0;
  font-size: 0.9rem; /* Slightly smaller font size for better readability */
`;

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URL
      rating: 4,
      feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
    },
    {
      name: "Dianne Russell",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URL
      rating: 5,
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
    },
    {
      name: "Devon Lane",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URL
      rating: 4,
      feedback: "Normally wings are wings, but theirs are lean meaty and tender, and the breading perfectly crunchy."
    }
  ];

  return (
    <CustomerFeedbackContainer>
      <FeedbackTitle>Customer's Feedback</FeedbackTitle>
      {feedbacks.map((item, index) => (
        <FeedbackItem key={index}>
          <UserInfo>
            <Avatar src={item.avatar} alt={`${item.name}'s avatar`} />
            <UserName>{item.name}</UserName>
          </UserInfo>
          <Rating>
            {[...Array(5)].map((star, i) => (
              <Star key={i}>&#9733;</Star> // Unicode star character
            )).fill(<Star>&#9733;</Star>, 0, item.rating)}
          </Rating>
          <FeedbackText>{item.feedback}</FeedbackText>
        </FeedbackItem>
      ))}
    </CustomerFeedbackContainer>
  );
};

export default CustomerFeedback;