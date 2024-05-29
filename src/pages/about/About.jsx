import React from "react";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            Welcome to our website! We are dedicated to providing the best
            services to our customers. Our team works tirelessly to ensure
            customer satisfaction and we pride ourselves on our commitment to
            excellence.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to deliver high-quality products and services that
            bring value to our customers. We strive to innovate and constantly
            improve our offerings to meet and exceed customer expectations.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Team
          </h2>
          <p className="text-gray-600 mb-6">
            We have a team of skilled professionals who are passionate about
            their work. Our team members come from diverse backgrounds and bring
            a wealth of experience to the table, making us stronger and more
            versatile.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or would like to get in touch with us,
            please don't hesitate to contact us. We are here to help and look
            forward to hearing from you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
