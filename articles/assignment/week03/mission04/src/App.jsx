import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    let response = await fetch("https://reqres.in/api/users?page=2" , {
    headers : {
      'x-api-key': 'reqres-free-v1',
    }});
    let data = await response.json();
    console.log(data)
    setUser(data.data);
    };

    fetchData();
  },[])

  return (
    <div className="App">
      {user.map ((data)=> ( 
        <div key = {data.id}>
          <div className="user-card">
            <div className="info">
              <h3 className="name">{data.first_name} {data.last_name}</h3>
              <p className="email">{data.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
