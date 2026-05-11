export default function QuizLet() {
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
        <h2 className="section-titlee">Project: <span className="section-title">QUiz Let Online</span> </h2>
            
        

        <div className="work__container bd-grid">
            <div className="work__container">
                <h1>➢ Technology Used: React.js | react-router | json-api | Netlify | Tailwind CSS</h1>
            
            
                <a target="_blank" href="https://lambent-cajeta-92c4d4.netlify.app/" className="button">Live Site</a>
                <a target="_blank" href="https://github.com/JsArafath/quiz-let-main" className="button"> Client
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
                    <img src="assets/img/projects/06/quiz topic.png" alt="" />
                </a>
            </div>
            <div><br /><br /><br /><br />
                <h1>Quiz Toics:</h1>
                <p>➢ There are different type of quiz topics.</p><br />
            </div>

            {/* part-2 */}
            <div><br /><br /><br /><br />
                <h1>Add Services:</h1>
                <p>➢ In the quiz test, If the answer is right then a toast will be shown with a green color otherwise it will be red color.</p> <br />
                <p>➢ When the quiz test is over, then its counts how many correct answers.</p>
            </div>
            <div className="work__img scroll-item">
                <a href="">
                    <img src="assets/img/projects/06/quiz.png" alt="" />
                </a>
            </div>

        </div>
    </section>













    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    

</>
  );
}
