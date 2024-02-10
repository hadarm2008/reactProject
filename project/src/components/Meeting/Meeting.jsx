import { observer } from 'mobx-react';
import { Card, CardContent, Typography } from '@material-ui/core';
import logosmall from'../../image/logosmall.jpg'

const Meeting = (observer(({serviceType,dateTime,clientName,clientPhone,clientEmail}) => {

    function getColorClass(date) {
      const currentDate = new Date();
      const meetingDate = new Date(date);
      currentDate.setHours(0, 0, 0, 0);
      meetingDate.setHours(0, 0, 0, 0);
      const diffInDays = Math.floor((meetingDate - currentDate) / (1000 * 60 * 60 * 24));
      if (diffInDays === 0) {
        return 1; // Today's date
      } else if (diffInDays <= 7) {
        return 2; // Within the next week
      } else {
        return 3; // Further away
      }
    }
    return (
        <>
        <div className='cardMeet' style={{backgroundColor: `${getColorClass(dateTime) === 1? 'red'
           :getColorClass(dateTime)===2?'orange':'green'}`}}>
          <Card className='meet'>
             <img src={logosmall} alt="image" className='imgMeet'   />
         <CardContent>
        <Typography variant="h5" component="h2">
        {serviceType}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
        <p>{dateTime} </p>
        </Typography>
        <Typography variant="body2" component="p">
            <p>{clientName}</p>
            <p>{clientPhone}</p>
            <p>{clientEmail}</p>
        </Typography>
      </CardContent>
    </Card>
                  </div>            
        </>
    )
}))

export default Meeting
