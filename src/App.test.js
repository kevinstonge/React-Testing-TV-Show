import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
test("renders", () => {
  const { getByTestId } = render(<App />);
  const loadingMessage = getByTestId("loadingMessage");
  expect(loadingMessage).toHaveTextContent("Fetching data...");
});
