import React, { useState } from "react";

const ListToggle = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <div
      className="ListToggle"
      data-toggled={isToggled}
      onClick={() => {
        return setToggled(prev => {
          return !prev;
        });
      }}
    >
      <div>
        <i className="fa fa-fw fa-plus" />
        <i className="fa fa-fw fa-check" />
      </div>
    </div>
  );
};

export default ListToggle;
