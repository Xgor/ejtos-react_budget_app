import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses,budget,currency,dispatch,remaining  } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        event.preventDefault();
        let bud = event.target.value;
        if(bud != "")
        {
            bud = Math.min(event.target.value,30000);
        }
        else
        {
            bud = budget
        }
        bud = Math.max(bud, budget-remaining)
        
        console.log(remaining-budget)
        setNewBudget(bud);
        dispatch({
            type: 'SET_BUDGET',
            payload:  bud
        }); 
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" inputmode="numeric" step="10" value={newBudget} onChange={(e) => {handleBudgetChange(e)}}></input>
</div>
    );
};
export default Budget;
