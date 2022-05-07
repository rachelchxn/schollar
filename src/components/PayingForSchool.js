import illustration from './images/school-illustration.svg'

const PayingForSchool = () => {
  return (
  <div className="body page-body">
  <div className='page-title'>
      <div className='title'>
          <h2>
              Paying for School
          </h2>
      </div>

  </div>
  <div className='page-text'>
    <div className='intro-block'>
      <img src={illustration} className='school-illustration' />
      <div className='school-intro'>
      <p>Post-secondary education is not cheap, especially when you have to factor in residence, food, and transportation costs. Handling the money can get overwhelming, so make sure you come up with a plan and take advantage of the financial resources out there.
      </p>
  </div>

  </div>

      <a id='resp'></a><h4>Registered Education Savings Plan (RESP)</h4>
        <p>In Canada, we have something called a Registered Education Savings Plan (RESP), which is a special type of savings account for parents saving up money for their child’s post-secondary education. From the moment you’re born, your parents, grandparents, or other adult relatives or friends, can start making deposits to your RESP that will collect interest tax-free until you are entering post-secondary. Ask your parent about an RESP, it can of great assistance when it comes to paying for school. <span><a href='https://www.canada.ca/en/services/benefits/education/education-savings/resp.html' target='_blank'>Click here</a></span> to learn more about RESP’s.
        </p>
      
      <a id='loans'></a><h4>Loans</h4>
        <p>Many students and their families will rely on student loans in order to pay for school. A loan allows you to borrow money for your education and pay it back in increments with interest after you finish school. Visit the <span><a href='https://www.csnpe-nslsc.canada.ca/en/home' target='_blank'>National Student Loan Service Centre (NSLSC)</a></span> for more information, or go to your provincial student loan organization.
        </p>
      
      <a id='bursaries'></a><h4>Bursaries</h4>
        <p>Bursaries, or grants, are financial support that you can apply for if you qualify, usually if you and your family demonstrate financial need. Unlike loans, bursaries are not repaid. Even if you are unsure about whether or not you meet the requirements, it doesn’t hurt to apply. <span><a href='https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html' target='_blank'>Click here</a></span> to learn more about bursaries.
        </p>

      <a id='scholarships'></a><h4>Scholarships</h4>
        <p>There are tons of scholarships out there waiting to be claimed. Scholarships are generally merit-based, but some also include financial need as criteria. If you have the time, definitely try to apply to as many as possible, this way, you’ll increase your chances of getting the money you can use to fund your education. There are large national scholarships, such as the <span><a href='https://loranscholar.ca/' target='_blank'>Loran Scholars Foundation</a></span>, scholarships offered by schools, and small independent scholarships. You can find ones that fit your qualifications and interests on <span><a href='https://scholartree.ca/' target='_blank'>ScholarTree</a></span>, <span><a href='https://studentawards.com/' target='_blank'>Student Awards</a></span>, and <span><a href='https://studentawards.com/' target='_blank'>Scholarships Canada</a></span>.
        </p>

      <a id='working'></a><h4>Working in school</h4>
        <p>Many students opt to work a part-time job in school. While you generally have more freedom in post-secondary class schedules, it can be difficult and stressful to balance work, school, and life. You may also get summer internships or co-op work opportunities that can help you financially. It’s up to you to decide what works best for you.
        </p>

</div>
</div>
  )
}

export default PayingForSchool