import Image from "next/image";
import separator from "../../../public/assets/separator.webp";
const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              +48 22 847 26 22
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              Warsaw, Poland
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              michal.jankowski003@gmail.com
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="https://github.com/nmdev0217" target="_blank">
                  <i className="fa-brands fa-github" />
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
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <Image alt="separator" className="separator hide-mobile" src={separator} />
    </section>
  );
};
export default Contact;
