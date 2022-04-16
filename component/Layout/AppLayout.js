import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import SideBar from "./SideBar";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const { Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const [isSide, setIsSide] = useState(false);

  const showSide = () => {
    setIsSide((prev) => !prev);
  };
  return (
    <div>
      <Layout>
        <SideBar isSide={!isSide} showSide={showSide} />
        <Layout
          style={{
            backgroundColor: "#467ada",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "#467ada",
              position: "fixed",
              top: 0,
              zIndex: 2,
            }}
          >
            <Header />
          </div>
          <Content
            style={{
              padding: "3% 0",
              //"2% 5%"
              background: "#fff",
              // marginTop: 70,
            }}
          >
            {children}
          </Content>
          <div
            style={{
              width: 50,
              height: 70,
              backgroundColor: "#467ada",
              position: "fixed",
              bottom: 0,
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: 50,
                height: 70,
                background: "#fff",
                borderBottomLeftRadius: 55,
              }}
            />
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
