import React from 'react';

function Navbar() {
    return (
        <div className={'flex flex-row justify-center '}>
            <div className="text-red-500 flex gap-5">
                <a href={"/"}>Home</a>
                <a href={"/Cart"}>Cart</a>


            </div>

        </div>
    );
}

export default Navbar;