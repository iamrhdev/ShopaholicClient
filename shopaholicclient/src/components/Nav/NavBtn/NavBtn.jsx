import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar.scss";

export default function NavBtn({ navLinks }) {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <ul
        className="nav-links"
        style={{ listStyleType: "none", padding: 20, margin: 0 }}
      >
        {navLinks.map((link) => (
          <li
            key={link}
            style={{
              display: "inline-block",
              marginRight: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <NavLink to={`/${link.toLowerCase()}`}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </Flex>
  );
}
