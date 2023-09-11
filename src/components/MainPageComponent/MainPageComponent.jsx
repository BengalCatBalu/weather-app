import React, { useState } from "react";
import { Row, Col, Card, Pagination } from "antd";
import "./index.css"; // Импортируйте ваш CSS файл
import { Image } from "antd";
import img from "/image.jpg";
export const MainPageComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = 150;
  const cardsPerPage = 18;

  const allCards = Array.from(
    { length: totalCards },
    (_, i) => `Card ${i + 1}`
  );

  const currentCards = allCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="container">
      <div>That's weather dashboard</div>
      <Image src={img} width={"25%"} height={"auto"} />
    </div>
  );
};
