import React from "react";

import "./style/SearchBar.css";

export default function SearchBar() {
  return (
    <div>
      <div>
        <input value={name} onChange="" placeholder="search" type="search" />
        <button className="sbbtn" type="submit">
          BUSCAR PRODUCTOS
        </button>
      </div>
    </div>
  );
}
