"use client";
import React, { useEffect, useState } from "react";

const getItems = async () => {
  const response = await fetch("/api/item");
  return await response.json();
};

export default function Items() {
  const [items, setItems] = useState([]);

  // Get items
  useEffect(() => {
    console.log("hi");
    getItems().then((items) => {
      console.log("items");
      console.log(items);

      setItems(items.data);
    });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <form
        // onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
        method="post"
        action="/api/item"
      >
        <input type="text" name="name" placeholder="Item name" />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Save
        </button>
      </form>
      {items.map((item, i) => (
        <div key={`${item.name} + ${i}`}>{item.name}</div>
      ))}
    </div>
  );
}
