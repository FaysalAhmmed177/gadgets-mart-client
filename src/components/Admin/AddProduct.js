import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
      const eventData = {
          name: data.name,
          model: data.model,
          price: data.price,
          imageURL: imageURL
      };
       
        const url = `https://banana-crisp-28043.herokuapp.com/addProduct`;
        console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => {
            console.log('server side response', res);
            
        });
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ef066363ea457d07cc1dcfecbbbdf89d');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Product Name</label>
                <input name="name" className="form-control w-50" placeholder="Enter Name" ref={register} />
                <br />
                <label htmlFor="model">Product Model</label>
                <input name="model" className="form-control w-50" placeholder="Enter quantity" ref={register} />
                <br />
                <label htmlFor="price">Add Price</label>
                <input name="price" className="form-control w-50" placeholder="Enter price"  ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br /><br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;