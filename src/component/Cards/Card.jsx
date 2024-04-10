import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styling

const CardPage = () => {
  return (
    <div className="card-page">
      <h2 className="card-title  ">Premium Courses</h2>
      <div className="card-row">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
            alt="Card 1"
          />
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww"
            alt="Card 2"
          />
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fHww"
            alt="Card 3"
          />
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tzfGVufDB8fDB8fHww"
            alt="Card 4"
          />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
