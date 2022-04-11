import React from 'react'
import Searchbar from './Searchbar'
import style from "./search.module.css"

const Search = () => {
  return (
    <>
       <div className={style.search}>
       <div className={style.searchHeading}>
     
         <img src="https://www.easemytrip.com/images/flight-img/home-fl-icn.png" width="42" height="19" alt="Flight"  />
         <h1> Search Lowest AirFare</h1>

       </div>
       <Searchbar/>
       
       <div>
       <div className={style.filter}>

<div className={style.bhaskar} >
  <input type="checkbox" />
  <p>Defence Force</p>
</div>
<div className={style.bhaskar}>
  <input type="checkbox" />
  <p>Students</p>
</div>
<div className={style.bhaskar}>
  <input type="checkbox" />
  <p>Senior Citizens</p>
</div>
<div className={style.bhaskar}>
  <input type="checkbox" />
  <p>Doctors & Nurses</p>
</div>
<div className={style.bhaskar}>
  <input type="checkbox" />
  <p>Train Waitlisted</p>
</div>
</div>
      
      </div>
      
     </div>
     
    </>
  )
}

export default Search
