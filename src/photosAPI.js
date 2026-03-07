import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "Dpn2JcRODl1Oc3yVJ20xFYCJ7BNfAfqbYeBPMBo2ZB4";

export const fetchPhotos = async (value, currentPage) => {
  const response = await axios.get("search/photos", {
    params: {
      client_id: API_KEY,
      query: value,
      page: currentPage,
      per_page: 5,
    },
  });
  return response.data.results;
};
