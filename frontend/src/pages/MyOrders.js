import { useState, useEffect } from "react";

function MyOrders() {

    const [allOrders, setAllOrders] = useState("");

    const requestOrders = async () => {

        const response = await fetch("/myorders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
            }),
        })

        if (response.ok) {
            const json = await response.json();
            await setAllOrders(json.allorders);
        }
        else {
            console.error("Failed to get orders");
        }
    }

    let orders;
    let total;
    if (allOrders && allOrders.order_data !== null) {
        orders = allOrders.order_data
        total = orders.total
    }

    useEffect(() => {
        requestOrders();
    }, []);

    return (
        <>

            <div className="container">

                {orders ? <h3 className="text-center fs-1 mb-16 mt-10 font-bold">Your Total Spent : &nbsp;&#8377;{allOrders.total}/-</h3>: ""}

                {orders ? orders.map((order) => (

                    <div key={order.date} className="card-main text-center">

                        <p className="text-center fs-3">{order[0].date}</p>
                        <hr/>
                        <div>
                            {order.slice(1).map((item) => (
                                <div key={item.foodItem._id} className="mt-11 card-order">
                                    <p className="font-extrabold fs-4">{item.foodItem.name}</p>
                                    Quantity: <span className="fs-5 mr-12">{item.quan}</span>
                                    Bill: <span className="fs-5 font-extrabold">{item.finalPrice}/-</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )) : <h3 className="text-center mt-10">No orders yet!</h3>}

            </div>
        </>
    );
}

export default MyOrders;