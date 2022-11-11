import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

    const [product, setProduct] = useState()

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res =>
                setProduct(res.data)
            )
    })



    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res =>
                setPost(res.data.products)
            )
    })

    console.log(product)

    return (
        <div>
            <h4>Product Details</h4>
            {/* <div>
                <p>Product Name :  {product.title}</p>
            // </div> */}
            <h4>Related Product</h4>
            <div className="App" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {post.slice(0, 4).map(p => <div key={p.id} >
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
        </div>
    )
}

export default Details
