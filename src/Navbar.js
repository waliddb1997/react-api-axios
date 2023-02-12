import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <logo>
        <img
          src="https://cdn.dribbble.com/users/18123/screenshots/16724837/media/d7362f61dce3240e9dcaffa4ac02191b.png?compress=1&resize=400x300"
          alt="img"
        />
      </logo>
      <div className="nav-user">
        <a href="allUser">AllUsers</a>
        <a href="description">description</a>
      </div>
    </div>
  );
};

export default Navbar;
