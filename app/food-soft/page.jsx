export default function FoodSoft() {
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
        <h2 className="section-titlee">Project: <span className="section-title">Food Soft</span> </h2>
            
        

        <div className="work__container bd-grid">
            <div className="work__container">
                <h1>➢ Technology Used: React.js | Node.js | Express | Firebase | MongoDB | Vercel | Tailwind CSS</h1>
            
            
                <a target="_blank" href="https://food-soft.web.app/" className="button">Live Site</a>
                <a target="_blank" href="https://github.com/JsArafath/food-soft-client" className="button"> Client
                </a>
                <a target="_blank" href="https://github.com/JsArafath/food-soft-server" className="button"> Server
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
                    <img src="assets/img/projects/05/products.png" alt="" />
                </a>

            </div>
            <div><br /><br />
                <h1>All Products:</h1>
                <p>➢In this section, all Products will be shown.</p><br />
                <p>➢Anyone can order any products.</p><br /><br />
            </div>

            {/* part-2 */}
            
            <div><br /><br />
                <h1>Admin Dashboard:</h1>
                <p>➢ In the admin's panel, admin can see all the orders</p> <br />
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/05/admin order.png" alt="" />
                </a>
            </div>

            {/* part-3 */}
            <div className="work__img scroll-item">
                <img src="assets/img/projects/05/make admin.png" alt="" />
            </div>
            <div><br /><br />
                <h1>Make Admin:</h1>
                <p>➢ Admin can make any user in an admin role.</p><br />
                <p>➢ After making an admin, the user can access all the admin roles.</p>
            </div>

        </div>
    </section>













    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    

</>
  );
}
