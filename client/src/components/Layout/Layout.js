import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keyword, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="Keyword" content={keyword} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster position="top-left" reverseOrder={true} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,ndoe,react,mongodb",
  author: "Niranjan Kumar Sinha",
};

export default Layout;
