import { useCart, useDispatchCart } from "../context/CartContext";

function Cart() {

    let data = useCart();

    let dispatch = useDispatchCart();

    let totalAmount = data.reduce((total, food) => parseInt(total) + parseInt(food.finalPrice), 0);

    const handleCheckout = async () => {

        const email = localStorage.getItem("email");

        const response = await fetch("/orders" , {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: email,
                data: data,
                total: totalAmount,
            })
        });

        if(response.ok){

            dispatch({type: "CHECKOUT"});
            return alert("Checkout successfull!");
        }

        return alert("Failed to checkout");
    }

    return (

        <>
            <div className="container mt-5 table-responsive table-responsive-sm table-responsive-md">
                {
                data.length === 0 
                ?
                    <div className="text-center text-4xl overflow-hidden">Cart is Empty!</div>
                :
                    <>
                    <table className="table table-hover">

                        <thead className="text-success text-xl">

                            <tr>

                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Amount</th>
                                <th scope="col"></th>

                            </tr>

                        </thead>

                        <tbody>

                            {data.map((food, index) => (


                                <tr className="text-lg">
                                    <th scope="row">{index + 1}</th>
                                    <td>{food.foodItem.name}</td>
                                    <td>{food.foodItem.price}</td>
                                    <td>{food.quan}</td>
                                    <td>{food.finalPrice}</td>
                                    <td onClick={async() =>{
                                        await dispatch({type: "DELETE" , index : index});
                                    }}><span class="material-symbols-outlined hover:cursor-pointer">delete</span></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <div className="text-3xl text-center">Bill: &nbsp;<b>&#8377; {totalAmount}\-</b></div>

                    <button className="btn btn-primary text-center block w-56 m-auto mt-3" onClick={handleCheckout}>Checkout</button>
                    </>
                }
            </div>
        </>

    );

}

export default Cart;