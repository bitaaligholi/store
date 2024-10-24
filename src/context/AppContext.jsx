import { createContext, useContext, useState } from "react";
import Product from '../data/data';

export const AppContext = createContext({})


export function useAppContext() {
    
    if (AppContext) {
        return useContext(AppContext)
    }
}

function AppContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : []
    )
    const [search, setSearch] = useState('')
    const [selectedCompany, setSelectedCompany] = useState('') 
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedColor, setSelectedColor] = useState('')
    
    const filterItemsBySearch = Product.filter(item => item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)


    function filteredProducts(Product, search, selectedCompany, selectedCategory, selectedColor) {
        let filteredItems = Product;
        if (search) {
            filteredItems = filterItemsBySearch;
        } 
        if(selectedCompany){ 
            filteredItems = filteredItems.filter(x=>x.company===selectedCompany)
        }
        if(selectedCategory){ 
            filteredItems = filteredItems.filter(x=>x.category===selectedCategory)
        }
        if(selectedColor){ 
            filteredItems = filteredItems.filter(x=>x.color===selectedColor)
        }

        return filteredItems
    }

    const result = filteredProducts(Product, search, selectedCompany, selectedCategory, selectedColor)



    const addToCart = (product) => {
        const quantity = cartItems.find((elem) => elem.id === product.id)?.quantity;
        if (quantity === undefined) {
            setCartItems(prev => {
                return [...prev, { ...product, quantity: 1 }]
            })
        } else {
            setCartItems(cartItems.map(cart => cart.id === product.id ? { ...cart, quantity: cart.quantity += 1 } : cart))
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const Increase = (id) => {
        cartItems.map(item => {
            if (item.id === id) {
                return item.quantity += 1
            }
        })
        setCartItems([...cartItems])
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const Decreament = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
            }
            return item;
        }).filter(item => item.quantity > 0);
    
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    }
    return (
        <AppContext.Provider
            value={{ cartItems, search, setSearch, result, addToCart, Increase, Decreament , selectedCompany, setSelectedCompany, selectedCategory, setSelectedCategory, selectedColor, setSelectedColor}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;