import { useState } from "react"
import WordCard from "./WordCard"
import Illustration from './images/word-illustration.svg'

const WordBank = () => {

    const [search, setSearch] = useState('')

    const words = [
        {word:'Bursary', def:'A bursary is a form of monetary support given to someone to help fund their post-secondary education, usually dependent on financial need. Unlike loans, it is not paid back.'},
        {word:'Capital Gains', def:'Capital gains are profits made from the sale of assets or investments.'},
        {word:'Chequing Account', def:'A chequing account (or checking account) is a bank account used for storing daily spending money and designed for regular transactions.'}, 
        {word:'Cooperative Education', def:'Cooperative education, or Co-op, is a program that allows students to gain hands-on work experience while studying. Generally, in post-secondary, students are paid for the co-op work they do.', link: 'https://www.studyincanada.com/News/11/1510/Redirect'},
        {word:'Credit Card', def:'A credit card is a card that lends money to pay for goods and services and is paid back by specific dates.', link:'https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/choose-credit-card.html'},
        {word:'Credit Score', def:'A credit score is a measurement ranging from 0 to 900 that represents the risk associated with lending money to an individual. The higher the credit score, the more reliable you are as a creditor.', linl:'https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-report-score-basics.html'},
        {word:'Debit Card', def:'A debit card is a card that allows the user to pay for goods and services with money withdrawn directly from their bank account. There are fees you must pay when you use your debit card.', link:'https://www.canada.ca/en/financial-consumer-agency/services/banking/using-debit.html'},
        {word:'Expenses', def:'Expenses are costs or outflows of money, which means money spent.'},
        {word:'Gross Income', def:'Gross income is the total sum of all forms of earnings of an individual or household. These earnings include, but are not limited to: salaries, profits, and interest payments.'},
        {word:'Interest', def:'Interest is money paid from a borrower to a lender for the delayed repayment of a debt.'},
        {word:'Income Stream', def:'An income stream is simply a regular source or supply of money.', link:'/making-money'},
        {word:'Loan', def:'A loan is a borrowed sum of money that is paid back with interest. To help fund their post-secondary education, many students will take out student loans, which they pay back up to 6 months after finishing their studies in regular installments.'},
        {word:'Net Income', def:'Net income is the sum of all forms of earnings minus taxes and taxes and other deductions.'},
        {word:'Registered Education Savings Plan', def:'A Registered Education Savings Plan (RESP) is a special type of savings account for parents saving up money for their child’s post-secondary education. Money is added in deposits and collects interest tax-free until the child is beginning their studies.', link:'https://www.canada.ca/en/services/benefits/education/education-savings/resp.html'},
        {word:'Savings Account', def:'A savings account is a bank account that earns interest and is used for storing money not generally used for frequent transactions.'},
        {word:'Scholarship', def:'A scholarship is a form of monetary support given to someone to help fund their post-secondary education, usually dependent on merit, and sometimes on both merit and financial need.'},
        {word:'Social Insurance Number (SIN)', def:'A Social Insurance Number is a 9-digit number needed to work in Canada and to access government programs & benefits. It is issued by Service Canada and your SIN is only to be used by you.', link:'https://www.canada.ca/en/services/benefits/education/education-savings/resp.html'},
        {word:'Tax-Free Savings Account', def:'A Tax-Free Savings Account (TFSA) is a savings account into which those who are 18 years of age or older can set money aside tax-free. TSFA contributions are not tax-deductible. When money is withdrawn from the account, it is generally tax-free.', link:'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4466/tax-free-savings-account-tfsa-guide-individuals.html'}

    ]


    
    const wordlist = words.filter((word)=>(word.word.toLowerCase().includes(search.toLowerCase())))

    function handleChange(e) {
        setSearch(e.target.value)
    }

  return (
      <div className='body'>
        <div className="word-intro">
            <div>
                <h2>Word Bank</h2>
                <p>Learn different finance words! Hover over the cards to reveal their definitions.</p>
                <input value={search} type='text' placeholder="Search for words..." onChange={handleChange}/>
            </div>
            <img className="word" src={Illustration} />
        </div>

        <div className="word-bank">

        {wordlist.map((word)=>(
            <WordCard word={word.word} definition={word.def} link={word.link? word.link : ''}/>
        ))}
        
      </div>
      
      </div>
    )
}

export default WordBank