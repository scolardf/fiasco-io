import React from "react";

import "./HeaderButton.css";

function HeaderButton(props) {
  return (
    <li className="headerButtonLi">
      <button
        value={props.value}
        onClick={() => props.clickHandle(props.value)}
      >
        {props.name}
      </button>
    </li>
  );
}

export default HeaderButton;
