import React from "react";
const Header = ({ name, email, github }) => {
  return (
    <>
      <h1>{name}</h1>

      <p>{email}</p>

      <p>{github}</p>
    </>
  );
};

export default Header;