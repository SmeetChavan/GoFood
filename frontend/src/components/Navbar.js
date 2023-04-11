import { Link, useNavigate } from 'react-router-dom';
import {Badge} from 'react-bootstrap';

import { useCart } from '../context/CartContext';

function Navbar() {

    let data = useCart();

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();
        navigate('/login');

        alert("Logged out successfully!");
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">

                    <Link className="navbar-brand fs-2 p-3 text-slate-300 hover:text-red-400" to="/">GoFood</Link>

                    <div className="navbar-collapse">

                        <ul className="navbar-nav me-auto">
                            <li className="navbar-item mt-2">

                                <Link to="/" className='text-decoration-none fs-5 text-white'>Home</Link>

                            </li>
                            {localStorage.getItem("authToken") ?

                                <li>
                                    <Link className="nav-link fs-5 mx-3 text-slate-200 hover:text-blue-400" to="/myorders">My Orders</Link>
                                </li>
                                :
                                ""
                            }
                        </ul>

                        {(localStorage.getItem("authToken")) ?

                            <div className='flex'>
                                <Link to="/cart">
                                <span class="material-symbols-outlined cart-icon">shopping_cart</span>

                                    {data.length !== 0
                                    ? 
                                        <Badge pill bg="danger" className='cart-num'>{data.length}</Badge>
                                    :
                                        ""
                                    }

                                </Link>
                                <div className="btn bg-white text-danger mx-2 logOut" onClick={handleLogout}>LogOut</div>
                            </div>
                            :
                            <div className='flex'>
                                <Link className="btn bg-white text-success mx-2" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-2" to="/register">Sign Up</Link>
                            </div>
                        }


                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;