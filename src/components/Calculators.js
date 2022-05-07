import React, { useState } from 'react'
import BudgetBreakdown from './BudgetBreakdown'
import SavingsCalculator from './SavingsCalculator'

const Calculators = () => {
    
    const [select, setSelect] = useState('Budget Breakdown')

    function handleBudget() {
        setSelect('Budget Breakdown')
    }

    function handleSavings() {
        setSelect('Savings Calculator')
    }

  return (
    <div className='body'>
        <div>
            <h2>Calculators</h2>
            <div className='select'>
                <div onClick={handleBudget} className={select==='Budget Breakdown' && 'selected'}>
                    Budget Breakdown
                </div>
                <div onClick={handleSavings} className={select==='Savings Calculator' && 'selected'}>
                    Savings Calculator
                </div>
            </div>

            {select==='Budget Breakdown' && <BudgetBreakdown/>}
            {select==='Savings Calculator' && <SavingsCalculator/>}
        </div>
    </div>
  )
}

export default Calculators