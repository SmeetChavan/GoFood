import { useState } from "react";

import { useCart, useDispatchCart } from "../context/CartContext";

function Card(props) {

    let [quan , setQuan] = useState(0);
    let [finalPrice , setFinalPrice] = useState(props.foodItem.price);

    let dispatch = useDispatchCart();
    let data = useCart();

    const handleIncre = () => {
        quan++;
        setQuan(quan);
        if(quan > 1){
            setFinalPrice(parseInt(finalPrice) + parseInt(props.foodItem.price));
        }
    }

    const handleDecre = () => {

        if(quan > 1){
            quan--;
            setQuan(quan);
            setFinalPrice(parseInt(finalPrice) - parseInt(props.foodItem.price));
        }
        else{
            setQuan(0);
            setFinalPrice(parseInt(props.foodItem.price));
        }

    }

    const handleAddCart = async () => {

        if(quan === 0){
            return alert("Add quantity!");
        }

        let check = false;
        let index = 0;

        for(const item of data){
            if(item.foodItem._id === props.foodItem._id){
                check = true;
                break;
            }
            index++;
        }

        if(check){

            await dispatch({type : "UPDATE" , foodItem : props.foodItem , quan : quan , finalPrice : finalPrice , index : index});

        }
        else{

            await dispatch({type: "ADD" , foodItem : props.foodItem , quan : quan , finalPrice : finalPrice });
        }
    }

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.foodItem.img} alt="..." style={{objectFit : "fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">Price: <b>&#8377;{finalPrice}</b></p>

                    {localStorage.getItem("authToken")

                    ? 
                    <div className="container w-">

                        <div className="quan bg-slate-400 rounded w-96">
                            <button className="btn" onClick={handleDecre}>-</button>
                            <span className="badge mx-2 fs-6 text-slate-200">{quan}</span>
                            <button className="btn" onClick={handleIncre}>+</button>
                        </div>

                        <hr />

                        <button className="btn btn-success addToCart w-76" onClick={handleAddCart}>Add to cart</button>


                    </div>
                    
                    : ""
                    }

                </div>
            </div>
        </>
    );


}

export default Card;