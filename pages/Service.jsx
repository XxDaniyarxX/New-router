import { useState, useEffect } from 'react';
import apiClient from '../src/axios/apiClient.js';

export default function Service() {
  const [count, setCount] = useState(1);
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');


  async function GetProduct() {
    try {
      const res = await apiClient.get(`/carts/${count}`);
      setCards(res.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  async function GetUser() {
    try {
      const res = await apiClient.get(`/users`);
      console.log(res.data);
      setUsers(res.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetProduct();
    GetUser();
  }, [count]);

  return (
    <div>
      {count} <br />
      {title} <br />
      <button style={{ width: '100px' }} onClick={() => setCount(count + 1)}>click</button>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <div style={{width: '820px', display: 'flex', margin: '0 auto', gap: '20px'}}>
        {cards.map((item) => (
          <div key={item.id} style={{width: '400px', textAlign: 'center', border: '1px solid black'}}>
            <img width={200} src={item.thumbnail} alt=""/>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        width: '1100px',
        gap: '30px',
        margin: '50px auto',
        flexWrap: 'wrap',
      }}>
        {users.map((item, index) => (
          <div key={index}>
            <h3>{item.firstName}</h3>
            <h3>{item.lastName}</h3>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}