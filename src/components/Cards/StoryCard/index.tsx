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
      <ContentContainer>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        <DetailsContainer>
          <AuthorText>{`${author}`}</AuthorText>
          <DateText>{`@ ${createdAt}`}</DateText>
        </DetailsContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default StoryCard;

const CardContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 4px;
  width: 100%;
  min-height: 150px;
  min-width: 275px;
  max-width: 68.5%;
  -webkit-box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  -moz-box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);

  @media (max-width: 768px) {
    padding: 15px 0;
    margin: 20px 0;
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  min-height: 150px;
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
