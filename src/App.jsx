import './App.css'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {addCart} from "./features/CartSlice.js";
import Card from "./components/Card.jsx";
import {getProducts} from "./features/ProductSlice.js";
import Navbar from "./components/Navbar.jsx";

// import {getProductDataThunk} from "./features/ProductSlice.js";




function App() {
    const dispatch = useDispatch();
//     // const [products, getProducts] = useState([]);
//
    const productData = useSelector(state=>state.production);
//     console.log("productData", productData);
//
//
//     // runs each time the application executes/runs
    useEffect(() => {
        dispatch(getProducts());
    },[])
//
//
//
const addToCart = (product) => {
  dispatch(addCart(product));
  console.log("product", product);

}
  return (
      <div>
          <Navbar/>
          <div>

              {productData.loading && <p className={'flex items-center justify-center text-5xl text-green-500'}>Loading....</p>}
              {productData.error && <p>{productData.error.messages}</p>}

          </div>
          <section className={'grid grid-cols-4 gap-y-3 place-items-center'}>
              {productData.data && productData.data.map((product)=> (
                  <div key={product.id}>
                      <Card
                          // Title={product.title}
                          // Description={product.description}
                          Image_src={product.image}/>
                      <button
                          onClick={() => addToCart(product)}
                          className={'m-28'}>AddToCart
                      </button>
                  </div>
              )) }

              {/*{*/}
              {/*    productData.data.map((product) => (*/}
              {/*    <div key={product.id}>*/}
              {/*        <Card Image_src={product.image}/>*/}
              {/*        <button*/}
              {/*            onClick={()=>addToCart(product)}*/}
              {/*            className={'m-28'}>AddToCart</button>*/}
              {/*    </div>*/}
              {/*))*/}
              {/*}*/}

          </section>

      </div>

  )
}

export default App;
