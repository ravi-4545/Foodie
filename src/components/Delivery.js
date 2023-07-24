import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Dekivery App
      </h3>
      <div className="max-[1520px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/Fc_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center mid-w-full">
          <p className="text-[#00df9a] font-bold">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convince on Demand
          </h1>
          <p>
            The online food ordering market has increased in the U.S with 40
            percent of U.S adults having ordered their food online once. The
            online food ordering market includes foods prepared by restaurants,
            prepared by independent people, and groceries being ordered online
            and then picked up or delivered.The first online food
            ordering service, World Wide Waiter, was
            founded in 1995.The site originally serviced only northern
            California, later expanding to several additional cities in the
            United States. By the late 2000s, major pizza chains had created
            their own mobile applications and started doing 2030 percent of
            their business online. With increased smartphone penetration,
            and the growth of both Uber and the sharing economy, food delivery
            startups started to receive more attention. In 2010, Snapfinger, who
            is a multi-restaurant ordering website, had a growth in their mobile
            food orders by 17 percent in one year.By 2015, online ordering
            began overtaking phone ordering.In 2015, China's online food
            ordering and delivery market grew from 0.15 billion yuan to 44.25
            billion yuan.As of September 2016, online delivery accounted
            for about 3 percent of the 61 billion U.S. restaurant
            transactions.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
