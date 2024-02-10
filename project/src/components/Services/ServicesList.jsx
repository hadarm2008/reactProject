import { observer } from 'mobx-react';
import { useEffect} from 'react';
import { getServices } from '../Store/Server.js'
import dataStore from '../Store/Store.js';
import Service from './Service.jsx';


const ServicesList = (observer(() => {
    useEffect(() => {
        if (!dataStore.services.length > 0)
            getServices()
    }, [])
    return (
        <>
            <div id='serviceWrap' className='sl'>
                {dataStore.services.map((service, index) => {
                    return (<Service key={index}
                        name={service.name}
                        description={service.description}
                        price={service.price}
                        duration={service.duration}
                    />)
                    
                })}</div>
        </>
    )
}))

export default ServicesList
