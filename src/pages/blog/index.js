import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Blog = () => {
  return (
    <HelmetProvider>
      <Container className="Blog-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog | {meta.title} </title>
          <meta
            name="description"
            content="My journey in learning SEO and key takeaways for beginners."
          />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> SEO Guide for Developers </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 blog_content">
          <h2> My SEO Learning Journey </h2>
          <p>
            As an aspiring web developer, I've recently started learning about
            Search Engine Optimization (SEO). SEO is essential for increasing
            website visibility and driving organic traffic.
          </p>

          <h3>Key SEO Concepts I'm Learning</h3>
          <ul>
            <li>
              <strong>On-Page SEO</strong> - Optimizing content, title tags,
              meta descriptions, and headers.
            </li>
            <li>
              <strong>Off-Page SEO</strong> - Building backlinks and improving
              domain authority.
            </li>
            <li>
              <strong>Technical SEO</strong> - Improving site speed, mobile
              responsiveness, and structured data.
            </li>
            <li>
              <strong>Keyword Research</strong> - Finding relevant keywords with
              high search intent.
            </li>
          </ul>

          <h3>Resources I'm Using</h3>
          <ul>
            <li>
              <a
                href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google SEO Starter Guide
              </a>
            </li>
            <li>
              <a
                href="https://ahrefs.com/blog/seo-writing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahrefs SEO Writing Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.indeed.com/career-advice/finding-a-job/how-to-become-seo-expert"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Become an SEO Expert (Indeed)
              </a>
            </li>
          </ul>
          
          <h3>Next Steps in My SEO Journey</h3>
          <p>
            I plan to practice SEO strategies on my projects, optimize page
            performance, and continue learning about Google’s ranking
            algorithms.
          </p>
        </div>
      </Container>
    </HelmetProvider>
  );
};
