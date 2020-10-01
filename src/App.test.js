import React from "react";
import { render, getByTestId, waitFor } from "@testing-library/react";
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
  await waitFor(() => {
    const showName = getByTestId("showName");
    expect(showName).toHaveTextContent("Stranger Things");
  });
});

it("displays show summary", async () => {
  const { getByTestId } = render(<App />);
  await waitFor(() => {
    const showSummary = getByTestId("showSummary");
    expect(showSummary).toBeInTheDocument();
    expect(showSummary).toHaveTextContent(
      "A love letter to the '80s classics that captivated a generation"
    );
  });
});
