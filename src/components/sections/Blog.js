import Image from 'next/image'
import blog1 from "../../../public/assets/blog/blog-post-1.webp"
import blog2 from "../../../public/assets/blog/blog-post-2.webp"
import blog3 from "../../../public/assets/blog/blog-post-3.webp"

import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post1" legacyBehavior>
            <a>
              <span className="img-holder">
                <Image src={blog1} alt="blog" width={538} height={300} />
              </span>
              <div className="content">
                <span className="category">design</span>
                <span className="title">
                  How To Publish Content That Ranks On Google
                </span>
                <p>
                  Publishing content that ranks well on Google requires a
                  combination of strategic planning, optimization techniques...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post2" legacyBehavior>
            <a>
              <span className="img-holder">
                <Image src={blog2} alt="blog2" width={538} height={300} />
              </span>
              <div className="content">
                <span className="category">development</span>
                <span className="title">
                  How Efficient Site Structure Can Boost SEO
                </span>
                <p>
                  An efficient site structure plays a crucial role in boosting
                  SEO (Search Engine Optimization) by helping search engines
                  understand and index...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>21 Feb 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post3" legacyBehavior>
            <a>
              <span className="img-holder">
                <Image src={blog3} alt="blog3" width={538} height={300} />
              </span>
              <div className="content">
                <span className="category">essentials</span>
                <span className="title">
                  Change Management for Customer Success
                </span>
                <p>
                  Change management for customer success involves effectively
                  managing and guiding customers through significant changes or
                  transitions...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 May 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
