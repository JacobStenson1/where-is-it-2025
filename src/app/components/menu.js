"use client";
import React, { useEffect, useState } from "react";

const getMenuItems = async () => {
  const response = await fetch("/api/menu/item");
  return await response.json();
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  // Get menu items
  useEffect(() => {
    console.log("hi");
    getMenuItems().then((items) => {
      console.log("items");
      console.log(items);

      setMenuItems(items.data);
    });
  }, []);

  return (
    <div>
      <form
        // onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
        method="post"
        action="/api/menu/item"
      >
        <input type="text" name="name" placeholder="Enter text" />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Save
        </button>
      </form>
      FROM DB...
      <br />
      <br />
      {menuItems.map((item, i) => (
        <div key={`${item.name} + ${i}`}>{item.name}</div>
      ))}
      {/*{JSON.stringify(menuItems)}*/}
    </div>
  );
}
