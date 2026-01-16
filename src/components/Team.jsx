import "./Team.css";

const teamImages = [
  "/images/portfolio-1.png",
  "/images/portfolio-2.png",
  "/images/portfolio-3.png",
  "/images/portfolio-1.png",
];

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>

      <div className="team-grid">
        {teamImages.map((img, index) => (
          <img key={index} src={img} alt="Team member" />
        ))}
      </div>
    </section>
  );
}

export default Team;
