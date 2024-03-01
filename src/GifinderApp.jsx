import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifinderApp = () => {

    const [categories, setCategories] = useState([]);


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifinderApp</h1>

            <AddCategory onNewCategory={ onAddCategory} />

            { 
                categories.map( category => (
                    <GifGrid key={category} category={ category } />
                ))
            } 
            
        </>
    )
}
