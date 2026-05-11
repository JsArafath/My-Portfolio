export default function Nextsoft() {
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
        <h2 className="section-titlee">Project: <span className="section-title">Nextsoft</span> </h2>
            
        

        <div className="work__container bd-grid">
            <div className="work__container">
                <h1>➢ Technology Used: React.js | Node.js | Express | MongoDB | Tailwind CSS</h1>
            
            
                <a target="_blank" href="#" className="button">Live Site</a>
                <a target="_blank" href="https://github.com/JsArafath/nextsoft-sell-client" className="button"> Client
                </a>
                <a target="_blank" href="https://github.com/JsArafath/nextsoft-sell-server" className="button"> Server
                </a>
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    {/* <img src="assets/img/projects/01/scroll-1.png" alt="" /> */}
                </a>

            </div>
            
            {/* part-1 */}
            <div className="work__img scroll-item">
                <a href="#">
                    <img src="assets/img/projects/nextsoft/home.png" alt="Nextsoft Project" />
                </a>
            </div>
            <div>
                <h1>Project details coming soon...</h1>
            </div>
            
            

        </div>
    </section>













    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    

</>
  );
}
