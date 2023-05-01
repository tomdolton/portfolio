import { motion, useSpring } from "framer-motion";

export default function Skills() {
  const skillsData = [
    {
      name: "(S)CSS",
      color: "#22d3ee",
      score: 100,
      class: "from-[#00B3CC] to-[#D6FF7F]",
    },
    {
      name: "JS",
      color: "#f43f5e",
      score: 70,
      class: "from-cyan-500 to-blue-500",
    },
    {
      name: "PHP",
      score: 50,
      color: "#14b8a6",
      class: "from-cyan-500 to-blue-500",
    },

    {
      name: "Vue.js",
      score: 85,
      color: "#42b883",
      class: "from-emerald-700 to-green-600",
    },
    {
      name: "React",
      score: 75,
      color: "#0a7ea4",
      class: "from-teal-600 to-cyan-700",
    },
    {
      name: "Next.js",
      score: 70,
      color: "#0070f3",
      class: "from-neutral-400 to-stone-500",
    },
    {
      name: "Laravel",
      score: 70,
      color: "#f7352d",
      class: "from-orange-700 to-red-800",
    },
    {
      name: "Strapi",
      score: 70,
      color: "#4945ff",
      class: "from-violet-600 to-purple-800",
    },
    {
      name: "Wordpress",
      score: 90,
      color: "#0675c4",
      class: "from-indigo-800 to-blue-500",
    },
    {
      name: "AWS",
      score: 35,
      color: "#ff9900",
      class: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <section className="container my-36 pt-48 mt-48 max-w-screen-lg mx-auto">
      <h2 className="with-line mb-6">Skills</h2>

      <div className="space-y-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center">
            <h3 className="w-48 shrink-0">{skill.name}</h3>

            <div className="w-full bg-elephant rounded-full">
              <motion.div
                // style={{ background: `${skill.color}` }}
                className={`bg-white rounded-full h-4 opacity-70 bg-gradient-to-r ${skill.class}`}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  duration: 2,
                  delay: 0.5,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.score}%` }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
