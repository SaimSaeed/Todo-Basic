import React, { useState } from 'react'
import Logo from "../Assets/logo.png"
import { FaPlus } from "react-icons/fa6"
import { FaTrash, FaPenToSquare } from "react-icons/fa6"


function Todo() {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([

    ])


    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData("")
        }
    }



    const deleteItem = (id) => {
        const updatedItems = items.filter((element, index) => {
            return index !== id;
        })
        setItems(updatedItems)
    }
    const removeAll = ()=>{
        setItems([])
    }

    return (

        <div className='container'>
            <div className='box'>
                <figure>
                    <img src={Logo} alt="logo" className='logo' />
                    <figcaption className='heading'>Todo List</figcaption>
                </figure>
                <div className='inputContainer'>
                    <input type="text" className='input' placeholder='Add Todo...' value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
                    <FaPlus className='plus' onClick={addItem} />
                </div>

                <div >
                    {items.map((element, index) => {
                        return (
                            <div className='list-item' key={index}>
                                <span style={{ width: "46%", textAlign: "left" }}>{element}</span>
                                <span style={{ width: "46%", textAlign: "right" }}><FaPenToSquare />&nbsp;<FaTrash onClick={() => deleteItem(index)} /></span>
                            </div>

                        )



                    })}

                </div>
                <button className='btn' onClick={removeAll}>Remove All</button>
            </div>
        </div>




    )
}


export default Todo