import './AddPage.css'
import MainTopbar from '../MainTopbar/MainTopbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
    const [foods, setFoods] = useState([]);
    const [newFood, setNewFood] = useState('');
    const navigate = useNavigate();

    const placeholder = () => {
        if (foods.length === 0) {
            return (
                <div style={{display: 'flex'}}>
                    <div className='food-item-temp'>Eggs 
                        <button className='delete-btn-temp'><i className="fa-solid fa-x"></i></button>
                    </div>
                    <div className='food-item-temp'>Pork 
                        <button className='delete-btn-temp'><i className="fa-solid fa-x"></i></button>
                    </div>
                    <div className='food-item-temp'>Banana 
                        <button className='delete-btn-temp'><i className="fa-solid fa-x"></i></button>
                    </div>
                </div>
                
            );
        }
    }
    const handleDelete = (index) => {
        const newFoods = foods.filter((_, i) => i !== index);
        setFoods(newFoods); 
    }


    const foodsHTML = foods.map((food, index) => {
            return (
                <div key={index} className='food-item'>{ food }  
                    <button className='delete-btn' onClick={() => handleDelete(index)}><i className="fa-solid fa-x"></i></button>
                </div>
            );
    })

    const handleChange = event => {
        setNewFood(event.target.value);
      };
    
    const handleNewFood = () => {
        if (newFood) {
            setFoods(foods => [...foods, newFood.trim()]);
            setNewFood('');
        }
    }

    const handleCompute = () => {
        if (foods.length > 0) {
            const ingredientInfo = [
                {name: 'kale1', info: `A compiler is a tool that takes code as input and produces error messages. As a side-effect, it may produce an executable.
                A compiler is a tool that takes code as input`},
                {name: 'kale2', info: `A compiler is a tool that takes code as input and produces error messages. As a side-effect, it may produce an executable.
                A compiler is a tool that takes code as input`},
                {name: 'kale3', info: `A compiler is a tool that takes code as input and produces error messages. As a side-effect, it may produce an executable.
                A compiler is a tool that takes code as input`},
                {name: 'kale4', info: `A compiler is a tool that takes code as input and produces error messages. As a side-effect, it may produce an executable.
                A compiler is a tool that takes code as input`},
            ];
            const mealInfo = {score: 99, info: `A compiler is a tool that takes code as input and produces error messages. As a side-effect, it may produce an executable.
            A compiler is a tool that takes code as input`};
            navigate('/summary', {state: {ingredientInfo,  mealInfo}});
            setFoods([]);
            setNewFood('');
        }
    }

    const handleNewFoodEnter = (event) => {
        if (event.key === 'Enter') {
            handleNewFood();
        }
    }
   

    return (
        <>
            <MainTopbar></MainTopbar>
            <div className="container">
                <div className="group">
                    <h1>Add your ingredients</h1>
                    <div>
                        <input type="text" placeholder='try: kale' onChange={handleChange} onKeyPress={handleNewFoodEnter} value={newFood}/> 
                        <button onClick={handleNewFood}>Add</button>
                    </div>
                    <div className="food-list-container">
                        <div className="food-flex-container">
                            {placeholder()}
                            {foodsHTML}
                        </div>
                        <button className='compute-btn' onClick={handleCompute}>Compute</button>
                    </div> 
                </div>
            </div>
        </>
    );
}


export default AddPage;
