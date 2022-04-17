import React, { useEffect, useState } from "react";
import { Calendar, Card, Alert,Button,Modal } from "antd";
import { moment } from "moment";
import styled from "styled-components";
import axios from "axios";
import { ALL_GOAL_REQUEST, LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { END } from "redux-saga";
import wrapper from "../store/configureStore";
import Purpose from "./purposeModal";
import { useSelector } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid'
import { useRef } from "react";
import Information from './purposeInformation'


// const [value, setValue] = useState(moment().format("2022-01-01"));

// const onSelect = (value) => {
//   setValue(value);
// };

// const onPanelChange = (value) => {
//   setValue(value);
// };

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

const musclePurpose = () => {

  const {goalpurpose,allPurpose}=useSelector((state)=>state.user)
  


  const calendarRef = useRef(null);

  // const [calendarEvent,setCalendarEvent]=useState([])
  const calendarEvent=[]
  if(allPurpose){
    for(var i=0; i<allPurpose.length; i++){
      if(allPurpose[i].event=='B'){
        var tdate=new Date(allPurpose[i].lastDate)
        calendarEvent.push({id:allPurpose[i].id,title:allPurpose[i].title,start:allPurpose[i].firstDate,end:tdate,color:'#0000FF',textColor:allPurpose[i].goalDistance})
      }else{
        console.log('qqqqq',allPurpose[i].lastDate)
        var tdate=new Date(allPurpose[i].lastDate)
        console.log('dddddd',tdate)
        calendarEvent.push({id:allPurpose[i].id,title:allPurpose[i].title,start:allPurpose[i].firstDate,end:tdate,color:'#008000',textColor:allPurpose[i].goalDistance})
        // calendarEvent.push({id:allPurpose[i].id,title:allPurpose[i].title,start:allPurpose[i].firstDate,end:allPurpose[i].lastDate,color:'#008000',textColor:allPurpose[i].goalDistance})
      }
     
      
    }
  }
 





//   useEffect(()=>{
//     console.log('asdasdsa')
// Modal.destroyAll();
//   },[goalpurpose])




  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  const openModal = () => {
    setIsModal((prev) => !prev);
    console.log(isModal);
  };


  const [information,setInformation]=useState({})
  const [informationModal, setInformationModal] = useState(false);
 

  const showInformationModal = () => {
    setInformationModal(true);
  };

  const openInformationModal = () => {
    setInformationModal((prev) => !prev);
  };
  const asd=(a)=>{
    showInformationModal()
    setInformation(a.event)
    console.log(a)
  }

  return (
    <Container>
      <Button type="primary" onClick={showModal} ghost>
            운동목표설정
            </Button>
            <Purpose isModal={isModal} openModal={openModal} setIsModal={setIsModal}/>
      <Title>나의 운동목표</Title>
      <Card>
        {/* <Calendar onPanelChange={onPanelChange} /> */}
        <FullCalendar
        eventClick={asd}
        events={calendarEvent}
      innerRef={calendarRef}
      plugins={[dayGridPlugin]}
      editable
      selectable
    />
     <Information informationModal={informationModal} openInformationModal={openInformationModal} setInformationModal={setInformationModal} information={information}/>
      </Card>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const Container = styled.div`
  // height: 100%;
  // padding: 0 100px;
  padding: 2% 5% 0 5%;

  .ant-picker-calendar-header {
    padding-top: 0;
  }

  .ant-picker-calendar-date {
    width: 90% !important;
  }

  .ant-picker-calendar-date-content {
    height: 70px !important;
  }

  .ant-card {
    width: 100%;
    border-radius: 9px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }

  .ant-card-body {
    padding: 28px 28px 0 28px;
  }
`;

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type:ALL_GOAL_REQUEST
    })

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default musclePurpose;
