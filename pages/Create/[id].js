import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import {
  Polyline,
  Marker,
  StreetViewPanorama,
  MarkerClusterer,
} from "@react-google-maps/api";
import {
  Form,
  Card,
  Table,
  Button,
  Slider,
  Switch,
  Row,
  Col,
  Input,
  Modal,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import wrapper from "../../store/configureStore";
import { ADD_TRACK_REQUEST, LOAD_CREATEMAP_REQUEST } from "../../reducers/map";
import axios from "axios";
import useInput from "../../hooks/useInput";

import { LOAD_LOGIN_REQUEST } from "../../reducers/user";
import styled from "styled-components"; // 추가

function createPath() {
  const { createMap } = useSelector((state) => state.map);

  const [createDistance, setCreateDistance] = useState(
    createMap.gpsData.distance[createMap.gpsData.distance.length - 1]
  );

  const [trackName, onChangeTrackName] = useInput("");
  const [trackDescription, onChangeTrackDescription] = useInput("");

  const [number, setNumber] = useState([
    0,
    createMap.gpsData.gps.coordinates.length - 1,
  ]);
  const [twoPolyline, setTwoPolyline] = useState([createMap.gpsData.gps.coordinates]);

  const [leftPath, setLeftPath] = useState({
    lat: createMap.gpsData.gps.coordinates[0][1],
    lng: createMap.gpsData.gps.coordinates[0][0],
  });
  const [rightPath, setRightPath] = useState({
    lat: createMap.gpsData.gps.coordinates[createMap.gpsData.gps.coordinates.length - 1][1],
    lng: createMap.gpsData.gps.coordinates[createMap.gpsData.gps.coordinates.length - 1][0],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_LOGIN_REQUEST,
    });
  }, []);

  useEffect(() => {
    setLeftPath({
      lat: createMap.gpsData.gps.coordinates[number[0]][1],
      lng: createMap.gpsData.gps.coordinates[number[0]][0],
    });
    setTwoPolyline([createMap.gpsData.gps.coordinates.slice(number[0], number[1])]);
    setCreateDistance(
      createMap.gpsData.distance[number[1]] - createMap.gpsData.distance[number[0]]
    );
    console.log("two", twoPolyline);
    console.log(number[0]);
  }, [number[0]]);
  useEffect(() => {
    setRightPath({
      lat: createMap.gpsData.gps.coordinates[number[1]][1],
      lng: createMap.gpsData.gps.coordinates[number[1]][0],
    });
    setCreateDistance(
      createMap.gpsData.distance[number[1]] - createMap.gpsData.distance[number[0]]
    );
    setTwoPolyline([createMap.gpsData.gps.coordinates.slice(number[0], number[1])]);
    console.log("three", twoPolyline);
    console.log(number[1]);
  }, [number[1]]);

  // const mapContainerStyle = {
  //   height: "500px",
  //   width: "600px",
  //   marginTop: 30,
  // };

  const mapContainerStyle = {
    height: "500px",
    width: "100%",
    marginTop: 30,
    borderRadius: 20,
  };

  const options = {
    strokeColor: "#348feb",
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [
      [
        { lat: 35.969997373905, lng: 128.45170755523503 },
        { lat: 35.985501427015464, lng: 128.40407191943035 },
        { lat: 35.89580489690752, lng: 128.62238368221892 },
      ],
    ],
    zIndex: 1,
  };

  const options111 = {
    strokeColor: "#d43b24",
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    //-27부터 호주 시작해서 점찍고 점찍고 한다
    paths: [
      [
        { lat: 35.969997373905, lng: 128.45170755523503 },
        { lat: 35.985501427015464, lng: 128.40407191943035 },
        { lat: 35.89580489690752, lng: 128.62238368221892 },
      ],
    ],
    zIndex: 1,
  };

  const change = (value) => {
    console.log("value", value);
    setNumber(value);
  };

  const createSuccess = () => {
    Modal.success({
      title: "경로만들기 성공",
    });
  };

  const storePath = [];
  const altitudes = [];

  var totalDistance = 0;

  const pathStore = () => {
    for (var i = number[0]; i < number[1] + 1; i++) {
      storePath.push(createMap.gpsData.gps.coordinates[i]);
      altitudes.push(createMap.gpsData.altitude[i].y);
    }
    totalDistance =
      createMap.gpsData.distance[number[1]] - createMap.gpsData.distance[number[0]];
    console.log(totalDistance, "al", altitudes);

    dispatch({
      type: ADD_TRACK_REQUEST,
      data: {
        trackName,
        totalDistance,
        // userId:createMap.track.user.userId,//나중에포스트 sns되면
        // name:createMap.track.user.name,//나중에 포스트Sns되면
        // desription:createMap.track.description,//나중에포스트sns되면
        // checkPoint:createMap.track.checkPoint//나중에포스트sns되면
        //더미
        userId: createMap.gpsData.user.userId,
        name: createMap.gpsData.user.name,
        description: trackDescription,
        checkPoint: [[1, 2]],
        //더미
        event: createMap.gpsData.event,

        gps: storePath,
        altitude: altitudes,
      },
    });

    createSuccess();
    window.location.href = "/myRecord";
  };

  return (
    // <div>
    //   <Row>
    //     <Col span={12}>
    //       <h1 style={{ fontSize: 40 }}>경로만들기</h1>
    //       <div>{createDistance}</div>
    //       <div style={{ marginLeft: 40 }}>
    //         <Slider
    //           range
    //           defaultValue={number}
    //           max={createMap.gps.coordinates.length - 1}
    //           onChange={change}
    //         />
    //       </div>

    //       <LoadScript googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE">
    //         <GoogleMap
    //           id="marker-example"
    //           mapContainerStyle={mapContainerStyle}
    //           zoom={16}
    //           center={{
    //             lat: createMap.gps.coordinates[
    //               createMap.gps.coordinates.length % 2
    //             ][1],
    //             lng: createMap.gps.coordinates[
    //               createMap.gps.coordinates.length % 2
    //             ][0],
    //           }}
    //         >
    //           <Marker
    //             position={leftPath}
    //             icon={{
    //               url: " http://maps.google.com/mapfiles/ms/icons/blue.png",
    //             }}
    //           ></Marker>
    //           <Marker position={rightPath}></Marker>

    //           <Polyline
    //             options={options}
    //             path={createMap.gps.coordinates.map((m) => ({
    //               lat: m[1],
    //               lng: m[0],
    //             }))}
    //           ></Polyline>
    //           <Polyline
    //             options={options111}
    //             path={twoPolyline[0].map((m) => ({
    //               lat: m[1],
    //               lng: m[0],
    //             }))}
    //           ></Polyline>
    //         </GoogleMap>
    //       </LoadScript>
    //     </Col>

    //     <Col span={12}>
    //       <Card style={{ marginTop: 150, borderRadius: 40, marginLeft: 90 }}>
    //         <Input
    //           style={{}}
    //           placeholder="경로이름을 입력해주세요"
    //           value={trackName}
    //           onChange={onChangeTrackName}
    //         />
    //         <Input.TextArea
    //           placeholder="경로내용을 입력해주세요"
    //           value={trackDescription}
    //           onChange={onChangeTrackDescription}
    //         />

    //         <Button onClick={pathStore}>경로만들기</Button>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>

    <div>
      <h1 style={{ fontSize: 40, marginLeft: 70 }}>경북대학교 한바퀴</h1>
      <Row>
        <Col span={12}>
          <LeftDiv>
            {/* <div style={{ marginLeft: 40 }}>
          <Slider
            range
            defaultValue={number}
            max={createMap.gps.coordinates.length - 1}
            onChange={change}
          />
        </div> */}
            <LoadScript googleMapsApiKey="AIzaSyCyttJXmotwzGJhLd0hnVDQ0TxOG-Uonwg">
              <GoogleMap
                id="marker-example"
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={{
                  lat: createMap.gpsData.gps.coordinates[
                    createMap.gpsData.gps.coordinates.length % 2
                  ][1],
                  lng: createMap.gpsData.gps.coordinates[
                    createMap.gpsData.gps.coordinates.length % 2
                  ][0],
                }}
              >
                <Marker
                  position={leftPath}
                  icon={{
                    url: " http://maps.google.com/mapfiles/ms/icons/blue.png",
                  }}
                ></Marker>
                <Marker position={rightPath}></Marker>

                <Polyline
                  options={options}
                  path={createMap.gpsData.gps.coordinates.map((m) => ({
                    lat: m[1],
                    lng: m[0],
                  }))}
                ></Polyline>
                <Polyline
                  options={options111}
                  path={twoPolyline[0].map((m) => ({
                    lat: m[1],
                    lng: m[0],
                  }))}
                ></Polyline>
                {createMap.track?createMap.track.map((m, index) => (
                  <Polyline
                    
                    options={{
                      strokeWeight: 5,                      clickable: true,
                      visible: true,
                      strokeColor: "#008000",
                      fillColor: "#008000",
                    }}
                    path={m.gps.coordinates.map((p) => ({
                      lat: p[1],
                      lng: p[0],
                    }))}
                  ></Polyline>
                )):null}
              </GoogleMap>
            </LoadScript>
            <SliderDiv
            // style={{ marginLeft: 40 }}
            >
              <Slider
                range
                defaultValue={number}
                max={createMap.gpsData.gps.coordinates.length - 1}
                onChange={change}
                style={{ marginTop: 40 }}
                tipFormatter={null}
              />
              {/* tipFormatter, style 추가 */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>출발</p>
                <p>도착</p>
              </div>
            </SliderDiv>
          </LeftDiv>
        </Col>
        <Col span={12}>
          <RightDiv>
            <div style={{ width: "65%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginBottom: 20,
                }}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/6933/6933236.png" />
                <h3 style={{ fontWeight: "bold" }}>도움말</h3>
              </div>
              <Row gutter={[16, 16]}>
                <Col span={12} style={{ borderRight: "grey" }}>
                  <p>출발점</p>
                  <img src="http://maps.google.com/mapfiles/ms/icons/blue.png" />
                </Col>
                <Col span={12}>
                  <p>도착점</p>
                  <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/2150/2150519.png" />
                  </div>
                </Col>
                <Col span={12}>
                  <p>기존 맵의 라인</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" />
                </Col>
                <Col span={12}>
                  <p>내가 만드는 맵의 라인</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/143/143505.png" />
                </Col>
              </Row>
            </div>
            <div style={{ marginTop: 25 }}>
              <TitleCard />
              <Card
                style={{
                  borderTopLeftRadius: 0,
                }}
                // hoverable
              >
                <FormWrapper>
                  <div>현재 측정중인 코스거리 : {createDistance}</div>
                  <Form.Item>
                    <Input
                      style={{ marginTop: 10, marginBottom: 20 }}
                      placeholder="경로이름을 입력해주세요"
                      value={trackName}
                      onChange={onChangeTrackName}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input.TextArea
                      style={{ marginBottom: 20 }}
                      placeholder="경로내용을 입력해주세요"
                      value={trackDescription}
                      onChange={onChangeTrackDescription}
                    />
                  </Form.Item>

                  <Button type="primary" onClick={pathStore}>
                    경로만들기
                  </Button>
                </FormWrapper>
              </Card>
            </div>
          </RightDiv>
        </Col>
      </Row>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await axios.get("http://13.124.24.179/api/gpsdata");

  var paths1 = posts.data.map((id) => ({
    params: { id: id._id },
  }));

  return {
    paths: paths1,
    // paths:[  { params: { id: '62256147dc2958292cb17110' } },],
    fallback: false,
  };
}

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_CREATEMAP_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default createPath;

const LeftDiv = styled.div`
  margin-left: 70px;
`;

const FormWrapper = styled(Form)`
  .ant-form-item {
    margin-bottom: 0 !important;
  }
`;

const SliderDiv = styled.div`
  .ant-slider-rail {
    background: #e1e1e1;
  }

  .ant-slider-track {
    background: #66b5ff;
  }
`;

const TitleCard = styled(Card)`
  width: 100% !important;
  height: 10px;
  background: #1890ff;
  border-top-right-radius: 9px !important;
  border-top-right-radius: 9px !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;

  // box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%) !important;
`;

const RightDiv = styled.div`
  width: 60%;
  position: relative;
  top: 31px;
  margin-left: 90px;

  .ant-card {
    width: 100%;
    border-radius: 7px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }

  img {
    width: 32px;
    height: 32px;
  }
`;