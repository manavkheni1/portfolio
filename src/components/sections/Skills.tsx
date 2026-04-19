"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "Java", "C", "C++", "C#", "SQL", "Bash/Shell", "R"],
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenAI API", "Ollama", "LLMs", "Prompt Engineering", "MediaPipe", "OpenCV", "NLP", "OCR", "Speech-to-Text", "LSTM"],
  },
  {
    category: "Backend & Frameworks",
    items: ["Node.js", "Django", "Flask", "FastAPI", "Spring", "Express.js", "REST APIs", "PyQt5"],
  },
  {
    category: "Data",
    items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "CosmosDB", "DynamoDB", "Redis", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (S3, EC2, Lambda, RDS, IAM)", "Azure", "Docker", "Kubernetes", "Terraform", "Kafka"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Linux", "Selenium", "Tesseract OCR", "Jupyter", "VS Code", "Unity", "Unreal Engine"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-2">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Technical Arsenal</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skills.map((skillGroup, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-6">
              <h3 className="text-[13px] font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-4 py-2 text-[12px] font-mono text-muted bg-[#0d0800] border border-white/10 rounded-full hover:border-accent-primary hover:text-white hover:shadow-[0_0_12px_rgba(255,140,0,0.6)] transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}