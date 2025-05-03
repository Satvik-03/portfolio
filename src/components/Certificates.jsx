const certificates = [
  {
    title: " AICTE AI/ML Course",
    date: "2024",
    image: "/assets/ai_ml_thumb.jpg",
  },
  {
    title: " AICTE AWS AI/ML Certificate",
    date: "2024",
    image: "/assets/aws_ai_ml_thumb.jpg",
  },
  {
    title: " AICTE AWS Cloud Virtual Internship",
    date: "March 2024",
    image: "/assets/aws_internship_thumb.jpg",
  },
  {
    title: "AICTE Generative AI Internship",
    date: "2024",
    image: "/assets/generative_ai_inteernship_thumb.jpg",
  }
];

const Certificates = () => (
  <section id="certificates" className="certificates-section">
    <h2>Certificates</h2>
    <div className="certificates-grid">
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-card">
          <img src={cert.image} alt={cert.title} />
          <h3>{cert.title}</h3>
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Certificates;

