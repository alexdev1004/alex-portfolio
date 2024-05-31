import Image from 'next/image'
import main_post from "../public/assets/blog/main-post.webp"
import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>My Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>9 Apr 2022</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>wordpress, business</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>How To Publish Content That Ranks On Google</h3>
          <Image src={main_post} alt="Blog image" width={700} height={390}/>
          <div className="post-content">
            <p>
              To publish content that ranks on Google: 
              Perform keyword research
              to identify relevant keywords. Create high-quality, valuable
              content that meets user search intent. Optimize your content with
              target keywords in titles, headings, and meta tags. Use proper
              formatting with headings, bullet points, and numbered lists.
              Include internal and external links to enhance content and website
              structure. Ensure your website is mobile-friendly and
              fast-loading. Promote your content through social media and other
              channels. Monitor performance and make data-driven optimizations.
              Remember, ranking well on Google requires time and ongoing
              optimization. Stay updated with industry trends and user feedback
              to improve your content strategy continuously.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
