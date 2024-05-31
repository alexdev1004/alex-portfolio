import Image from "next/image";
import scopyright from "../../../public/assets/separator-copyright.webp";
const Copyright = () => {
  return (
    <section className="copyright">
      <Image alt="scopyrightg" className="z-1 hide-mobile" src={scopyright} />
      <div>
        <span>© {new Date().getFullYear()} Aleksandar Nikolovski</span>
        <span>
          Designed By <a href="https://app.enhancv.com/share/68271978/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank">Aleksandar</a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/alexdev1004" target="_blank">
              <i className="fa-brands fa-github " />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+381-631-755684"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aleksandar-nikolovski-16321530a" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Moravska+11,+Pan%C4%8Devo+26000,+Serbia/@44.8637957,20.6444803,3a,75y,56.39h,130.13t/data=!3m7!1e1!3m5!1s2rQRinZGllRn0RC9XXGwvw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D2rQRinZGllRn0RC9XXGwvw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D56.387436955890045%26pitch%3D-40.12802792144072%26thumbfov%3D90!7i13312!8i6656!4m15!1m8!3m7!1s0x475a7f315cf2adc3:0x6338fb3d3711db11!2sMoravska+11,+Pan%C4%8Devo+26000,+Serbia!3b1!8m2!3d44.8639125!4d20.6446262!16s%2Fg%2F11pdrw6mbs!3m5!1s0x475a7f315cf2adc3:0x6338fb3d3711db11!8m2!3d44.8639125!4d20.6446262!16s%2Fg%2F11pdrw6mbs?coh=205410&entry=ttu"
              target="_blank"
            >
              <i className="fa fa-street-view" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
