import HeroContent from "../heroContent/HeroContent";
import style from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={style.hero}>
      <Image
        src="/hero.webp"
        width={500}
        height={500}
        alt="Picture of truck"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
        }}
      />
      <HeroContent />
    </section>
  );
};

export default Hero;
