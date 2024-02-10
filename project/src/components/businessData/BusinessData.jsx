import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { getbusinessData } from '../Store/Server.js';
import dataStore from '../Store/Store.js';
import logo3 from '../../image/logo3.jpg'

const BusinessData = observer(() => {
useEffect(()=>{
  getbusinessData()
 
},[])

  return (
    <>
    <div id='bigDivBusnessData'>
      <img src={logo3} alt="Image" className='image' />
      
      <div className='BusinessDetails'>
       
        <h3>{dataStore.newform.description}</h3>
        <h4> {dataStore.newform.address}       {dataStore.newform.phone}</h4>
        <h4>owner: {dataStore.newform.owner}</h4>
      </div>
    </div>
    </>
  )
})

export default BusinessData
