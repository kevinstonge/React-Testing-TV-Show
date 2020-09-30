import React from "react";
import { render } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";
mockFetchShow();
jest.mock("fetchShow", () => () => "abcde");

test("renders", () => {
  const { getByTestId } = render(<App />);
  const loadingMessage = getByTestId("loadingMessage");
  expect(loadingMessage).toHaveTextContent("Fetching data...");
});
