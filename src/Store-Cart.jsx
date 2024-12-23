
import {useSelector} from "react-redux";


function StoreCart() {


    const cart = useSelector(state => state.cart)

    return (
        <div className={'grid grid-cols-4 gap-y-3 place-items-center'}>
            {cart?.map((item,index)=>(
                <div key={index}>
                    <img src={item?.image} alt={""} width={"120px"} height={"50px"}
                         className={'object-contain border-8 border-gray-200'}/>
                </div>
            ))}
        </div>
    );
}

export default StoreCart;