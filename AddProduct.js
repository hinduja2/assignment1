import React, { useState } from 'react'

export default function AddProduct(props) {
    const [products , setProducts] = useState ({products:"", brand:"", quantity:"", price:"", Actions:""})

    let onsubmit = (event) => {
        event.preventDefault();
        props.saveproducts(products)
        setProducts({
            products:"",
            brand:"", 
            quantity:"", 
            price:"", 
            Actions:""
        })
    }

    // Write Your Code Here

    function handleProductNameChange(event) {
            event.preventDefault();
            var eleName = event.target.name;

            setProducts({ ...products, [eleName]:event.target.value })
        }
    

    function handleBrandChange(e){
        // Write Your Code Here
    }

    function handleQuantityChange(e) {
        // Write Your Code Here

    }

    function handlePriceChange(e) {
        // Write Your Code Here

    }

    function handleFormSubmit(e) {
        // Write Your Code Here
    }

    return (
        <div>
            {/* Write Your Code Here */}
           <input name='ProductName' type="text" placeholder="Enter ProductName" value={products.ProductsName} onChange={handleProductNameChange}></input>
           <input name='Brand' type="text" placeholder="Enter Brand" value={products.Brand} onChange={handleProductNameChange}></input> 
           <input name='Quantity' type="text" placeholder="Enter Quantity" value={products.Quantity} onChange={handleProductNameChange}></input> 
           <input name='Price' type="text" placeholder="Enter Price" value={products.Price} onChange={handleProductNameChange}></input> 
           <input name='Actions' type="text" placeholder="Enter Actions" value={products.Actions} onChange={handleProductNameChange}></input>
           <br></br>
           <button onClick={onsubmit}>Save</button> 


        </div>
    )
}