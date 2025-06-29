import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/" className="text-white text-4xl font-bold font-serif">
        René Plattner
      </Link>
      <p className="text-sky-100 flex justify-start">computer science</p>
    </div>
  );
}
export default Logo;
