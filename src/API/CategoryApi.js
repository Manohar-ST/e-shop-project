import {useState, useCallback, useEffect} from 'react'
import axios from 'axios'

const url = `https://dummyjson.com`

//custom hook
function useCategoryApi() { //useCategoryApi is a custom hook which is created
    const [category,setCategory] = useState([])

    const readCategories = async () => {
        const out = await axios.get(`${url}/products/categories`);
        console.log("category = ",out);
        setCategory(out.data)
    }

    const initValue = useCallback(() => {
        readCategories()
    },[])

    useEffect(() => {
        initValue()
    },[initValue])

    return {
        category: [category,setCategory]
    }
}

export default useCategoryApi
