"use client";
import { useEffect, useState } from "react";
import { fetchAssets } from "../services/api";

const ArtistsPage = () => {
  const [artists, setArtists] = useState<{ description: string }[]>([]);

  useEffect(() => {
    const getArtists = async () => {
      const data = await fetchAssets("api/query/getSchema");
      setArtists(data);
    };
    getArtists();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Artists</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Artist
      </button>
      <ul className="mt-4">
        {artists.map((artist) => (
          <li key={artist.description} className="border-b py-2">
            {artist.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistsPage;
