import { observer } from 'mobx-react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ssopyxigttjbcoaecbmw from '../../image/ssopyxigttjbcoaecbmw.webp'

const Service = (observer(({name,description,price,duration}) => {
    return (
        <>
           <div className='serviceCard'>
           <Card className='cardService'>
           <img src={ssopyxigttjbcoaecbmw} alt="image" className='imgService'   />
           <CardContent>
        <Typography variant="h5" component="h2">
       {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
        <p>{description} </p>
        </Typography>
        <Typography variant="body2" component="p">
            <p>{price}</p>
        </Typography>
        <Typography variant="body2" component="p">
            <p>{duration}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </>
    )
}))

export default Service
