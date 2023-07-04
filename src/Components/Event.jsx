import axios from "axios";
import { useEffect, useState } from "react";

const Event = () => {
  const [data, setData] = useState([]);
  const [searchEvent, setSearchEvent] = useState('');

  const showEvent = () => {
    axios.get('https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    showEvent();
  }, []);

  const filteredData = data.filter((item) =>
    item?.title?.toLowerCase().includes(searchEvent.toLowerCase())
  );

const filterPet = ()=>{
    const pet = data.map((pets,index)=>(
        <h2 key={index}>{pets.category}</h2>
        
    ))

    return(console.log(pet))
}



  return (
    <div className="event p-10">
      <input className="p-3 rounded-md border border-slate-900"
        type="text"
        value={searchEvent}
        placeholder="search"
        onChange={(e) => {
          setSearchEvent(e.target.value);
        }}
      />

    
        <div>
            <button onClick={filterPet} className="text-white bg-slate-900 p-2 rounded-md my-4">Pets Allowed</button>
        {filteredData.map((item, index) => (
          <div key={item.id}>
            <div className="flex gap-4 text-xl border border-slate-700 p-2">
                <p>{index + 1}</p>
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
        </div>
        
        <div>
        </div>
      </div>
  );
};

export default Event;