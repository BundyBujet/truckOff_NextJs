import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.about}>
      <div className={style.title}>
        <h2>
          Looking for a truck? <br /> don’t truck around.
        </h2>
        <div className={style.color}></div>
      </div>
      <p>
        TruckOff is your one stop shop finding the best deals in Australia.
        We’re gathered listings from dealers sellers the country. So you can
        easly compare prices and features in one place.
      </p>
    </section>
  );
};

export default About;
