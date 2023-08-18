import SwiperCard from "../swiperCard/SwiperCard";
import style from "./LocationSwiper.module.css";
import locationsData from "@/data/locationsData";

const LocationSwiper = () => {
  return (
    <div className={style.locationSwiper}>
      <div className={style.swiperContainer}>
        {locationsData.map((card) => {
          return <SwiperCard name={card.location} image={card.image} />;
        })}
      </div>
    </div>
  );
};

export default LocationSwiper;
