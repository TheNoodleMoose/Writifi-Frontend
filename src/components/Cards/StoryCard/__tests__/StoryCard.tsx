import React from "react";
import { renderWithContext } from "../../../../testUtils";

import StoryCard from "..";

it("renders correctly", () => {
  renderWithContext(<StoryCard />).snapshot();
});
