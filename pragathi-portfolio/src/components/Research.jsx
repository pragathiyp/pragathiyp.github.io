import ProjectCard from "./ProjectCard";

function Research() {
  return (
    <div>
      <h2>Research</h2>

      <ProjectCard
        title="COSMMIC: Comment-Sensitive Multimodal Multilingual Indian Corpus  ACL 2025"
        image="../../public/supplementary.png"
        description={`COSMMIC (Comment-Sensitive Multimodal Multilingual Indian Corpus) is the first large-scale dataset designed for summarization and headline generation across nine major Indian languages, with a focus on reader feedback integration. This dataset bridges the gap in multimodal and multilingual resources for Indian NLP, incorporating text, user comments, and images to support more contextual and diverse Natural Language Generation (NLG).`}
        technologies="Python, NLP, Data Processing"
        link={[
            { label: "GitHub Repo", url: "https://github.com/pragathiyp/COSMMIC", icon: "🔗" },
            { label: "Paper", url: "https://aclanthology.org/2025.acl-long.427/", icon: "🔗" },
          ]}
      />

      <ProjectCard
        title="ADGen: Multimodal Advertisement Generation Dataset & Video Captioning ADCIS 2024 Springer LNNS"
        image="../../public/ad_dataset.png"
        description={`The study addresses the lack of diverse and context-rich datasets for automated advertisement video generation. Existing datasets contain limited captions and fail to represent real-world scenarios. To overcome this, the researchers introduced ADGen, a multimodal dataset of 720 videos (24 hours total) across 15 categories, designed to enhance ad generation and captioning models.`}
        technologies="Python, PyTorch, NLP, Computer Vision"
        link={[
            { label: "GitHub Repo", url: "https://github.com/S-Sanjith/AdGen", icon: "🔗" },
            { label: "Paper", url: "https://doi.org/10.1007/978-981-96-5370-6_2", icon: "🔗" },
          ]}
      />

      <ProjectCard
        title="PROSPECT-SCI: Performance Review and Optimization of Summarization Techniques for Scientific Content ICDLAIR 2024 Atlantis Press"
        description={`Scientific summarization—capturing complex elements like equations, symbols, and technical terms—remains underexplored despite advances in general text summarization. This work investigates which models best handle scientific content by comparing eight state-of-the-art summarization methods (LSA, TextRank, Gemini, BART, DistilBART, PEGASUS, and T5 variants) fine-tuned on the SciTLDR dataset, highlighting key strengths, weaknesses, and gaps in current approaches.`}
        technologies="Python, NLP, Summarization"
        // image="../../public/prospect.png"
        link={[
            { label: "Paper", url: "https://doi.org/10.2991/978-94-6463-740-3_15", icon: "🔗" }
          ]}
        image="../../public/Qualitative comparison of summarization models.png"
      />

      <ProjectCard
        title="Advancements in Multimodal Video Generation: A Review"
        image="../../public/FINAL DIAGRAM.png"
        description={`AI-driven video generation has made significant progress at the intersection of NLP and Computer Vision, with latent diffusion models outperforming GANs, Transformers, and VAEs. However, challenges remain in controlling motion and context, improving image fidelity, and maintaining coherence in long videos. This work surveys multimodal video generation, categorizing approaches by input type (text, image, video, audio) and presenting a generic framework, critically analyzing current methods to guide future research.`}
        technologies="Multimodal AI, Computer Vision, NLP"
        
      />
    </div>
  );
}

export default Research;
