import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 relative border-b border-offwhite min-h-screen">
      <Image
        className="absolute top-0 -right-4"
        src="/images/shape-right-cropped@2x.png"
        width={280}
        height={700}
        alt=""
      />
      <Image
        className="absolute bottom-0 left-0"
        src="/images/shape-left-cropped@2x.png"
        width={280}
        height={700}
        alt=""
      />
      <div className="container space-y-96 xl:max-w-screen-xl">
        <div className="max-w-prose">
          <h2 className="font-light mb-8 relative before:absolute before:w-full before:h-[1px] before:bg-offwhite before:-left-5 before:bottom-1/2 before:-translate-x-full">
            About Me
          </h2>

          <p>
            I'm a web developer looking for a role in an exciting company. I
            focus on creating accessible, responsive websites using modern HTML,
            CSS, Javascript and PHP practices. I often use React or Vue when
            writing Javascript, but can adapt to whatever tools are required.
          </p>
        </div>

        <div className="max-w-prose ml-auto">
          <h2 className="font-light inline-block mb-8 relative before:absolute before:w-full before:h-[1px] before:bg-offwhite before:-right-[105%] before:bottom-1/2">
            LOREM IPSUM
          </h2>

          <p>
            I'm a web developer looking for a role in an exciting company. I
            focus on creating accessible, responsive websites using modern HTML,
            CSS, Javascript and PHP practices. I often use React or Vue when
            writing Javascript, but can adapt to whatever tools are required.
          </p>
        </div>
      </div>
    </section>
  );
}
