import React from "react";
import { Link } from "react-router-dom";

// Data that we'll need:
  // - background image: thumb_image_url
  // - logo
  // - description: description
  // - id: id

export default function(props) {
    const { id, description, thumb_image_url, logo_url } = props.item;
  return (
    <div>
      <img src={thumb_image_url} />
      <img src={logo_url} />
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}