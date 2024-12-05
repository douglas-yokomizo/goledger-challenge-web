import Link from "next/link";

export default function Home() {
  return (
    <h1>
      <Link href={"/artists"}>Artists</Link>
    </h1>
  );
}
