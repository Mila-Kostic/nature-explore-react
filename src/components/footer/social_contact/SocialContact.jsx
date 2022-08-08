import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function SocialContact() {
  return (
    <div>
      <AiFillFacebook className="social-icons" />
      <AiFillTwitterSquare className="social-icons" />
      <AiFillInstagram className="social-icons" />
      <AiFillYoutube className="social-icons" />
    </div>
  );
}

export default SocialContact;
