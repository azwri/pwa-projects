// import React, {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import video from './videos/WomanSculptsClayMusic_042009083.mp4';


function App() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   const fechData = async() =>{
  //     const result = await fetch('http://orangevalleycaa.org/api/videos')
  //       .then(response => response.json())
  //     setData(result)
  //   }
  //   fechData();
  // }, []);
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>

      {/* {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))} */}
      <div>
        <video src={video} controls height={200} />
      </div>

    </div>
  );
}

export default App;
