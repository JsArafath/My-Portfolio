export default function OrganizationManager() {
  return (
    <>

    {/*===== HEADER =====*/}
    <header className="l-header">
        <nav className="nav bd-grid">
            <div>
                <a href="https://mohaiminul-islam-portfolio.netlify.app/" className="nav__logoo"><img className="loogoo"
                        src="assets/img/logo.png" alt="" /> </a>
            </div>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="https://mohaiminul-islam-portfolio.netlify.app/"
                            className="nav__link active">Home</a></li>
                    <li className="nav__item"><a href="https://mohaiminul-islam-portfolio.netlify.app/#about"
                            className="nav__link">About</a></li>
                    <li className="nav__item"><a href="https://mohaiminul-islam-portfolio.netlify.app/#skills"
                            className="nav__link">Skills</a></li>
                    <li className="nav__item"><a href="https://mohaiminul-islam-portfolio.netlify.app/#work"
                            className="nav__link">Work</a></li>
                    <li className="nav__item"><a href="https://mohaiminul-islam-portfolio.netlify.app/#contact"
                            className="nav__link">Contact</a></li>
                    <li className="nav__item"><a target="_blank"
                            href="https://drive.google.com/file/d/1iGb-XwYOxV1MJXKIv_geTWUNWd9G1Xg-/view?usp=sharing"
                            className="nav__link">Resume</a></li>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
        </nav>
    </header>
    {/*===== WORK =====*/}
    <section className="work section" id="work">
        <h2 className="section-titlee">Project: <span className="section-title">Organization Manager (Team Project)</span> </h2>
            
        

        <div className="work__container bd-grid">
            <div className="work__container">
                <h1>➢ Technology Used: React.js | Redux | Node.js | Express | Firebase | SSl Commerz  | MongoDB | Vercel | Tailwind CSS</h1>
            
            
                <a target="_blank" href="https://organization-manager.vercel.app/" className="button">Live Site</a>
                <a target="_blank" href="https://github.com/OmurRifat/organization-manager/" className="button"> Client
                </a>
                <a target="_blank" href="https://github.com/JsArafath/organization-manager-server" className="button"> Server
                </a>
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    {/* <img src="assets/img/projects/01/scroll-1.png" alt="" /> */}
                </a>

            </div>
            
            {/* part-1 */}
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/01/dashboard.png" alt="" />
                </a>

            </div>
            <div>
                <h1>Admin Dashboard:</h1>
                <p>➢A full stack Organization Manager website.</p><br />
                <p>➢The organization manager's goal is to make a system for the Non-Profit Social Organization.</p> <br />
                <p>➢In admin dashboard there are many features like All member, Verification, All transaction, Loan application, Setting etc. Admin have their own My dashboard, they can edit their profile and change their password. </p><br />
                <p>➢Here members will notify by mail or sms to pay their monthly donation.</p><br />
                <p>➢The admin, member, or foundation registration data must be validated before confirming their registration.</p><br /><br />
            </div>

            {/* part-2 */}
            
            <div><br /><br />
                <h1>Member Dashboard:</h1>
                <p>➢ In the member's panel, members will see their due amount, the total amount of the foundation.</p> <br />
                <p>➢ Member can add their feedback in add review section. </p><br />
                <p>➢ Member can edit their profile and change their password</p>
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/01/member dashboard.png" alt="" />
                </a>
            </div>

            {/* part-3 */}
            <div className="work__img scroll-item">
                <img src="assets/img/projects/01/apply loan.png" alt="" />
            </div>
            <div><br /><br />
                <h1>Taking Loan:</h1>
                <p>➢ People can apply through the website for taking a loan</p><br />
                <p>➢The loan application will be sent to the admin for review, if an admin finds that the application is validated then he will approve the application.</p>
            </div>

            {/* part-4 */}
            <div><br /><br />
                <h1>All Organization:</h1>
                <p>➢ Here will be shown all the organization and its details.</p> <br /><br />
            </div>
            <div className="work__img scroll-item">
                <img src="assets/img/projects/01/all organisation.png" alt="" />
            </div>

            {/* part-5 */}
            <div className="work__img scroll-item">
                <img src="assets/img/projects/01/payment.png" alt="" />
            </div>
            <div><br /><br />
                <h1>Payment:</h1>
                <p>➢ For paying loan and donation we implement ssl commerz</p> <br /><br />
            </div>
            
            

        </div>
    </section>













    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    

</>
  );
}
