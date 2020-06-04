import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import FeaturedCard, {
  FeaturedCardType
} from "../../components/Cards/FeaturedCards";
import StoryCard from "../../components/Cards/StoryCard";
import Jumbotron from "../../components/Jumbotron";
import { GET_FEED } from "./queries";

interface StoryInterface {
  id: string;
  title: string;
  postedBy: {
    id: string;
    username: string;
  };
  createdAt: string;
  description: string;
}

const Home = () => {
  const { data: { feed = [] } = {} } = useQuery(GET_FEED);

  return (
    <HomeContainer>
      <ContentContainer>
        <Jumbotron />
        <Sidebar>
          <FeaturedCard type={FeaturedCardType.featured} />
          <FeaturedCard type={FeaturedCardType.editorsChoice} />
        </Sidebar>
      </ContentContainer>
      <CardContainer>
        {feed.map((story: StoryInterface) => (
          <StoryCard
            key={story.id}
            title={story.title}
            author={story.postedBy.username}
            createdAt={story.createdAt}
            description={story.description}
          />
        ))}
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin: 0 10% 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Sidebar = styled.aside`
  width: 35%;
  margin-left: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
`;
