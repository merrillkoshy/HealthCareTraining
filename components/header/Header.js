import Link from "next/link";
import MastHead from "./MastHead";
import NavBar from "./NavBar";

export default function Nav() {
  return (
    <div className="h-64 grid grid-row-2">
      <MastHead />
      <NavBar />
    </div>
  );
}
