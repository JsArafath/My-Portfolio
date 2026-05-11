export default function OtoDeals() {
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
        <h2 className="section-titlee">Project: <span className="section-title">Oto Deals</span> </h2>
            
        

        <div className="work__container bd-grid">
            <div className="work__container">
                <h1>➢ Technology Used: React.js | Redux | Tailwind CSS | Node.js | Express | Firebase | Vercel | MongoDB</h1>
            
            
                <a target="_blank" href="https://oto-deals-resale-bc291.web.app/" className="button">Live Site</a>
                <a target="_blank" href="https://github.com/JsArafath/oto-deals-resale-client" className="button"> Client
                </a>
                <a target="_blank" href="https://github.com/JsArafath/oto-resale-server" className="button"> Server
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
                    <img src="assets/img/projects/02/all seller.png" alt="" />
                </a>

            </div>
            <div><br /><br />
                <h1>Admin Dashboard:</h1>
                <p>➢ Firstly seller has to verify by admin, then they will be able to add their products.</p><br />
                <p>➢ Admin can verify and can delete the user.</p> <br />
                
            </div>

            {/* part-2 */}
            <div><br /><br />
                <h1>Buyer Dashboard:</h1>
                <p>➢ Buyers can book the products which are displayed in the category..</p> <br />
                <p>➢ In the buyer dashboard, how many products are booked will be shown. </p><br />
                <p>➢ If the product is done by payment then it shows paid, otherwise there will be showing a pay button.</p>
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/02/buyer-dashboard.png" alt="" />
                </a>
            </div>
            

            {/* part-3 */}
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/02/seller dashboard.png" alt="" />
                </a>
            </div>
            <div><br /><br />
                <h1>Seller Dashboard:</h1>
                <p>➢ There are 2 type of login system. If any user login with seller, then they will be able to add their products.</p><br />
                <p>➢ In the My Products section, they can see their own products which are added.</p> <br />
            </div>
            


            {/* part-4 */}
            <div><br /><br />
                <h1>All Catagories:</h1>
                <p>➢ In this section, all categories will be shown. </p><br />
                <p>➢There are several categories, and each category has many products .</p>
            </div>
            <div className="work__img scroll-item">
                <img src="assets/img/projects/02/all catagories.png" alt="" />
            </div>

            {/* part-5 */}
            <div className="work__img scroll-item">
                <img src="assets/img/projects/02/payment .png" alt="" />
            </div>
            <div><br /><br />
                <h1>Payment:</h1>
                <p>➢ For paying we implement Stripe</p> <br /><br />
            </div>
            
            

        </div>
    </section>













    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    

</>
  );
}
