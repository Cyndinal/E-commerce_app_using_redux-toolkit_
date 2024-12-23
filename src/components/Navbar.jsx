import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Navbar() {
    const select = useSelector(state => state.cart)

    return (

            <div className={'bg-dark-blue-500 flex align-center justify-center gap-y-5 '}>
                <nav className="flex gap-x-5 m-10">

                    <div><Link to={"/"}>Home</Link></div>

                    <div className={'flex'}>
                        <div><Link to={"/cart"}>Cart</Link>
                            <div className={'bg-red-400 relative float-right rounded-full'}>{select && select.length}</div>
                        </div>
                    </div>

                </nav>


            </div>

    );
}

export default Navbar;