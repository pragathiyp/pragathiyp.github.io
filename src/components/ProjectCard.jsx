function ProjectCard({ title, description, technologies, link, image }) {
    const techEmojis = {
      Java: "☕",
      Python: "🐍",
      C: "💻",
      HTML: "📄",
      HTML5: "📄",
      CSS: "🎨",
      CSS3: "🎨",
      Bootstrap: "🅱️",
      "JavaScript": "🟨",
      "Node.js": "🟩",
      "React.js": "⚛️",
      "Express.js": "🚂",
      MySQL: "🐬",
      MongoDB: "🍃",
      Git: "🔧",
      GitHub: "🐱",
      "Visual Studio Code": "🖥️",
      NumPy: "🔢",
      Pandas: "🐼",
      Matplotlib: "📊",
      PyTorch: "🔥",
      "Scikit-learn": "📚",
      NLP: "🗣️",
      Windows: "🪟",
      Linux: "🐧",
      HyperV: "💠",
      "VMWare ESX": "🖲️",
      "Red Hat OpenShift": "🎩",
      "Data Structures & Algorithms": "🧩",
      "Object-Oriented Programming": "🧱",
      "Database Management Systems": "🗄️",
      Flask: "🍶",
      PHP: "🐘",
      Cloudinary: "☁️",
      Redux: "🔁",
    };
  
    return (
      <div className="project-card">
        {image && (
          <div className="project-image">
            <img src={image} alt={title} />
          </div>
        )}
  
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
  
          {technologies && (
            <div className="tech-tags">
              {technologies.split(",").map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {techEmojis[tech.trim()] || "💻"} {tech.trim()}
                </span>
              ))}
            </div>
          )}
  
          {/* ✅ Multiple Links Support */}
          {link && (
            <div className="project-links">
              {Array.isArray(link) ? (
                link.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {item.icon || "🔗"} {item.label}
                  </a>
                ))
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  🔗 Github
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  