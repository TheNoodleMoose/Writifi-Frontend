import React from "react";
import { renderWithContext } from "../../../../testUtils";

import FeaturedCard, { FeaturedCardType } from "..";

it("renders correctly | Featured", () => {
  renderWithContext(
    <FeaturedCard type={FeaturedCardType.featured} />
  ).snapshot();
});

it("renders correctly | Editors Choice", () => {
  renderWithContext(
    <FeaturedCard type={FeaturedCardType.editorsChoice} />
  ).snapshot();
});
