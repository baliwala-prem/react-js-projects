import { useState } from 'react'
import './App.css';
function App(props) {

  return (
    <>
      <div className="container">
        <div className="card">

          <video className="profile-video" autoplay muted loop>
            <source src="/src/videoMp4/video.mp4" type="video/mp4" />
          </video>

          <h1>{props.name}</h1>

          <p>
            {props.description}
          </p>
          <p>
            {props.age}
          </p>

          <button className="btn">
            View Profile
          </button>

        </div>
        
      </div>
      
    </>
  )
}


export default App;
