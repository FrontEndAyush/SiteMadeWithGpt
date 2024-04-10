import React from "react";
import "./Review.css"; // Assuming you have a CSS file for styling

const ReviewPage = () => {
  return (
    <div className="review-page">
      <h1 className="review-title">Student Review</h1>
      <div className="review-container">
        <div className="review">
          <div className="left">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="Left Image" />
            <p>Led by seasoned design experts, our course provides unparalleled guidance and support every step of the way. Gain valuable insights, insider tips, and personalized feedback to supercharge your learning journey</p>
            <p className="name">Rezina</p>
          </div>
          <div className="right">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="Right Image" />
            <p>Led by seasoned design experts, our course provides unparalleled guidance and support every step of the way. Gain valuable insights, insider tips, and personalized feedback to supercharge your learning journey</p>
            <p className="name">Analoya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
