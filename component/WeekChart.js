import React, { useRef, useEffect } from "react";
import ChartChart from "chart.js/auto";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Card } from "antd";

const WeekChart = ({ weekRecord, weekBikeRecord }) => {
  const options = {
    plugins: {
      title: {
        display: false,
        text: "최근 일주일 운동통계",
      },
      legend: {
        position: "top",
        align: "end",
      },
    },
    responsive: true, // 반응형 설정
    borderRadius: Number.MAX_VALUE,
    borderSkipped: false,
    maintainAspectRatio: false, // 반응형 자동 높이설정 off
  };

  const labels = ["월", "화", "수", "목", "금", "토", "일"];

  const data = {
    labels,
    datasets: [
      {
        label: "라이딩",
        data: [300, 400, 500, 600, 700, 800, 900],
        backgroundColor: "rgb(53, 162, 235,0.8)",
      },
      {
        label: "러닝",
        data: [100, 800, 200, 400, 200, 200, 100],
        backgroundColor: "rgb(75, 192, 192,0.8)",
      },
    ],
  };

  return (
    <Container>
      <Card>
        <Bar data={data} options={options} height={300} />
      </Card>
    </Container>
  );
};

export default WeekChart;

const Container = styled.div`
  width: 70%;
  height: 300px;

  .ant-card {
    border-radius: 12px;
    padding: 0 !important;
  }

  .ant-card-body {
    width: 100%;
    padding: 12px;
  }
`;