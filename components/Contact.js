import Image from "next/image";

export default function Contact() {
  const title = "{TALK TO ME}";

  return (
    <section className="relative grid place-items-center h-[47vw]">
      <Image
        className="absolute w-full left-0 right-0 top-0 bottom-0"
        src="/images/contact-bg@2x.png"
        width={1601}
        height={756}
        alt=""
        aria-roledescription="presentation"
      />

      <div className="container relative text-center space-y-8">
        <h2>{title}</h2>

        <a
          href=""
          className="py-2 px-5 border-white border-2 rounded-lg text-lg uppercase mt-12 inline-block"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
