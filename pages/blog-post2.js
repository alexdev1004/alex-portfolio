import Image from 'next/image'
import mainpost2 from "../public/assets/blog/main-post-2.webp"
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
              <span>21 Feb 2022</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Site, Boost SEO</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>34 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>How Efficient Site Structure Can Boost SEO</h3>
          <Image src={mainpost2} alt="Blog image" width={700} height={390}/>
          <div className="post-content">
            <p>
              An efficient site structure plays a crucial role in boosting SEO
              (Search Engine Optimization) by helping search engines understand
              and index your website's content more effectively. Here are some
              ways in which an efficient site structure can benefit SEO: A
              well-organized site structure with clear navigation allows search
              engine bots to crawl and discover all pages on your website more
              easily. This ensures that your content gets indexed properly and
              increases the chances of ranking in search results. A logical site
              structure helps users navigate your website smoothly, find
              relevant information quickly, and stay engaged. When users have a
              positive experience, they are more likely to spend more time on
              your site, reducing bounce rates and increasing the potential for
              conversions. With a well-planned site structure, you can group
              related content together under relevant categories or sections.
              This helps search engines understand the context and relevance of
              your content, making it easier to rank for targeted keywords and
              topics. An efficient site structure allows for strategic internal
              linking. By linking related pages within your website, you can
              pass link authority, distribute traffic, and help search engines
              discover and index content more effectively. This can improve the
              visibility and ranking potential of your pages. A clear site
              hierarchy, reflected in the URL structure, helps search engines
              understand the importance and relationship between different
              pages. It also provides users with a logical and intuitive
              browsing experience. Using descriptive and keyword-rich URLs can
              further enhance SEO. An organized site structure simplifies the
              process of adding new content, updating existing pages, or making
              structural changes. This allows you to keep your website fresh and
              relevant, which can positively impact SEO performance. An
              efficient site structure often aligns with responsive and
              mobile-friendly design practices. With the increasing importance
              of mobile optimization for SEO, a well-structured website that
              delivers a seamless user experience across different devices can
              contribute to improved search rankings. By implementing an
              efficient site structure, you provide search engines with a clear
              understanding of your website's content, improve user experience,
              and increase the likelihood of ranking higher in search results.
              It's a fundamental aspect of SEO that should be prioritized when
              developing or optimizing your website.
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
