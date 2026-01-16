import "./Trainers.css";

const trainers = [
  {
    name: "John Carter",
    role: "Strength Coach",
    image: "/images/meet team-1.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Yoga Trainer",
    image: "/images/meet team-2.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Personal Trainer",
    image: "/images/meet team-3.jpg",
  },
];

function Trainers() {
  return (
    <section className="trainers">
      <h2>Meet Our Trainers</h2>

      <div className="trainer-grid">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;
