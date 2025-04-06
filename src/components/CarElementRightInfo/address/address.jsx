import s from "./address.module.css";
import sprite from "../../../../src/assets/sprite.svg";
import updateAddress from "../../../tools/updateAddress";

const Address = ({ address, mileage }) => {
  return (
    <div className={s.address_box}>
      <div className={s.address_box_item}>
        <svg className={s.icon_location}>
          <use href={sprite + "#icon-Location"}></use>
        </svg>
        <p className={s.address}>{updateAddress(address, "second")}</p>
      </div>
      <p className={s.mileage}>Millage: {mileage}km</p>
    </div>
  );
};

export default Address;
