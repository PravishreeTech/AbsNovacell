import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BlogsNews = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand me-5 p-2 ps-5" href="#">
            <img
              src="./asserts/logo.png"
              alt="ABSNOVACELL logo"
              style={{ width: "300px", height: "80px" }}
            />
          </a>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 30 30\"><path stroke=\"%23ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" d=\"M4 7h22M4 15h22M4 23h22\"/></svg>')",
              }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { name: "Home", href: "./index.html" },
                { name: "About Us", href: "./about-us.html" },
                { name: "Products Pipeline", href: "./product-pipeline.html" },
                { name: "Team", href: "./team.html" },
                { name: "Partnership", href: "./partnership.html" },
                { name: "Careers", href: "./careers.html" },
                { name: "Blogs/News", href: "./blogs-news.html", active: true },
                { name: "Contact Us", href: "./contact-us.html" },
              ].map((item) => (
                <li
                  className={`nav-item ps-2 pe-2 ${
                    item.active ? "border-end active" : "border-end"
                  }`}
                  key={item.name}
                >
                  <a
                    className={`nav-link h5 fw-bold ${
                      item.active ? "text-primary" : "text-primary-blue"
                    }`}
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* BANNER */}
      <section id="intro" className="position-relative overflow-hidden">
        <div className="banner">
          <img
            src="https://www.shutterstock.com/image-photo/advertising-communication-digital-business-marketing-600nw-2426988253.jpg"
            alt="banner"
            className="img-fluid w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div
            className="overlay position-absolute top-0 start-0 w-100 h-100 bg-primary"
            style={{ opacity: 0.4 }}
          ></div>

          <div className="container">
            <div className="banner-content position-absolute top-50 start-50 translate-middle text-white text-center">
              <h1 className="display-4 fw-bold">Blogs / News</h1>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="products-intro mb-4 padding-small">
        <div className="container my-5">
          <div className="display-header mb-5">
            <h2 className="display-5 text-center fw-bold text-primary-blue">
              ABSNOVACELL Insights & Updates
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="card shadow-lg border-0 rounded-4"
                style={{
                  background:
                    "linear-gradient(135deg, #1B365D 50%, #0C7BC0 100%)",
                }}
              >
                <div className="card-body p-5">
                  <p className="card-text text-light fs-5">
                    For investor relations, contact our Business Development
                    Management Team: We are currently seeking investors.
                  </p>
                  <p className="card-text text-light h3 text-center fs-5">
                    Contact : seila@absnovacell.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-12">
              <div
                className="card shadow-lg border-0 rounded-4"
                style={{
                  background:
                    "linear-gradient(135deg, #1B365D 50%, #0C7BC0 100%)",
                }}
              >
                <div className="card-body p-5">
                  <p className="card-text text-light fs-5">
                    Stay informed with the latest news, expert voices and
                    industry insights. Your single hub for trends, analysis and
                    thought leadership in life sciences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS & NEWS */}
      <section id="latest-blog" className="padding-small">
        <div className="container">
          <div className="row">
            <div className="post-grid d-flex flex-wrap">
              {/* BLOG CARDS */}
              {[
                {
                  date: "August 07, 2025",
                  title: "FDA PreCheck Initiative",
                  subtitle: "Streamlining Domestic Pharma Manufacturing",
                  link: "https://www.fda.gov/news-events/press-announcements/fda-announces-new-fda-precheck-program-boost-us-drug-manufacturing",
                  type: "News",
                  desc: "The U.S. Food and Drug Administration today announced FDA PreCheck, a new program to strengthen ...",
                },
                {
                  date: "October 23, 2025",
                  title: "Drugs@FDA Data Files",
                  link: "https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files",
                  type: "News",
                  desc: "Below you will find a compressed data file of the Drugs@FDA database...",
                },
                {
                  title: "Eli Lilly Enters Retina with $261M Acquisition",
                  link: "./news/Eli-Lilly-Enters-Retina.html",
                  type: "News",
                  desc: "Eli Lilly is making its move into ophthalmologic gene therapies...",
                },
                {
                  date: "April 5, 2024",
                  title: "Biologics and Biosimilars Landscape 2023 :",
                  link: "https://www.fr.com/insights/thought-leadership/blogs/biologics-and-biosimilars-landscape-ip-policy-and-market-developments",
                  type: "Blog",
                  desc: "IP, Policy, and Market Developments Fish & Richardson ...",
                },
                {
                  date: "November 1, 2018",
                  title: "Potential of Biosimilars to Increase Access to Biologics :",
                  link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6570521/",
                  type: "Blog",
                  desc: "Considerations for Advanced Practice Providers in Oncology ...",
                },
                {
                  date: "February 13, 2025",
                  title: "Biosimilars :",
                  subtitle: "Expanding access to essential biologic therapies",
                  link: "https://www.who.int/news/item/13-02-2025-biosimilars--expanding-access-to-essential-biologic-therapies",
                  type: "Blog",
                  desc: "IP, Policy, and Market Developments Fish & Richardson ...",
                },
              ].map((post, i) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mb-5 pb-5"
                  key={i}
                >
                  <div
                    className="card-item me-3 shadow-sm"
                    style={{ minHeight: "260px" }}
                  >
                    <div className="card border-0 bg-transparent">
                      <div className="card-image position-relative">
                        <span className="bg-primary text-light position-absolute px-2 py-1 rounded text-uppercase">
                          {post.type}
                        </span>
                      </div>
                    </div>
                    <div className="card-body p-3 mt-2 mb-2">
                      {post.date && (
                        <div className="meta-date">{post.date}</div>
                      )}
                      <h3 className="card-title fs-3 fw-semibold mt-3 text-primary-blue">
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none text-primary-blue"
                        >
                          {post.title}
                        </a>
                      </h3>
                      {post.subtitle && (
                        <h5 className="mt-2 text-secondary">{post.subtitle}</h5>
                      )}
                      <p className="mt-3">
                        {post.desc}{" "}
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-underline text-primary-blue"
                        >
                          <em>Read more</em>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-light pt-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4 text-center text-md-start">
              <h3 className="fw-bold">ABSNOVACELL</h3>
              <p className="mb-3 small text-light">
                © ABSNovacell Biopharmaceuticals Limited. Advancing compassionate
                innovation for a healthier tomorrow.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="#" className="text-light">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-twitter-x fs-4"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4 text-center text-md-start">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled small">
                {[
                  "About Us",
                  "Product Pipeline",
                  "Team",
                  "Careers",
                  "Blogs/News",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`./${link.toLowerCase().replace(" ", "-")}.html`}
                      className="text-light text-decoration-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* India Info */}
            <div className="col-md-3 mb-4 text-center text-md-start">
              <h6 className="fw-bold">INDIA Headquarters</h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>B-502, Leela Nagar,
                  Ameerpet <br />
                  &nbsp;&nbsp;&nbsp;Hyderabad-16, AP, India
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  info@absnovacell.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2"></i>610-905-8609
                </li>
              </ul>
            </div>

            {/* USA Info */}
            <div className="col-md-3 mb-4 text-center text-md-start">
              <h6 className="fw-bold">USA Contact</h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>80 Main Street, 5th
                  Floor, West <br />
                  &nbsp;&nbsp;&nbsp;Orange, NJ 07052, USA
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  sheila@absnovacell.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2"></i>484-544-2673
                </li>
              </ul>
            </div>
          </div>

          <div className="row border-top border-secondary p-3 mt-3">
            <div className="col-md-6 text-start small">
              © 2018-2025 ABSNOVACELL®. All rights reserved.
            </div>
            <div className="col-md-6 text-end small">
              <a
                href="../privacy-policy.html"
                className="text-light text-decoration-none me-3"
              >
                Privacy Policy
              </a>
              <a
                href="../terms-of-use.html"
                className="text-light text-decoration-none me-3"
              >
                Terms of Use
              </a>
              <a
                href="../site-map.html"
                className="text-light text-decoration-none"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
        <div className="bg-light text-dark text-center py-2">
          <span>Developed by</span>{" "}
          <a
            href="https://pravishree.com/"
            className="fw-bold text-primary-blue text-decoration-none">
            Pravishree
          </a>
        </div>
      </footer>
    </>
  );
};

export default BlogsNews;
