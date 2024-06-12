import React, { useState } from 'react';
import List from './List';

const App = () => {

    const [input, setinput]=useState();

    const[items,setitems]=useState([]);


    const itemevent=(event)=>{
        setinput(event.target.value)
    }

    const add=()=>{
        setitems((olditems)=>{
            return [...olditems,input]
        });

        setinput("");
    }

    const deleteitems=(id)=>{

        setitems((olditems)=>{
            return olditems.filter((arrelem,index)=>{
                return index!==id;
            })
        })

    }

    return(
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type='text' placeholder='Add a Items' onChange={itemevent} value={input}/>
            <button onClick={add}>+</button>
            <ol>
                {items.map((itemval, index)=>{
                    return (
                        <List key={index} id={index} text={itemval} onSelect={deleteitems}

                        />
                    );
                })}
            </ol>
        </div>
    </div>
    </>

    );

}

export default App;