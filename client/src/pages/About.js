import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us -Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We offer a wide variety of high-quality products to meet your
            diverse needs. Our website is easy to navigate, our prices are
            competitive, and we prioritize customer satisfaction. We implement
            the latest security measures to protect your personal and financial
            information. Our team is always available to answer your questions.
            Shop with confidence today.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About
