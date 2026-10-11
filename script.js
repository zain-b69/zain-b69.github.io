// To add a project, add an object to this list. Set `repo` to your GitHub link.
const projects = [
  {
    kind: "Enterprise Application",
    title: "Project Portfolio Management",
    desc: "Spring Boot application to manage and follow IT projects for the IT department (DSI) of ONEE. Secured with Spring Security and JWT authentication. Includes the full project documentation: requirements, use case diagrams and the Merise conceptual data model.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT"],
    repo: "https://github.com/zain-b69/projectportfolio-back"
  },
  {
    kind: "Full-Stack Platform",
    title: "MDoc: Document Management",
    desc: "Document platform with multi-step validation workflows, electronic signatures and version history. Files are stored on MinIO, and a rule-based chatbot helps users find information on the platform. Presented and defended before a jury.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "MinIO"],
    repo: "https://github.com/zain-b69/MDoc"
  },
  {
    kind: "Desktop Application",
    title: "HealthySmile: Dental Clinic Management",
    desc: "Native Java desktop application to manage patients, appointments and medical records. Built with a Spring-inspired layered architecture (MVC, services, DAO).",
    tags: ["Java", "MVC", "DAO"],
    repo: "https://github.com/zain-b69/healthySmile"
  },
  {
    kind: "Machine Learning",
    title: "SpamShield: Spam Detection",
    desc: "Bachelor's final project. Built the dataset, preprocessed the text, trained classification models and deployed the result as a web application.",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy"],
    repo: "https://github.com/zain-b69/model_SVM2"
  },
  {
    kind: "Web Application",
    title: "Training Center Management Platform",
    desc: "Full-stack .NET application to manage student registrations, training courses and follow-up.",
    tags: [".NET", "Full-stack"],
    repo: "https://github.com/zain-b69/CentreFormation"
  },
  {
    kind: "E-Commerce",
    title: "SookLine: Online Store",
    desc: "Full-stack online shop with a PHP backend, a MySQL database and an HTML, CSS and JavaScript front end.",
    tags: ["PHP", "MySQL", "JavaScript"],
    repo: "https://github.com/zain-b69/sookline"
  }
];

const list = document.getElementById("project-list");

projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "project";
  card.innerHTML = `
    <div class="project-head">
      <span class="kind">${p.kind}</span>
      <a href="${p.repo}" target="_blank" rel="noopener" aria-label="GitHub repository of ${p.title}">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
  `;
  list.appendChild(card);
});
