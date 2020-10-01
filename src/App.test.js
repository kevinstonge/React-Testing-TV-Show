import React from "react";
import {
  render,
  act,
  fireEvent,
  getByTestId,
  wait,
} from "@testing-library/react";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
import mockFetchShowData from "./testing/mockFetchShowData";
import App from "./App";

jest.mock("./api/fetchShow");
mockFetchShow.mockResolvedValue(mockFetchShowData);

it("displays loading message on initial load", async () => {
  const { getByTestId } = render(<App />);
  const loadingMessage = getByTestId("loadingMessage");
  expect(loadingMessage).toHaveTextContent("Fetching data...");
});

it("displays show name after fetching show", async () => {
  const { getByTestId } = render(<App />);
  await wait();
  const showName = getByTestId("showName");
  expect(showName).toHaveTextContent("Stranger Things");
});
