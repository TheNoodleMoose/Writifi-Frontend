import React from "react";
import styled from "styled-components";
import FeaturedCard, {
  FeaturedCardType
} from "../../components/Cards/FeaturedCards";
import Jumbotron from "../../components/Jumbotron";

const Home = () => {
  return (
    <HomeContainer>
      <Jumbotron />
      <Sidebar>
        <FeaturedCard type={FeaturedCardType.featured} />
        <FeaturedCard type={FeaturedCardType.editorsChoice} />
      </Sidebar>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Sidebar = styled.aside`
  width: 35%;
  @media (max-width: 768px) {
    display: none;
  }
`;
