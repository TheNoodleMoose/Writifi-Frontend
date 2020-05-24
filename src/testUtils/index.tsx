import React, { ReactElement, ReactNode } from "react";

import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

export const renderWithContext = (component: ReactElement) => {
  const history = createMemoryHistory();
  const wrapper = ({ children }: { children?: ReactNode }) => (
    <Router history={history}>{children}</Router>
  );

  const renderResults = render(component, { wrapper });
  return {
    ...renderResults,
    snapshot: () => {
      expect(renderResults.container).toMatchSnapshot();
    }
  };
};
