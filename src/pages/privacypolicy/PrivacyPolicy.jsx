import React from "react";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. It is our policy to respect your
            privacy regarding any information we may collect from you across our
            website,{" "}
            <a href="https://www.example.com" className="text-blue-600">
              www.example.com
            </a>
            , and other sites we own and operate.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-6">
            We only collect information about you if we have a reason to do so —
            for example, to provide our services, to communicate with you, or to
            make our services better.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            How We Use Information
          </h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Process your transactions and manage your orders</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Sharing Information
          </h2>
          <p className="text-gray-600 mb-6">
            We do not share your personal information publicly or with
            third-parties except when required to by law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Data Security
          </h2>
          <p className="text-gray-600 mb-6">
            We take the protection of your data seriously and implement a
            variety of security measures to maintain the safety of your personal
            information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-6">
            You have the right to access, correct, or delete your personal
            information that we hold, subject to certain exceptions. If you
            would like to exercise any of these rights, please contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-6">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            <span className="font-semibold">Email:</span> privacy@example.com
            <br />
            <span className="font-semibold">Phone:</span> (123) 456-7890
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
