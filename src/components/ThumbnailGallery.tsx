import React from "react";

const ThumbnailGallery: React.FC = () => {
  return (
    <div className="d-flex justify-content-between mt-5">
      <div
        className="p-3 text-white flex-fill mx-1"
        style={{ backgroundColor: "#ffc107", minHeight: "100px" }}
      >
        Image 1
      </div>
      <div
        className="p-3 text-white flex-fill mx-1"
        style={{ backgroundColor: "#17a2b8", minHeight: "100px" }}
      >
        Image 2
      </div>
      <div
        className="p-3 text-white flex-fill mx-1"
        style={{ backgroundColor: "#6f42c1", minHeight: "100px" }}
      >
        Image 3
      </div>
    </div>
  );
};

export default ThumbnailGallery;
