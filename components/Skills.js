import { motion, useSpring } from "framer-motion";

export default function Skills() {
  const skillsData = [
    {
      name: "(S)CSS",
      color: "#22d3ee",
      score: 100,
    },
    {
      name: "JS",
      color: "#f43f5e",
      score: 70,
    },
    {
      name: "PHP",
      score: 50,
      color: "#14b8a6",
    },

    {
      name: "Vue.js",
      score: 85,
      color: "#42b883",
    },
    {
      name: "React",
      score: 75,
      color: "#0a7ea4",
    },
    {
      name: "Next.js",
      score: 70,
      color: "#0070f3",
    },
    {
      name: "Laravel",
      score: 70,
      color: "#f7352d",
    },
    {
      name: "Strapi",
      score: 70,
      color: "#4945ff",
    },
    {
      name: "Wordpress",
      score: 90,
      color: "#0675c4",
    },
    {
      name: "Shopify",
      score: 65,
      color: "#5ce546",
    },
    {
      name: "AWS",
      score: 35,
      color: "#ff9900",
    },
  ];

  return (
    <section className="my-36 pt-48 mt-48 max-w-screen-lg mx-auto">
      <h2 className="text-2xl mb-6">Skills</h2>

      <div className="space-y-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center">
            <h3 className="w-20">{skill.name}</h3>

            <motion.div
              style={{ background: `${skill.color}` }}
              className="bg-white rounded-full h-4 ml-4"
              transition={{
                type: "spring",
                stiffness: 30,
                duration: 2,
                delay: 0.5,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.score}%` }}
              // viewport={{ once: true }}
            ></motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
