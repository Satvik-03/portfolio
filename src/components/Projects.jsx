const projects = [
    {
      title: "Zomato Clone",
      desc: "A full-stack food search and recommendation system using Flask, React, and MongoDB.",
      link: "https://github.com/yourusername/zomato-clone"
    },
    {
      title: "Stock Market Insights",
      desc: "Dashboard with market data, using Yahoo Finance API and MongoDB.",
      link: "https://github.com/yourusername/stock-market"
    }
  ];
  
  export default function Projects() {
    return (
      <section id = "projects">
        <h2>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ marginBottom: "20px" }}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Code</a>
          </div>
        ))}
      </section>
    );
  }
  