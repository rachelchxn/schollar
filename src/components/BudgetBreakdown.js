import { useState } from "react"

const BudgetBreakdown = () => {

    const [wage, setWage] = useState(0)
    const [allowance, setAllowance] = useState(0)
    const [other, setOther] = useState(0)

    const [submit, setSubmit] = useState(false)
    const [total, setTotal] = useState()
    const [savings, setSavings] = useState()
    const [needs, setNeeds] = useState()
    const [wants, setWants] = useState()

    function handleWage(e) {
        setWage(e.target.value)
    }

    function handleAllowance(e) {
        setAllowance(e.target.value)
    }

    function handleOther(e) {
        setOther(e.target.value)
    }

    function handleSubmit() {
        setSubmit(true)
        setTotal(Number(wage)+Number(allowance)+Number(other))
    }

  return (
    <div className="budget-breakdown">
        <div className="budget">
            <h3>Budget Breakdown</h3>
            <p>Enter your monthly income and get a breakdown of suggested spending amounts.</p>
            <div>
                <label>Monthly Wage/Salary ($)</label>
                <input type='number' value={wage} onChange={handleWage}/>
            </div>

            <div>
                <label>Monthly Allowance ($)</label>
                <input type='number' value={allowance} onChange={handleAllowance}/>
            </div>

            <div>
                <label>Other Monthly Earnings ($)</label>
                <input type='number' value={other} onChange={handleOther}/>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>


        {submit && 
            <div className="budget-result">
                <h3>Your total monthly income: ${total}</h3>
                <p>Savings: ${(total*0.2).toFixed(2)}</p>
                <p>Wants: ${(total*0.3).toFixed(2)}</p>
                <p>Needs: ${(total*0.5).toFixed(2)}</p>
            </div>
        }

    </div>
  )
}

export default BudgetBreakdown