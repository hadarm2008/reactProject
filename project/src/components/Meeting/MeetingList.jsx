import { observer } from 'mobx-react';
import { useEffect} from 'react';
import {getMeetings}from '../Store/Server.js'
import dataStore from '../Store/Store.js';
import Meeting from './Meeting.jsx';

const MeetingList = (observer(() => {
   useEffect(()=>{ 
    if(!dataStore.meetings.length>0)
    getMeetings()
   },[])
    return (
        <>      
     <div id='meetingWrap'>
             
  {dataStore.sortMeetingByDate.map((meeting, index) => {
              return(
              <Meeting key={index}
              serviceType={meeting.serviceType}
              dateTime={meeting.dateTime}
              clientName={meeting.clientName}
              clientPhone={meeting.clientPhone}
              clientEmail={meeting.clientEmail}
              />)
         })}</div>
            
        </>
    )
}))

export default MeetingList
