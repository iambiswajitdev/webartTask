import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { righitIcon } from "../utility/commonStatickData";
const Sidebar = () => {
  const [catagories, setCatagories] = useState([]);
  const prodactCatagory = async () => {
    try {
      const response = await fetch("https://api.anandroy.com/api/categories");
      const actualData = await response.json();
      console.log("prodact", actualData.data);
      setCatagories(actualData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    prodactCatagory();
  }, []);
  return (
    <>
      <div className="sideBar">
        <ul className="catagoris">
          {catagories.map((item) => (
            <li key={item.id}>
              <Link to="/">{item.catName}</Link>
            </li>
          ))}
        </ul>
        <Link className="viewAllCate" to="/">
          view all categories {righitIcon}
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
