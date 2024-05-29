import React from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";

function NoPage() {
  const user= JSON.parse(localStorage.getItem("user"));
  console.log(user)

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
              src="https://raw.githubusercontent.com/uditrsahani/NEWS-API/main/images/e-comm-hero.jpeg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {user? (
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Hello {user.user.email}
                </h2>
              ) : (
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Hello User
                </h2>
              )}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                This page doesn't exit!
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* <span className="text-gray-600 ml-3">4 Reviews</span> */}
                </span>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Go to the
                </span>
                <Link to={"/"}
                  
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NoPage;
