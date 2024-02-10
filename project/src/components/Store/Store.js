import { makeObservable, observable, action } from "mobx";
import { addService } from "./Server";



class DataStore {
   
    services = [];
    meetings=[];
    isLogin = false;
    isMeeting=true;
    sortMeetingByDate=[];
    newform = {
        id: "514328762",
        name: "BDSK",
        address: "Baki 36 Jerusalem",
        phone: "02-50050000",
        owner: "Shalvi Kop",
        description: "Was founded in 1988 and is one of the accounting firms in Israel"
    
    };



    constructor() {
        makeObservable(this, {
            isLogin: observable,
            isMeeting:observable,
            services: observable,
            meetings:observable,
            newform: observable,
            sortMeetingByDate:observable,
            setServices: action,
            addService: action,
            setIsLogin: action,
            updateForm: action,
            setMeetings:action,
            addMeeting:action,
            setIsMeeting:action,
        })
    }

    setServices = (data) => {
      
        if (Object.keys(data).length === 0) {
          defaultServices.map(s => addService(s))
          
      }
      else {
          this.services = data;
      }
       
    }

    addService = (service) => {
        this.services = [...this.services, service];
       
       
    }

    setMeetings=(dataMeet)=>{
        if (dataMeet.length>0){
            this.meetings = dataMeet;
            this.sortMeetingByDate=this.meetings.sort((a, b) => {
              const dateA = new Date(`${a.dateTime}:00`);
              const dateB = new Date(`${b.dateTime}:00`);
            
              if (dateA < dateB) {
                return -1;
              } else if (dateA > dateB) {
                return 1;
              } else {
                return 0;
              }
            });
        }
    }
    addMeeting=(meet)=>{
        this.meetings=[...this.meetings,meet];
        this.sortMeetingByDate=this.meetings.sort((a, b) => {
            const dateA = new Date(`${a.dateTime}:00`);
            const dateB = new Date(`${b.dateTime}:00`);
          
            if (dateA < dateB) {
              return -1;
            } else if (dateA > dateB) {
              return 1;
            } else {
              return 0;
            }
          });
          
    }

    setIsLogin = (status) => {
       
        this.isLogin = status;
    }
    updateForm = (formData) => {
        
        if (Object.keys(formData).length) {
            this.newform = formData;
        }
    }

    setIsMeeting = (status) => {
        alert(status)
        this.isMeeting = status;
    }
}

export default new DataStore();
const defaultServices = [{
  name: "Financial Report",
  description: "Audit and financial reports for businesses",
  price: '700$',
  duration: 'two week',
},
{
  name: "Tax Department",
  description: "Providing professional advice",
  price: '450$',
  duration: '5 hour',
},
{
  name: "Government grants",
  description: "The firm has extensive experience in working with government ministries",
  price: '950$',
  duration: '1 week',
},{
name: "public government",
description: "BDSK is one of the leading firms in providing accounting services to government/public entities",
price: '700$',
duration: 'two week',
},
{
name: "Nonprofits",
description: "The largest sector in Israel in the field of non-profit organizations",
price: '450$',
duration: '5 hour',
},
{
name: "MMC",
description: "The largest MMC sector in Israel, lends to private companies defined as medium",
price: '950$',
duration: '1 week',
},
]
