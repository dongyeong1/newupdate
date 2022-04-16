import React from "react";
import { Menu } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  CompassOutlined,
  CarryOutOutlined,
  SearchOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const MenuMenu = () => {
  const category = [
    {
      title: "홈",
      link: "/",
      icon: <HomeOutlined />,
    },
    // {
    //   title: "내 프로필",
    //   link: "/dashboard",
    //   icon: <UserOutlined />,
    // },
    {
      title: "종합 운동기록",
      link: "/myRecord",
      icon: <PieChartOutlined />,
    },
    {
      title: "운동경로 탐색",
      link: "/polylineTest",
      icon: <EnvironmentOutlined />,
    },
    {
      title: "내 운동목표",
      link: "/musclePurpose",
      icon: <ScheduleOutlined />,
    },
    {
      title: "유저탐색",
      link: "/userSearch",
      icon: <UserOutlined />,
    },
    {
      title: "설정",
      link: "/profileEdit",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <MenuWrapper mode="inline">
     
      
    {category.map((menu, index) => (
      <Menu.Item key={index} icon={menu.icon}>
        
         <a href={menu.link}>{menu.title}</a>
        
      </Menu.Item>
    ))}
  </MenuWrapper>
  );
};

const Space = styled.div`
  overflow: auto;
`;

const MenuWrapper = styled(Menu)`
  display: inline-block;
  position: relative;
  top: 3%;
  transition: all 0.2s;
  // background-color: rgba(255, 255, 255, 0.8);
  background: #467ada;
  // background: linear-gradient(to right, #66b5ff, #3fa3ff, #1890ff);
  color: #fff;
  border-right: none;
  margin-bottom: 10px;

  .ant-menu-item {
    min-width: 79px;
    height: 50px;
    padding: 0 28px !important;
    line-height: 58px;
  }

  .ant-menu-item a {
    color: none !important;
    // background: none !important;
  }

  .ant-menu-item-icon {
    color: #fff;
  }

  .ant-menu-title-content {
    height: 50px;
    line-height: 53px;
    font-weight: 700;
    padding-left: 15px;
    transition: none !important;
    transition: all 0.3s ease-out;
  }

  svg {
    font-size: 23px;
  }

  span {
    // margin: 0 10px;
    // padding-bottom: 10px;
  }

  .ant-menu-vertical,
  .ant-menu-item::after {
    // position: absolute;
    // top: 50;
    // left: 50%;
    // bottom: 0;
  }

  // a {
  //   color: #fff;
  // }
`;

export default MenuMenu;
