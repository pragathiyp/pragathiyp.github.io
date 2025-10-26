import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      {/* <ProjectCard
        title="ADGen: Multimodal Advertisement Generation Dataset and Video Captioning Framework"
        description={`Developed a comprehensive dataset comprising 720 variable-length videos totaling 24 hours, accompanied by corresponding images and text captions across 15 categories, including Entertainment, Education, and Sports. This dataset serves as a robust foundation for training and evaluating multimodal AI models.`}
        technologies="Python, PyTorch, Transformers, NLP, Computer Vision"
        link="https://github.com/S-Sanjith/AdGen"
        image="https://via.placeholder.com/600x300?text=ADGen+Project"
      /> */}

      <ProjectCard
        title="CelestiqAI: Generation of Storyboards through Text Summarization"
        description={`Engineered a system that generates storyboards by fine-tuning and comparing multiple large language models (LLMs) on the SciTLDR dataset. Leveraged document extraction techniques using the Deepdoctection library to enhance the summarization process.`}
        technologies="Python, Deepdoctection, NLP, Flask"
        link="https://github.com/pragathiyp/Generation-of-Storyboard-through-Text-Summarization"
        image=":../../public/UI.jpg"
      />

      <ProjectCard
        title="NEXUZ: E-Learning Platform with Project Collaboration Feature"
        description={`Architected a comprehensive e-learning platform integrating a cart system, database schema, and PayPal payment functionality. Facilitated front-end integration using HTML, CSS, JS, PHP, and MySQL, enabling users to purchase educational courses seamlessly.`}
        technologies="HTML, CSS, JS, PHP, MySQL"
        link="https://github.com/pragathiyp/NEXUZ"
        image="../../public/nex.png"
      />

      <ProjectCard
        title="Social Media Application"
        description={`Developed a social media application implementing authentication and CRUD features (posts, likes, comments, follows) using React, Redux, Node.js, Express.js, MongoDB, and Cloudinary. Enhanced user engagement and platform interactivity.`}
        technologies="React.js, Redux, Node.js, Express.js, MongoDB, Cloudinary"
        link="https://github.com/pragathiyp/SocialMedia"
        image="../../public/socialmedia.png"
      />
    </div>
  );
}

export default Projects;
