import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pageData = {
    links: [
      { label: "About", url: "#about" },
      { label: "Projects", url: "#projects" },
      { label: "Skills", url: "#skills" },
      { label: "Contact", url: "#contact" },
    ],
  };

  return (
    <div className="px-5 py-4 absolute flex items-center w-full z-10">
      <Link href="/">
        <Image src="/images/logo.png" width={64} height={57} alt="Home" />
      </Link>

      <div className="ml-auto space-x-10 text-white uppercase font-light text-lg">
        {pageData.links.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
