import {useState, useEffect } from 'react';
import Map from './components/Map';

function App() {

const [ eventData, SetEventData ] = useState([]);
const [ loading, setLoading ] = useState([false]);

useEffect(() => {
  const fetchEvents = async () => {
    setLoading(true);
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
    const { events } = await res.json();

    SetEventData(events);
    setLoading(false);
  }


  fetchEvents();

  console.log(eventData)
}, []);

  return (
    <div>
      { !loading ? <Map eventData={eventData} /> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
