import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  CommentOutlined,
} from "@ant-design/icons";


const ImageCarousel = ({ post }) => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <CarouselWrapper
      accessibility
      arrows
      nextArrow={<ArrowLeftOutlined />}
      prevArrow={<ArrowLeftOutlined />}
      // autoplay
      draggable
    >
      {post.image.map((v) => (
        <img
          className="imgimg"
          width="100vw"
          height={330}
          key={v.id}
          src={v.url}
        />
      ))}
    </CarouselWrapper>
  );
};

export default ImageCarousel;

const CarouselWrapper = styled(Carousel)`
  // display: flex;

  .imgimg {
    width: 100%;
  }
  // width: 100%;
  .slick-arrow {
    z-index: 1;
    display: block;
  }

  .slick-arrow.slick-prev {
    left: 10px;
    background-color: #fff;
    font-size: 32px;
    // background:{<ArrowLeftOutlined />;
    // color: black;
  }
  .slick-arrow.slick-next {
    right: 10px;
    background-color: #fff;
    // color: #fff !important;
  }

  .slick-track {
    display: flex;
  }
`;