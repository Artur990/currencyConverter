import axios from "axios";

const api = "4387f6df36-23838ab8ba-rmow3i";

export const apiClient = axios.create({
  baseURL: "https://api.fastforex.io/",
  params: {
    api_key: api,
  },
});
