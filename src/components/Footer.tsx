import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 text-white text-lg relative bottom-0 left-16 w-full flex justify-center py-5">
      <p>
        Copyright © 2023{" "}
        <a
          href="https://twitter.com/arashjafarpour1"
          target="blank"
          className="hover:text-blue-600 hover:border-b-2 border-blue-600"
        >
          @arashjafarpour1
        </a>
        . All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
