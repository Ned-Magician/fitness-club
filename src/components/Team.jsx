import "./Team.css";

const teamImages = [
  "/images/portfolio-1.jpg",
  "/images/portfolio-2.jpg",
  "/images/portfolio-3.jpg",
  "/images/portfolio-4.jpg",
];

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>

      <div className="team-grid">
        {teamImages.map((img, index) => (
          <img key={index} src={img} alt={`Team member ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Team;
