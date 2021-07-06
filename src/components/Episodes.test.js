import React from "react";
import { render, waitFor, getAllByTestId } from "@testing-library/react";
import { formatSeasons } from "../utils/formatSeasons";
import mockFetchShowData from "../testing/mockFetchShowData";
import Episodes from "./Episodes";

it("renders", () => {
  render(<Episodes episodes={[]} />);
});

it("displays episode summaries", async () => {
  const { getAllByTestId } = render(
    <Episodes
      episodes={formatSeasons(mockFetchShowData._embedded.episodes)["Season 1"]}
    />
  );
  await waitFor(() => {
    const episodeNumber = getAllByTestId("episodeNumber");
    expect(episodeNumber).toHaveLength(8);
  });
});
