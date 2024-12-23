// import React from 'react';
import {useDispatch} from "react-redux"
import {addCart} from "../features/CartSlice.js";

function Navbar() {
    const dispatch = useDispatch();
    return (
        <div className={'flex flex-row justify-center '}>
            <div className="text-red-500 flex gap-5">
                <a href={"/"}>Home</a>

                <div className={'flex'}>
                    <div><a  href={"/Cart"}>Cart</a></div>
                    <div className={'bg-red-300 flex  relative rounded-full'}>{dispatch(addCart)}</div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;