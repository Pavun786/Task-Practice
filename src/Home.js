import { useState } from "react";
import SegmentModel from "./SegmentModel";


  
  function Home(){

    const [staus,setStatus] = useState(false)

      return(
         <div className="home-container">
        <div className="home-sub1">
        <button className="home-btn" onClick={()=> setStatus(!staus)}>Save Changes</button>
        </div>
        <div className={staus ? "home-sub2" : "model-close"}>
        <SegmentModel staus={staus} setStatus={setStatus}/>
        </div>
         </div>
      )
  }

  export default Home;