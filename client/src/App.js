import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res =>
        setPost(res.data.products)
      )
  })

  console.log(post)

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {post.map(p => <div key={p.id} >
        <Link to={`/details/${p.id}`}>
          <div className="card">
            <img src={`${p.thumbnail}`} alt="" />
            <h5>{p.title}</h5>
            <h6>{p.price}</h6>
            <div className='button'>
              <button>Add to Cart</button>
              <button>Add to Wishlist</button>
            </div>
          </div>
        </Link>
      </div>)}
    </div>
  );
}

export default App;
