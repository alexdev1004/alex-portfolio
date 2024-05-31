import Image from "next/image";
import oseparate from "../../../public/assets/separator-opposite.webp";
const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>7</h3>
              <p>
                years of<span>experience</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>53</h3>
              <p>
                completed<span>projects</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>26</h3>
              <p>
                Following<span>Clients</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>3</h3>
              <p>
                awards<span>won</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>32</h3>
              <p>
                learned<span>frameworks</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>0</h3>
              <p>
                Projects<span>in progress</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
      </div>
      <Image
        alt="oseparate"
        className="z-1 hide-mobile opposite-separator"
        src={oseparate}
      />
    </section>
  );
};
export default Facts;
