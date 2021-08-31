import React, { useState, useEffect } from "react";
import Item from "./Item";

const TitleList = ({ title, url }) => {
  const [state, setState] = useState({ results: [], mounted: false });
  useEffect(() => {
    const doIt = path => {
      fetch(
        `https://api.themoviedb.org/3/${path}&api_key=87dfa1c669eea853da609d4968d294be`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          setState(prev => {
            return {
              ...prev,
              mounted: true,
              ...data,
            };
          });
        })
        .catch(err => {
          console.log("There has been an error", { err });
        });
    };

    doIt(url);
  }, [url]);

  return (
    <div
      // ref="titlecategory"

      className="TitleList"
      data-loaded={state.mounted}
    >
      <div className="Title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {state.results.map((title, i) => {
            // console.log({ title });

            if (i < 5) {
              let name = "";
              const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
              if (!title.name) {
                name = title.original_title;
              } else {
                name = title.name;
              }

              return (
                <Item
                  key={title.id}
                  backdrop={backDrop}
                  overview={title.overview}
                  score={title.vote_average}
                  title={name}
                />
              );
            }
            return <div key={title.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TitleList;
