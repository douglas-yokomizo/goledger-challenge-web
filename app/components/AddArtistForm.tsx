import { useState } from "react";

const AddArtistForm = () => {
  const [name, setName] = useState("");

  return (
    <form className="mt-4">
      <input
        type="text"
        placeholder="Artist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default AddArtistForm;
