import Link from "next/link";

export default function IndividualGame() {
  return (
    <>
      <h1 className="m-2">Game</h1>
      <Link href="/game" className="btn btn-danger m-2">
        Leave game
      </Link>
    </>
  );
}
