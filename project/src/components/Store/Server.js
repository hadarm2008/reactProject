import axios from 'axios';
import dataStore from './Store'
 import Swal from 'sweetalert2'
export async function getbusinessData() {
    const data = await axios.get('http://localhost:8787/businessData');
   
    dataStore.updateForm(data.data);
}

export async function setBusnes(data) {
   
    const res = await axios.put('http://localhost:8787/businessData', data);
    if (res.status === 200) {
        dataStore.updateForm(data);
       
        return 'success';
        
    }
    else {
        
        return 'failed';
       
    }
}


export async function addService(service) {
    try {
        const res = await axios.post('http://localhost:8787/service', service)
        if (res.status === 200) {
            console.log(res.status)
            dataStore.addService(service);
            console.log('addService success');
            return 'success';
        }
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            console.log('addService failed!');
          
        } else {
            console.log(error);
        }
    }
}


export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    
    dataStore.setServices(services.data);
}

export async function getMeetings() {
    const meetings = await axios.get('http://localhost:8787/appointments');
    
    dataStore.setMeetings(meetings.data);
}

export async function addMeeting(meeting) {
   try{
    const res = await axios.post('http://localhost:8787/appointment', meeting);
    alert(res.status)
    if (res.status === 200) {
        dataStore.setIsMeeting(true);
        dataStore.addMeeting(meeting);
        Swal.fire({
            title:"The appointment was successfully set",
            allowOutsideClick: false,
          });
        return 'success';
       
    }
   }
  
    catch (error) {
        dataStore.setIsMeeting(false);
        return 'failed';
        
    }
}
    

export async function handleLogin({name,password})
{
    try{
        const response=await fetch('http://localhost:8787/login',{
          method:'POST',
          body:JSON.stringify({name,password}),
          headers:{
            "Content-Type":"application/json",
          }
         })
         alert(response.status)
         if (response.status===200){
            console.log('success');
           
            dataStore.setIsLogin(true)
           
         }
         else{
           
           
            console.log('else failed')
            dataStore.setIsLogin(false)
            Swal.fire({
                title:"Try again",
                text: "Your username or password is incorrect",
               
                allowOutsideClick: false,
               
              }); 
         }
         } catch(error)
         {
            console.log('catch',error);
         }
        }