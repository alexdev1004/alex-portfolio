import Image from "next/image";
import Testimonial1 from "../../../public/assets/testimonials/testimonial-1.webp";
import Testimonial2 from "../../../public/assets/testimonials/testimonial-2.webp";
import oseparate from "../../../public/assets/separator-opposite.webp";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with Michal, he was very helpful and fast to respond
                to my inquiry to help with Next.js website issues and all
                technical problems. "
              </span>
              <span className="person">Jasmin Aniston</span>
              <span className="job">Director - Adobe</span>
            </p>
            <Image src={Testimonial1} alt="" width={120} height={120} />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Michal is a great help managing a very out of date website.
                Everything we ask him to do is done quickly and efficiently, we
                would be lost without him. "
              </span>
              <span className="person">Mark Eliott</span>
              <span className="job">Manager - Trustroots</span>
            </p>
            <Image src={Testimonial2} alt="Testimonial2" width={120} height={120} />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <Image
        alt="oseparate"
        className="z-1 hide-mobile opposite-separator"
        src={oseparate}
      />
    </section>
  );
};
export default Testimonials;
