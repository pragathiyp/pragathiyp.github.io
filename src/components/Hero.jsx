// import React from "react";
// // import profileImg from "../../public/Pragathi Y P Photo.jpeg"; // ensure path is correct

// function Hero() {
//   return (
//     <section className="flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-white to-indigo-50 text-gray-800">
//       {/* Top heading section — unchanged */}
//       <div className="hero mb-10">
//         <h1 className="text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
//           Pragathi Y P
//         </h1>
//         <p className="text-lg text-indigo-700 font-medium">
//           Web Developer | Multimodal AI Researcher | Passionate about Innovative Solutions
//         </p>
//       </div>

//       {/* Profile Image */}
//       <div className="flex justify-center mb-8">
//       <div className="w-36 h-44 md:w-40 md:h-48 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden shadow-lg border border-gray-200">
//       <img src="/pragathi.png" alt="Pragathi Y P" />
//       </div>
//       </div>

//     </section>
//   );
// }

// export default Hero;
import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      {/* Name & Tagline */}
      <h1>Pragathi Y P</h1>
      <p className="tagline">Systems Engineer | Research | NLP | Multimodal AI | LLMs | VLMs | Summarization Systems | Video Understanding | Low-resource NLP</p>

      {/* Oval Image */}
      <div className="hero-image-container">
        <img src="/me.jpg" alt="Pragathi Y P" />
      </div>

      {/* Description */}
      <div className="hero-description">
        <p>
          👋 Hi! I'm <strong>Pragathi</strong>, an engineer and researcher exploring <strong>multimodal AI</strong>, <strong>natural language understanding</strong>, <strong>video understanding</strong>, and <strong>visual-linguistic reasoning</strong> among others. I love combining creativity and computation to design meaningful, human-centered technologies.
        </p>
        <p>
          I’ve worked on projects in multimodal summarization, multimodal video and text generation, intelligent video captioning, cultarally-aware NLP and performance optimization of LLMs. My goal is to bridge the gap between language, vision, and reasoning systems for more natural communication with AI. I also love <b>coding</b> on various platforms like Leetcode, GeeksforGeeks and others using <b>Java and Python.</b> I have also worked on a few other tech stacks in <b>web development, building network and data centre infrastructure, as well as shell scripting</b>.
        </p>
        <p>
          <b>Outside research:</b> 🎨 painting, 🏸 badminton, 🏊‍♀️ swimming, 🏓 table tennis , 🏐 volleyball - anything sports, fun and creativity!
        </p>
      </div>

      {/* Academic Links */}
      <div className="hero-links">
        <a href="https://scholar.google.co.in/citations?hl=en&user=P2FSLdgAAAAJ" target="_blank" rel="noopener noreferrer">📚 Google Scholar</a>
        <a href="https://github.com/pragathiyp" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
      </div>
    </div>
  );
}

export default Hero;
