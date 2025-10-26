import ProjectCard from "./ProjectCard";

function Experience() {
  return (
    <div>
      <h2>Experience</h2>

      <ProjectCard
        title="Software Engineer at VISA Inc."
        description={`Delivered 120+ servers across Windows, Linux, VMWare ESX, OpenShift, and Hyper-V. Developed a Microsoft Copilot Studio Agent to assist the team in efficiently retrieving information from documents, enhancing productivity.`}
        technologies="Windows, Linux, VMWare ESX, Red Hat OpenShift, HyperV"
        image="../../public/visa.png"
      />

      <ProjectCard
        title="Research Intern at IIT Patna"
        description={`Enhanced the Reader-Aware Multi-Document Summarization (RA-MDS) system by expanding the dataset with 528 images using the Google Image Search API. Extracted transcripts via Wav2Vec and MoviePy, evaluated summaries using GPT-4, and developed the Kannada subset of COSMMIC Corpus (510 articles, 2,658 comments).`}
        technologies="Python, NLP, Multimodal AI, Data Processing"
        image="../../public/Screenshot 2025-10-25 172139.jpg"
      />

      <ProjectCard
        title="Software Development Intern at Fidelity Investments"
        description={`Migrated the Annuity contracts application from monolithic to microservices architecture using AWS and Eclipse. Developed APIs to authenticate users, verify contract numbers, and provide contract options using Java and Insomnia.`}
        technologies="Java, AWS, Microservices"
        image="../../public/fidelity.png"
      />

      <ProjectCard
        title="Project Intern at Hewlett Packard Enterprise"
        description={`TCPSim: Led team simulating TCP sessions with user-defined parameters, implementing server-side operations and multi-client communication using C, Linux, and Socket programming.`}
        technologies="C, Linux, Socket Programming"
        image="../../public/e4269cf5-42de-48d8-9f70-a5ef198fc4c2.png"
      />

      <ProjectCard
        title="Project Intern & Student Coordinator at CIIE"
        description={`College Centre for Innovation Website: Developed a platform enabling users to pitch startups swiftly via automated email approvals using SendGrid API and technologies like MongoDB, React.js, Node.js, Express.js, MaterialUI, AWS S3.  
Hattyhood E-commerce Website: Integrated JWT authentication, cart functionalities, and Razorpay payment for secure transactions.`}
        technologies="React.js, Node.js, MongoDB, MaterialUI, AWS S3, JWT, Razorpay"
      />
    </div>
  );
}

export default Experience;
