import React from "react";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";

const ReturnPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Return Policy
          </h1>
          <p className="text-gray-600 mb-6">
            We want you to be completely satisfied with your purchase. If you
            are not happy with your product, we are here to help.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Returns</h2>
          <p className="text-gray-600 mb-6">
            You have 30 calendar days to return an item from the date you
            received it. To be eligible for a return, your item must be unused
            and in the same condition that you received it. Your item must be in
            the original packaging and you need to have the receipt or proof of
            purchase.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Refunds</h2>
          <p className="text-gray-600 mb-6">
            Once we receive your item, we will inspect it and notify you that we
            have received your returned item. We will immediately notify you on
            the status of your refund after inspecting the item. If your return
            is approved, we will initiate a refund to your credit card (or
            original method of payment). You will receive the credit within a
            certain amount of days, depending on your card issuer's policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Shipping
          </h2>
          <p className="text-gray-600 mb-6">
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions on how to return your item to us, contact
            us at:
            <br />
            <span className="font-semibold">Email:</span> support@example.com
            <br />
            <span className="font-semibold">Phone:</span> (123) 456-7890
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
