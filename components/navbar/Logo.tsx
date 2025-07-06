import Link from "next/link";

function Logo() {
  return (
    <div className="">
      <Link href="/" className="text-white text-4xl font-bold font-serif">
        René Plattner
      </Link>
      <p className="text-sky-100 flex justify-start md:justify-center lg:justify-start">
        computer science
      </p>
    </div>
  );
}
export default Logo;
