import illustration from './images/money-illustration.svg'

const MakingMoney = () => {
  return (
    <div className="body page-body">
    <div className='page-title'>
        <div className='title'>
            <h2>
                Making Money
            </h2>
        </div>

    </div>
    <div className='page-text'>
      <div className='intro-block'>
        <img src={illustration} className='making-money' />
        <div className='money-intro'>
        <p>There are endless possible income streams out there. An income stream is simply a regular source or supply of money, which can range from full-time jobs to property rentals. Find what works for you and make sure to diversify where your money comes from to build financial stability.
        </p>

        </div>
      </div>

      <h1>The Types of Income:</h1>
      <div className='menu'>
      <div className='list'>
            <p><a href='#earned'>Earned Income (Jobs)</a></p>
            <p><a href='#profit'>Profit Income (Entrepreneurship)</a></p>
            <p><a href='#interest'>Interest Income (Lending money)</a></p>
            <p><a href='#capital'>Capital Gains Income (Investments)</a></p>
        </div>
        <div className='list'>
            <p><a href='#dividend'>Dividend Income (Shareholding)</a></p>
            <p><a href='#rental'>Rental Income (Renting possessions)</a></p>
            <p><a href='#royalty'>Royalty Income (Lending property)</a></p>
        </div>
        </div>


      <a id='earned'></a><h4>Earned Income (Jobs)</h4>
        <p>This is what first comes to mind when most people think of income streams. It’s pretty straight forward: trade your time for money. Most students will work part-time or summer jobs in retail, food services, or tutoring. While these are all great choices, you should explore your options and never be afraid to shoot for the stars. If you’re confident in your graphic design skills, apply to entry-level graphic design roles. If you think you know a lot about social media, try to get a job as a social media manager. Even if you’re not passionate about the part-time work you do, there’s still a lot you can learn and it’s an experience that will set you up for the future. Looking for a job? Try searching on Indeed, Glassdoor, or LinkedIn.
        </p>

        <a id='profit'></a><h4>Profit Income (Entrepreneurship)</h4>
        <p>Have a revolutionary business idea? Or maybe you’re just looking for a side hustle. Nonetheless, if you start your own company and make money from it, you’re generating profit income. As a student/young adult, you most likely don’t have much to lose, so definitely take on that entrepreneurial venture you have in mind! The possibilities include but are not limited to:
        </p>
        <div className='list'>
            <p>-  Snow-shoveling business</p>
            <p>-  Reselling shoes</p>
            <p>-  Selling crocheted items</p>
            <p>-  Freelance writing</p>
            <p>-  Dropshipping</p>
            <p>-  Content creation (on social media)</p>
        </div>

      <a id='interest'></a><h4>Interest Income (Lending money)</h4>
        <p>You generate interest when you hold your money in savings accounts like a high-interest savings account with your bank (which you can open before you turn 18) and a Tax-Free Savings Account with the government (which you can only open when you’re 18 or older.) When you allow someone else to hold your funds, you get compensation in the form of interest, which is usually a small percentage of the money you allocated in a specific location that gets added to your principal amount, which is the initial amount of money you put in. The amount in your account gets the interest added every compound period, which can be annually, monthly, etc. The money you earn from interest (which means excluding your principal amount) is your interest income.

        </p>

      <a id='capital'></a><h4>Capital Gains Income (Investments)</h4>
        <p>When you invest your money into a capital property (such as a company’s stock), you get a share of that property and you will gain or lose money according to its increases and decreases. If the asset value increases, you make a capital gain, which is the difference between your current share’s value and share value when you first invested in it. This is a risky income stream as you can either gain or lose money in the process, but there can be great reward if you know what you’re doing. If you’re new to finance, it’s probably best to leave this income stream for now and maybe revisit it in the future.
        </p>

      <a id='dividend'></a><h4>Dividend Income (Shareholding)</h4>
        <p>As discussed in the Capital Gains Income section, you can get shares of an asset by investing. In addition to earning capital gains, you may also earn dividends, which are payments made to the shareholders by the company, typically when they have excess cash. When you invest in a company that pays dividends, you can generally expect them in regular intervals, such as once a month.
        </p>

      <a id='rental'></a><h4>Rental Income (Renting possessions)</h4>
        <p>Rental Income is simply the money earned from renting out possessions. This form of income is most commonly recognized as real estate rentals. For example, you may rent an apartment to live in during your post-secondary years. You would likely make monthly payments to the owner of that apartment, which is the owner’s rental income. Home rental is an unlikely income stream for students, however, you may have other things to rent, such as a bike, a book, or tools.
        </p>

     <a id='royalty'></a><h4>Royalty Income (Lending property)</h4>
        <p>Royalties are paid to the owner by people who use their property, which is typically patents, trademarks, or copyrighted works. For example, a musician may allow Youtuber to use their music in a video as long as the Youtuber pays a percentage of the income they make from that video. If you have a gift for creating great background music, royalties could be a great income stream for you.
        </p>



    </div>
</div>
  )
}

export default MakingMoney