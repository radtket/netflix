import React, { useState } from "react";

const ListToggle = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <button
      className="ListToggle"
      data-toggled={isToggled}
      onClick={() => {
        return setToggled(prev => {
          return !prev;
        });
      }}
      type="button"
    >
      <div>
        <i className="fa fa-fw fa-plus" />
        <i className="fa fa-fw fa-check" />
      </div>
    </button>
  );
};

export default ListToggle;
