import Image from "next/image";
import style from "./SwiperCard.module.css";

const SwiperCard = ({ name, image }) => {
  return (
    <div className={style.location}>
      <a href="/trucks">
        <Image
          src={image}
          width={800}
          height={800}
          alt="truck image"
          loading="lazy"
        />

        <div className={style.content}>
          <p>{name}</p>
          <p>
            Show truck
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
            </svg>
          </p>
        </div>
      </a>
    </div>
  );
};

export default SwiperCard;
