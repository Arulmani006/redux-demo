import { useState } from 'react';
import './Roombooking.css';
import { FaUsers,FaChild,FaBed,FaUser,FaMinusCircle,FaPlusCircle } from "react-icons/fa";

const Roombooking = ()=>{
    const [roomCount, setRoomCount] = useState(1);
      const [adultCount, setAdultCount] = useState(1);
      const [childrenCount, setChildrenCount] = useState(3);
    
      let hasPrevRoom = roomCount > 1;
      let hasNextRoom = roomCount < 5;
    
      let hasPrevAdult = adultCount > 1;
      let hasNextAdult = adultCount < 20;
    
       let hasPrevChildren = childrenCount > 0;
      let hasNextChildren = childrenCount < 15;
    
      let total = adultCount + childrenCount;
      let maxPersons = total < 20;

      // state = {
      //   disabled:true
      // }
    
      function handleRoomDecreaseClick() {
        if (hasPrevRoom) {
         if(total>(4*(roomCount-1))){
              let extra =  total - (4*(roomCount-1));
           
      if (extra <= childrenCount && childrenCount >= 4){
            console.log(childrenCount, extra)
              setChildrenCount(n => n -4);
       } else if(extra >= childrenCount){
            setChildrenCount(n => n -childrenCount);
       }
           if(extra - childrenCount > 0){
        setAdultCount(n => n - (extra - childrenCount))
       }
           }
         setRoomCount(roomCount - 1);
      }
      }
      function handleRoomIncreaseClick() {
        if (hasNextRoom) {
          if(adultCount > roomCount){
          setRoomCount(roomCount + 1);
          }else{
          setRoomCount(roomCount + 1);
          setAdultCount(adultCount + 1);
          }
      }
        }
        function handleAdultDecreaseClick() {
        if (hasPrevAdult) {
            if(roomCount > adultCount-1){
                       setRoomCount(roomCount - 1);
             
               }
             if (((roomCount-1)* 4) < total-1){
               let extra  = total - ((roomCount-1)* 4);
    
      if (extra <= childrenCount && childrenCount >= 4){
            console.log(childrenCount, extra)
             setChildrenCount(n => n -4);
                  } else if(extra <= childrenCount){
                    setChildrenCount(n => n -extra);
      } else if(extra >= childrenCount){
            setChildrenCount(n => n -childrenCount);
       }
           if(extra - childrenCount > 0){
             if(adultCount > 5){
        setAdultCount(n => n - (extra - childrenCount))
               }else{
                    setAdultCount(n => n - ((extra - childrenCount)-1))
               }
       }          
          // setAdultCount(adultCount-1);
             
          } else {
             
          setRoomCount(roomCount - 1);
          setAdultCount(adultCount-1);          
          }
          }
      }
      function handleAdultIncreaseClick() {
        if (hasNextAdult && total < 20 ) {
          if (total+1 > (roomCount * 4)){
          setRoomCount(roomCount + 1);
          setAdultCount(adultCount+1);
            } else {
                  setAdultCount(adultCount+1);
            }
        }
      }
      function handleChildrenDecreaseClick() {
        if (hasPrevChildren) {
             if (((roomCount-1)* 4) < total-1){
          setChildrenCount(childrenCount - 1);
          } else {
          setRoomCount(roomCount - 1);
          setChildrenCount(childrenCount - 1);
          }
          //setAdultCount(adultCount-1);
        }
      }
      function handleChildrenIncreaseClick() {
        if (hasNextChildren && total < 20 ) {
          if(total+1 > (roomCount * 4)){
            if(roomCount+1 !== adultCount){
                setAdultCount(adultCount+1);
            }
          setRoomCount(roomCount + 1);
          setChildrenCount(childrenCount + 1);
            }else{
                  setChildrenCount(childrenCount + 1);
            }
        }
      }
      return (
        <>
        
        
<div className='primary'>
<h3><span className='Decbutton'><FaUsers/></span> Choose Number of <span className='Decbutton'>people</span> </h3>
<table className='tb'>
  <tr className='row' >
    <td className='r'><span className='Decbutton'><FaBed/> </span> &nbsp; &nbsp; ROOMS </td><td padding-left='90%'> <span className='Decbutton' 
            onClick={handleRoomDecreaseClick}
            disabled={!hasPrevRoom}><FaMinusCircle/>
          </span>&nbsp;
          &nbsp;{roomCount}&nbsp;
          <span className='Incbutton'
         
            onClick={handleRoomIncreaseClick}
            disabled={!hasNextRoom}><FaPlusCircle/>
          </span>
    </td>
    
  </tr>
  <tr className='row'>
    <td className='r'><span className='Decbutton'><FaUser/></span >  &nbsp; &nbsp; ADULTS </td><td padding-left='90%'><span className='Decbutton'
            onClick={handleAdultDecreaseClick}
            disabled={!hasPrevAdult}>
            <FaMinusCircle/></span>&nbsp;
            &nbsp;{adultCount}&nbsp;
          <span className='Incbutton'
            onClick={handleAdultIncreaseClick}
            disabled={!hasNextAdult || !maxPersons}><FaPlusCircle/>
          </span>
     </td>
  
  </tr>
  <tr className='row'>
    <td className='r'><span className='Decbutton'><FaChild/> </span> &nbsp; &nbsp; CHILDREN</td><td padding-left='90%'><span className='Decbutton'
            onClick={handleChildrenDecreaseClick}
            disabled={!hasPrevChildren}><FaMinusCircle/>
          </span> &nbsp;
          {childrenCount} &nbsp;
         <span className='Incbutton'
            onClick={handleChildrenIncreaseClick}
            disabled={!hasNextChildren || !maxPersons}><FaPlusCircle/>
          </span>
    
    </td>
    
  </tr>
</table>

</div>
        </>
      );
    
   

};

export default Roombooking;