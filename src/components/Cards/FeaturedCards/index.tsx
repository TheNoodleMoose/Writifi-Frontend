import React from "react";
import styled from "styled-components";

export enum FeaturedCardType {
  featured = "Featured",
  editorsChoice = "EditorsChoice"
}

const FeaturedCard = ({ type }: { type: FeaturedCardType }) => {
  const getType = () => {
    switch (type) {
      case FeaturedCardType.featured:
        return "Featured Reading";
      case FeaturedCardType.editorsChoice:
        return "Editor's Choice";
    }
  };

  return (
    <CardContainer>
      <TitleContainer type={type}>
        <h2>{getType()}</h2>
      </TitleContainer>
      <ContentContainer>
        <TitleText type={type}>
          Lorem ipsum dolor sit Molestias? Lorem ipsum dolor sit Molestias?
        </TitleText>
        <TitleText type={type}>Lorem ipsum dolor sit Molestias?</TitleText>
        <TitleText type={type}>
          Lorem ipsum dolor sit Molestias? Lorem ipsum dolor sit Molestias?Lorem
          ipsum dolor sit Molestias?
        </TitleText>
        <TitleText type={type}>Lorem ipsum dolor sit Molestias?</TitleText>
      </ContentContainer>
    </CardContainer>
  );
};

export default FeaturedCard;

interface StyleProps {
  type: FeaturedCardType;
}

const CardContainer = styled.div`
  width: 300px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
  padding-bottom: 10px;
  -webkit-box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  -moz-box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);

  :last-child {
    margin-bottom: 0;
  }
`;

const TitleContainer = styled.div<StyleProps>`
  color: ${({ type }) =>
    type === FeaturedCardType.featured ? "#2c3e50" : "white"};
  padding: 20px;
  background-color: ${({ type }) =>
    type === FeaturedCardType.featured ? " aquamarine" : "#2c3e50"};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
`;

const TitleText = styled.p<StyleProps>`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  color: #2c350;
`;
