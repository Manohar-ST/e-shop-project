import {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const url = `https://dummyjson.com`

function useProductsApi() {

    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    //states for the calculation of cart, subTotal, total,tax, delivery charges

    const[subTotal,setSubtotal] = useState(0)
    const [discount,setDiscount] = useState(0)
    const [gst,setGst] = useState(5)
    const [dc,setDc] = useState(50)

    const readProducts = async () => {
        const out = await axios.get(`${url}/products`)
        // console.log("products = ",out);
        setProducts(out.data.products)
    }

   const initValue = useMemo(() => (
    {value: [products,setProducts]}
   ))

    useEffect(() => {
        readProducts()
    },[])

    //Add product to cart
    const addToCart = async (data) => {
        //console.log('cart = ',product)

        //product exists is cart or not
        const check = cart.every(item => {
            return item.id !== data.id;
        });

        if(check){
            toast.success("Product added to the cart");
            setCart([...cart, {...data, quantity: 1}])
        } else {
            toast.warning("Product is already in the cart")
        }
    }

    return {
        products : initValue,
        cart: [cart,setCart],
        addToCart:addToCart,
        subTotal:[subTotal,setSubtotal],
        gst:[gst,setGst],
        dc:[dc,setDc],
        discount:[discount,setDiscount]
    }
}

export default useProductsApi
