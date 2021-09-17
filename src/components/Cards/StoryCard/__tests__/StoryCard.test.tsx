import React from "react";
import { renderWithContext } from "../../../../testUtils";

import StoryCard from "..";

const props = {
  createdAt: "Some time...",
  author: "Christian Huffman",
  title: "A cool story title",
  description: "This is a placeholder description for the test..."
};

it("renders correctly", () => {
  renderWithContext(<StoryCard {...props} />).snapshot();
});
