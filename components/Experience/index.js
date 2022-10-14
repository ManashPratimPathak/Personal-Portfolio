import React from "react";
import items from "./content";
import Item from "./item";



export default function index() {
  return (
    <>
      <div className="container-timeline">
        {items.map((item, index) => (
          <Item data={item} key={item.title} index={index}/>
        ))}
      </div>
      <style jsx>{`
        .container-timeline {
          width: 50vw;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          counter-reset: contador;
          margin: 3rem auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          padding-top: 4rem;
          margin-bottom: 8rem;
          font-family: 'Julius Sans One', sans-serif;
        }
      `}</style>
    </>
  );
}
