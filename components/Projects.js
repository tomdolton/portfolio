import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "MindsMe",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor. Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
      tech: ["Laravel", "Vue", "SCSS", "Vuetify", "AWS"],
      url: "https://mindsme.co.uk",
      image: {
        url: "/images/mindsme.png",
        alt: "The MindsMe user interface",
        width: 604,
        height: 365,
      },
    },
    {
      title: "Orbital Media",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor. Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
      tech: ["Laravel", "Vue", "SCSS", "Vuetify", "AWS"],
      url: "https://mindsme.com",
      image: {
        url: "/images/mindsme.png",
        alt: "The MindsMe user interface",
        width: 604,
        height: 365,
      },
    },
    {
      title: "Scoop",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor. Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
      tech: ["Laravel", "Vue", "SCSS", "Vuetify", "AWS"],
      url: "https://mindsme.com",
      image: {
        url: "/images/mindsme.png",
        alt: "The MindsMe user interface",
        width: 604,
        height: 365,
      },
    },
    {
      title: "Innovation Labs",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor. Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
      tech: ["Laravel", "Vue", "SCSS", "Vuetify", "AWS"],
      url: "https://mindsme.com",
      image: {
        url: "/images/mindsme.png",
        alt: "The MindsMe user interface",
        width: 604,
        height: 365,
      },
    },
  ];

  return (
    <section className="py-28 container xl:max-w-screen-xl">
      <h2 className="with-line mb-14">Projects</h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-grey rounded-lg overflow-hidden relative"
          >
            <Image
              className="w-full"
              src={project.image.url}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
            />
            <div className="p-6 space-y-6 flex flex-col items-start">
              <h3 className="font-semibold text-4xl">{project.title}</h3>
              <p>{project.text}</p>

              <ul className="inline-flex bg-black px-5 py-3 space-x-7 rounded-lg">
                {project.tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <a
                className="mt-20 text-xl uppercase tracking-widest block after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0"
                href={project.url}
                target="_blank"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
