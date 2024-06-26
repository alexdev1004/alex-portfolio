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
              +381-631-755684
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              Pancevo 26101 Serbia
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
              aleksadarnik97@gmail.com
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="https://github.com/alexdev1004" target="_blank">
                  <i className="fa-brands fa-github" />
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
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <Image alt="separator" className="separator hide-mobile" src={separator} />
    </section>
  );
};
export default Contact;
