"use client";
import React, { useState } from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  const [purrFact, setPurrFact] = useState<string | null>(null);

  const fetchPurrFact = async () => {
    try {
      const response = await fetch(
        "https://catfact.ninja/fact?max_length=100",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-CSRF-TOKEN": process.env.NEXT_PUBLIC_CSRF_TOKEN,
          },
        }
      );
      const data = await response.json();
      setPurrFact(data.fact);
    } catch (error) {
      console.error("Failed to fetch purr-fact:", error);
    }
  };

  return (
    <div className="middlePartDiv flex flex-col justify-center items-center">
      <h3
        style={{
          fontFamily: "Satisfy, cursive",
          fontSize: "3rem",
          color: "#cf4531",
          marginTop: "30px",
        }}
      >
        Get A Purr-Fact
      </h3>
      <br />
      <img
        src="https://imgs.search.brave.com/0eigdG1BuQGO6DEOoV0nrDdLXjb-kh5icnHQHpoBsxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzMyMi0zMjI2/NzA3X3N1bW1lci1j/YXQtbWVtZS1wbmct/ZG93bmxvYWQtZnVu/bnktY2F0LXBuZy5w/bmc"
        alt="cute cat"
        width={350}
        style={{ mixBlendMode: "multiply" }}
      />
      <br />
      <input
        type="button"
        value="Click me!"
        onClick={fetchPurrFact}
        style={{
          width: "100px",
          paddingRight: "8px",
          paddingLeft: "8px",
          paddingTop: "6px",
          paddingBottom: "6px",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer",
          fontFamily: "Poppins",
          background: "#ce4431",
        }}
      />
      <br />
      {purrFact && (
        <div>
          <h4 style={{ fontFamily: "Playwrite AR, cursive", fontSize: "20px" }}>
            {purrFact}
          </h4>
          <br />
        </div>
      )}
    </div>
  );
};

export default MiddlePart;
