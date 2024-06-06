import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to EasyBuy, your one-stop online destination for all your
          shopping needs. Discover a vast selection of high-quality products
          across categories such as fashion, electronics, home essentials,
          beauty, and more. Our user-friendly website ensures a seamless
          shopping experience with detailed product descriptions, customer
          reviews, and secure payment options. Enjoy exclusive deals, fast
          shipping, and exceptional customer service. Whether you're updating
          your wardrobe, upgrading your tech, or finding the perfect gift,
          EasyBuy has everything you need at unbeatable prices. Shop with
          confidence and convenience at EasyBuy– where your satisfaction is
          our top priority.
        </p>
      </div>
    </div>
  );
};
