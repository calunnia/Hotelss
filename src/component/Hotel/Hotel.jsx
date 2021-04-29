import React,{useState} from 'react'
import Suscribe from '../Suscribe/Suscribe.jsx'

function Hotel({hotel}) {

const [show,setShow] = useState()
const [ suscribe,setSuscribe] = useState(false)


    return (
        <div className="hotel">
            {hotel.name}
            <div>
                <br/>
            <button onClick={ () => (setShow(!show) ) }> {show ? 'Show less': 'show more' } </button>
                <div >
                    { show 
                       
                         ? <p className="details">{hotel.city} <br/> {hotel.stars} 	&#9733;</p> 
                         : ''
                       
                    }

                                   {show
                                            ? <button onClick = {() => (setSuscribe(!suscribe))} >Required more info</button>
                                            :''

                                    }
                                    
                                            {
                                                suscribe
                                                        ? <p> <Suscribe/> </p>
                                                        : ''
                                            }
 
                                            
                 </div>
            </div>

        </div>
    )
}

export default Hotel
