import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';

function Card({ request_id, driver_name, source_address, destination_address,ride_req,phone,email, onDelete }) {
  const navigate = useNavigate();
  const cardColor = ride_req === 'Pending' ? 'burlywood' :ride_req === 'Accepted'? 'lightseagreen':'indianred';
  const [button,setButton]=useState(false)
  const handleDelete = ()=>{
      onDelete(request_id);
  }
  return (
    
    <li className="ride" style={{ backgroundColor: cardColor }}>
      <div>
      <button
          id="highest-priority-class"
          onClick={handleDelete}
        >❌✖️</button>
        <ul>
          <li>Driver Name: <strong>{driver_name}</strong></li>
          <li>Starting Location: <strong>{source_address}</strong></li>
          <li>Destination Location: <strong>{destination_address}</strong></li>
          <li>Request Status: <strong>{ride_req}</strong></li>
          {ride_req === 'Accepted' && (
            <button onClick={() => setButton(!button)}>Show Details</button>
          )}
          {button === true && (
            <>
              <li>Email Address: <strong>{email}</strong></li>
              <li>Phone Number: <strong>{phone}</strong></li>
            </>
          )}
        </ul>
      </div>
    </li>
  );
}

export default Card;
