export default function TourGuide() {
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
        <h2 className="section-titlee">Project: <span className="section-title">Tour Guide</span> </h2>
            
        

        <div className="work__container bd-grid">
            <div className="work__container">
                <h1>➢ Technology Used: React.js | Node.js | Express | Firebase | Vercel | Tailwind CSS</h1>
            
            
                <a target="_blank" href="https://tour-guide-client.web.app/" className="button">Live Site</a>
                <a target="_blank" href="https://github.com/JsArafath/tour-guide-client" className="button"> Client
                </a>
                <a target="_blank" href="https://github.com/JsArafath/tour-guide-server" className="button"> Server
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
                    <img src="assets/img/projects/03/services.png" alt="" />
                </a>

            </div>
            <div><br /><br />
                <h1>All Services:</h1>
                <p>➢In this section, all services will be shown.</p><br />
                <p>➢Anyone can book any services.</p><br /><br />
            </div>

            {/* part-2 */}
            <div><br /><br />
                <h1>Add Services:</h1>
                <p>➢ There is an add service form to add different kind of services which we provide.</p> <br />
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/03/add services.png" alt="" />
                </a>
            </div>

            {/* part-3 */}
            <div className="work__img scroll-item">
                <img src="assets/img/projects/03/review.png" alt="" />
            </div>
            <div><br /><br /><br />
                <h1>Add Reviews:</h1>
                <p>➢ People can add their feedback in review section.</p><br />
                <p>➢ They can able to add their feedback after login.</p>
            </div>

        </div>
    </section>













    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    

</>
  );
}
