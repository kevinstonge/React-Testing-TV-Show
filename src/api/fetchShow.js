import axios from "axios";
const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((r) => r.data);
};
export default fetchShow;
