import React from "react";
import styled from "styled-components";

interface StoryCardProps {
  title: String;
  author: String;
  description: String;
  createdAt: String;
}

const StoryCard = ({
  title,
  author,
  description,
  createdAt
}: StoryCardProps) => {
  return (
    <CardContainer>
      <TitleText>{title}</TitleText>
      <DescriptionText>{description}</DescriptionText>
      <DetailsContainer>
        <AuthorText>{`${author}`}</AuthorText>
        <DateText>{`@ ${createdAt}`}</DateText>
      </DetailsContainer>
    </CardContainer>
  );
};

export default StoryCard;

const CardContainer = styled.div`
  background-color: white;
  margin: 20px 0 20px 20px;
  padding: 20px;
  border-radius: 4px;
  width: 45%;
  min-height: 150px;
  min-width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px 0;
  }
`;

const TitleText = styled.h3`
  font-size: 1.3em;
`;

const DescriptionText = styled.p`
  font-size: 1em;
`;

const DetailsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AuthorText = styled.h3`
  margin-right: 5px;
  font-weight: 700;
`;

const DateText = styled.p`
  color: lightgray;
`;
