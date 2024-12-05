import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://ec2-54-91-215-149.compute-1.amazonaws.com",
  headers: {
    Accept: "*/*",
    // Authorization: `Basic cHNBZG1pbjpnb2xlZGdlcg==`,
  },
  auth: {
    username: "psAdmin",
    password: "goledger",
  },
});

export const fetchAssets = async (assetType: string) => {
  const apiUrl = `/${assetType}`;
  console.log(`Fetching assets from: ${apiUrl}`);

  try {
    const response = await apiClient.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(`Error fetching assets: ${error}`);
    throw error;
  }
};
