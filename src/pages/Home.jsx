import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="story section container">
      <div className="story__container grid">
        <div className="story__data">
          <h2 className="section__title story__section-title">НАША ИСТОРИЯ</h2>


          <p className="story__description">
            The latest and modern watches of this year, is available in various
            presentations in this store, discover them now.
          </p>

          <Link to="/story" className="button-dark">
            Discover
          </Link>
        </div>

        <div className="story__images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQipPkbOX3tDvp7YUHCpGF0Y0FVb1bSpxJGhDWGBq-RqwiiJF" alt="storyPng" className="story__img" />
          <div className="story__square"></div>
        </div>
      </div>
    </section>
  );
};
