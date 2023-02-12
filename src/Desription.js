import React from "react";
import { useLocation } from "react-router";

const Desription = () => {
  const loction = useLocation();
  const user = loction.state;
  return (
    <div className="container">
      <div className="icons">
        <img id="img" src="name.png" alt="" />
        <img id="img" src="email.png" alt="" />
        <img id="img" src="adress.png" alt="" />
        <img id="img" src="geo.png" alt="" />
        <img id="img" src="phone.png" alt="" />

        <img id="img" src="web.png" alt="" />
        <img id="img" src="comp.png" alt="" />
      </div>
      <div className="description">
        <h1>{user.name} {user.username} </h1>
        <h1> {user.email}</h1>

        <h1> {user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}</h1>

        <h1>{user.address.geo.lat} {user.address.geo.lng}</h1>

        <h1> {user.phone}</h1>

        <h1> {user.website}</h1>

        <h1>{user.company.name} {user.company.catchPhrase} {user.company.bs}</h1>
      </div>
    </div>
  );
};

export default Desription;
