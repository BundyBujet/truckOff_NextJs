import LocationSwiper from "../locationSwiper/LocationSwiper";
import style from "./Locations.modules.css";

const Locations = () => {
  return (
    <section className={style.locations}>
      <LocationSwiper />
    </section>
  );
};

export default Locations;
