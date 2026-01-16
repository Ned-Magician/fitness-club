import "../styles/hero.css";
import heroImage from "../assets/hero.jpg"; // add image next

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <h1>
            TIME TO SHAPE <br /> YOURSELF
          </h1>

          <p>
            Transform your body and mind with professional trainers and
            customized workout plans.
          </p>

          <button className="hero__btn">Join now</button>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="Fitness training" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
