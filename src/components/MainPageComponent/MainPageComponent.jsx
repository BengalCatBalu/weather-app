import React, { useState } from "react";
import { Row, Col, Card, Pagination, Button } from "antd";
import "./index.css"; // Импортируйте ваш CSS файл
import { Image, Typography } from "antd";
import img from "/image.jpg";
import { GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const MainPageComponent = () => {
  const [ellipsis, setEllipsis] = useState(true);
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
      <div className="left">
        <Title>Welcome to my WeatherApp! 🌧️</Title>
        <Title level={2}>Technologies Used 💻</Title>
        <Paragraph>
          <ul className="txt">
            <li>
              <Text>ReactJs</Text>
            </li>
            <li>
              <Text>OpenWeather API</Text>
            </li>
            <li>
              <Text>Ant Design</Text>
            </li>
            <li>
              <Text>Recharts Data Visualization</Text>
            </li>
          </ul>
        </Paragraph>
        <Title level={2}>Get Involved 🤝</Title>
        <Paragraph className="txt">
          This project is open-source and we welcome contributions. If you're
          interested in contributing or have any suggestions, feel free to check
          out the GitHub repository.
        </Paragraph>
        <Button
          type="primary"
          icon={<GithubOutlined />}
          style={{ backgroundColor: "#78bedc" }}
        >
          GitHub
        </Button>
      </div>
      <Image
        src={img}
        width={"35%"}
        height={"auto"}
        style={{ borderRadius: "1rem" }}
        className="img"
      />
    </div>
  );
};
