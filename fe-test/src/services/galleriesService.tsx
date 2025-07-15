import apiClient from "./apiClient";
import type { Gallery } from "@mytypes/gallery";

const fetchGalleries = () => {
  return apiClient.get<Gallery[]>("/galleries");
};

export default { fetchGalleries };
