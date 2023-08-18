import Image from "next/image";
import style from "./Swiper.module.css";

const Swiper = () => {
  return (
    <div className={style.swiper}>
      <div className={style.swiperWraper}>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/ford.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/freightliner.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/hino.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/mercedes-benz.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/mercedes-benz.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/mercedes-benz.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/mercedes-benz.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/mercedes-benz.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
        <div className={style.swiperSlide}>
          <a href="/trucks">
            <Image
              src="/mercedes-benz.webp"
              width={100}
              height={100}
              alt="ford_logo"
              priority={false}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
