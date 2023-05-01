import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-4 py-4">
      <Link href="/">
        <Image src="/images/logo.png" width={64} height={57} alt="Home" />
      </Link>
    </div>
  );
}
