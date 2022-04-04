import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  const nevigate = useNavigate();
  
  const sclicedReviews = reviews.slice(0,3);   


  return (
    <div>
      <div className="container m-8 p-8 grid md:grid-flow-col gap-24 items-center">
        <div className="text-left">
          <h1 className="text-4xl my-5">Fitness Tracker<span className="text-green-500"> Smart Watch</span>  </h1>
          <p>
            This is one of the best fitness tracker. It has many updated
            features. This smart watch comes with IP68 rating, which means it is
            protected against dirt, dust, sand and occasional dips in the water.
            Now whatever you want to do, do it worry-free.{" "}
          </p>
          <button className="rounded-full bg-green-300 px-8 py-2 my-5">
            Buy Now
          </button>
        </div>
        <div className="w-50">
          <img src="../../../watch.jpg" alt="" />
        </div>
      </div>
      <div>
        <h1 className="mb-16">
          <span className="rounded bg-gray-300 px-8 py-2">
            Our Customars' review
          </span>
        </h1>
        <div className="grid md:grid-cols-3 gap-10 p-16">
          {sclicedReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button onClick={() => nevigate('/reviews')} className="rounded-full bg-green-300 px-8 py-2 my-5">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
