import Image from "next/image";
import mobileup from "../../public/assets/separator-mobile-up.webp";
const Separator = ({ type }) => {
  switch (type) {
    case "up":
      return (
        <Image
          alt="mobile-up1"
          className="separator-mobile-up hide-desktop z-1"
          src={mobileup}
          width={1024}
          height={43}
        />
      );
    case "down":
      return (
        <Image
          alt="mobile-up2"
          className="separator-mobile-up hide-desktop z-1"
          src={mobileup}
          width={1024}
          height={43}
        />
      );

    default:
      return (
        <Image
          alt="mobile-up-3"
          className="separator-mobile-up hide-desktop z-1"
          src={mobileup}
          width={1024}
          height={43}
        />
      );
  }
};
export default Separator;
