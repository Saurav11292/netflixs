import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show &&"nav_black"}`}>
      <div className="nav_logo">
        <img
          className="netflixlogo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="notfound"
        />
      </div>
      <div className="nav_avtar">
        <img
          className="netflixavatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="notfound"
        />
      </div>
    </div>
  );
}
