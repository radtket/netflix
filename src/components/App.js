import React, { useState } from "react";
import "./App.css";
import "./index.scss";
import Hero from "./Hero";
import Logo from "./Logo";
import Navigation from "./Navigation";
import TitleList from "./TitleList";
import UserProfile from "./UserProfile";

const App = () => {
  const [searchUrl, setSearchUrl] = useState("");
  const [value, setValue] = useState("");
  return (
    <div>
      <header className="Header">
        <Logo />
        <Navigation />
        <div className="Search" id="search">
          <input
            onChange={e => {
              setValue(e.target.value);
            }}
            onKeyUp={e => {
              if (e.key === "Enter" && value !== "") {
                setSearchUrl(
                  `search/multi?query=${value}&api_key=87dfa1c669eea853da609d4968d294be`
                );
              }
            }}
            placeholder="Search for a title..."
            type="search"
            value={value}
          />
        </div>
        <UserProfile />
      </header>
      <Hero />
      <TitleList title="Search Results" url={searchUrl} />
      <TitleList
        title="Top TV picks for Jack"
        url="discover/tv?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Trending now"
        url="discover/movie?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Most watched in Horror"
        url="genre/27/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Sci-Fi greats"
        url="genre/878/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Comedy magic"
        url="genre/35/movies?sort_by=popularity.desc&page=1"
      />
    </div>
  );
};

export default App;
