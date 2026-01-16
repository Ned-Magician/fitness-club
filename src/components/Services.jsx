import "../styles/services.css";

const services = [
  {
    title: "Personal Training",
    text: "Customized workout plans designed to help you reach your goals faster.",
  },
  {
    title: "Body Building",
    text: "Build strength and muscle with structured and progressive training.",
  },
  {
    title: "Yoga Classes",
    text: "Improve flexibility, balance, and mental focus with guided sessions.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2>Our Services</h2>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service__card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
