import Image from "next/image";
import scopyright from "../../../public/assets/separator-copyright.webp";
const Copyright = () => {
  return (
    <section className="copyright">
      <Image alt="scopyright" className="z-1 hide-mobile" src={scopyright} />
      <div>
        <span>© {new Date().getFullYear()} Michal Jankowski</span>
        <span>
          Designed By <a href="https://app.enhancv.com/share/68271978/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank">Michal</a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/nmdev0217" target="_blank">
              <i className="fa-brands fa-github " />
            </a>
          </li>
          <li>
            <a
              href="https://join.skype.com/invite/tqtEQleYmiR4"
              target="_blank"
            >
              <i className="fa-brands fa-skype" />
            </a>
          </li>
          <li>
            <a href="https://t.me/JankowskiMichal" target="_blank">
              <i className="fa-brands fa-telegram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir/Poland/Warsaw,+Poland/@52.0483848,18.7669371,8z/data=!4m14!4m13!1m5!1m1!1s0x47009964a4640bbb:0x97573ca49cc55ea!2m2!1d19.145136!2d51.919438!1m5!1m1!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!2m2!1d21.0122287!2d52.2296756!3e0?entry=ttu"
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
