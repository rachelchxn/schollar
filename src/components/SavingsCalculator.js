import { useState } from "react"

const SavingsCalculator = () => {

    const [principal, setPrincipal] = useState(0)
    const [interest, setInterest] = useState(0)
    const [compound, setCompound] = useState(0)
    const [time, setTime] = useState(0)

    const [submit, setSubmit] = useState(false)
    const [total, setTotal] = useState()

    function handlePrincipal(e) {
        setPrincipal(e.target.value)
    }

    function handleInterest(e) {
        setInterest(e.target.value)
    }

    function handleCompound(e) {
        setCompound(e.target.value)
    }

    function handleTime(e) {
        setTime(e.target.value)
    }

    function handleSubmit() {
        setSubmit(true)
        setTotal((Number(principal)*(1+Number(interest)/100/Number(compound))**(Number(compound)*Number(time))).toFixed(2))
    }

  return (
    <div className="budget-breakdown">
    <div className="budget">
        <h3>Savings Calculator</h3>
        <p>Find out how much money you'll make from investing in a savings account with compounded interest.</p>
        <div>
            <label>Principal Amount ($)</label>
            <input type='number' value={principal} onChange={handlePrincipal}/>
        </div>

        <div>
            <label>Interest Rate (%)</label>
            <input type='number' value={interest} onChange={handleInterest}/>
        </div>

        <div>
            <label>Compounding Period</label>
            <select value={compound} onChange={handleCompound}>
                <option value={365}>Daily</option>
                <option value={52}>Weekly</option>
                <option value={12}>Monthly</option>
                <option value={4}>Quarterly</option>
                <option value={1}>Annually</option>
            </select>

        </div>

        <div>
            <label>Time in Account (years)</label>
            <input type='number' value={time} onChange={handleTime}/>
        </div>

        <button onClick={handleSubmit}>Submit</button>
    </div>


    {submit && 
        <div className="budget-result">
            <h3>Final Amount: ${total}</h3>
        </div>
    }

</div>
  )
}

export default SavingsCalculator