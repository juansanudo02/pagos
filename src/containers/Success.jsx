import React,{ useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css'
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {

  const { state } = useContext(AppContext)
  const { buyer } = state
  const location = useGoogleAddress(buyer[0].address)
   return(
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name},Gracias por tu compra`}</h2>
        <span> Tu pedido llegaráen 3 dias a tu direccion:</span>
        <div className="Success-map">
         <Map data={location}/>

          Google Maps
        </div>
      </div>
    </div>
  )
};

export default Success;
