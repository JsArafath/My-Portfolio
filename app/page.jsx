export default function Home() {
  return (
    <>

    {/*===== HEADER =====*/}
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logoo"
            ><img className="loogoo" src="assets/img/logo.png" alt="" />
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">Skills</a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">Projects</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact</a>
            </li>
            <li className="nav__item">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1SEMTnsOcv0PXXHhjiFppnlbvSU6n1g8K/view?usp=sharing"
                className="nav__link"
                >Resume</a
              >
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>

    <main className="l-main">
      {/*===== HOME =====*/}
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            I'am <span className="home__title-color"><br />Mohaiminul Islam</span
            ><br />
            MERN Stack
            <br />
            Web Developer
          </h1>
          <a href="#contact" className="button">Hire Me</a>
        </div>

        <div className="home__social">
          <a
            target="_blank"
            href="https://www.facebook.com/404.dark"
            className="home__social-icon"
            ><i className="bx bxl-facebook"></i
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-mohaiminul-islam-299442131/"
            className="home__social-icon"
            ><i className="bx bxl-linkedin"></i
          ></a>
          <a
            target="_blank"
            href="https://github.com/JsArafath"
            className="home__social-icon"
            ><i className="bx bxl-github"></i
          ></a>
        </div>

        <div className="home__img">
          <img src="assets/img/perfil.png" alt="" />
        </div>
      </section>

      {/*===== ABOUT =====*/}
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="assets/img/picic.jpg" alt="" />
          </div>

          <div>
            <p className="about__text">
              I'm a frontend-based full-stack developer from Bangladesh. I love
              web development because I can showcase my creativity in this work.
              I want to see myself as a skilled web developer with my hard work.
              I want to work with someone who can help me develop both my
              professional<br /><br />Whenever possible, I also apply my passion
              for developing products with Node.js and Modern Javascript Library
              and Frameworks like React.js, NextJs. <br /><br />I have done my
              Bachelor of Science in Electrical and Electronics Engineering
              (EEE) from Stamford University Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Front-End</h2>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML5</span>
              </div>
              {/* <div className="skills__bar skills__html">

                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div> */}
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS</span>
              </div>
              {/* <div className="skills__bar skills__css">

                        </div>
                        <div>
                            <span className="skills__percentage">90%</span>
                        </div> */}
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              {/* <div className="skills__bar skills__js">

                        </div>
                        <div>
                            <span className="skills__percentage">70%</span>
                        </div> */}
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-react skills__icon"></i>
                <span className="skills__name">REACT JS</span>
              </div>
              {/* <div className="skills__bar skills__html">

                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div> */}
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-redux skills__icon"></i>
                <span className="skills__name"> Redux</span>
              </div>
              {/* <div className="skills__bar skills__ux">

                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div> */}
            </div>
          </div>

          <div>
            <h2 className="skills__subtitle">Back-End</h2>
            {/* <img src="assets/img/Skills.jpg" alt="" className="skills__img" /> */}
            <div className="skills__data">
              <div className="skills__names">
                <img
                  className="skills__icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA7FJREFUWEftWF1SE0EQ/nomho0+gCeQGxhPYFJEXtUTiG8arGI5AfEELFUafJPcIL5qqIQTGG8QboAPyoLZbatndnBZ8rNE16Is94kKm+lvur/u7+sQbthDNwwP/i1AK35/JTyPtxjsS6YJFHhltXcS1E8WzfzCGbr9svckJuwCWM0EHynG9vf9RncRUNcGdKf5sRqx2gWhZgPSEVTcMn9FFDDhvvmYMdAUb39rrw+vAyw3IFueSDKykQQ4BqgVttcO0gG95uEGwAGAZYOLOagslV7nLWMuQJXNQz9m3iFgBcBXCeiVS8G0IBb82AdoxyYLwqnWWbuxNy9bMwF5rz7VENP7C54QOoh0K3xXH807WP7vveivkooCBh4n74+g+Hn45tFg2vcnApKDQNF7xxNifGHN/qyDZgGUi6X5xUCXYr096WJXACVc+Zxk5StAfpYnebIz6R0pPTNLAwi/Rl5ZP8iW/QqgpEx9ycrSkq7lJWNekHLhs7NoYLpRcT2b9amApJ3D9lrS2r/CWcDqIVR85A6TEjONtwhUZULVjADGEAThTCcb1GseDgB++GcANT+1bPfw67D9qCVzaQzVTzpwSqLoebrshQKqvOwNJf0EfOBY+46opjF01ALjmem4sr7ryl8oIK/ZY5OWCXyQjx1gxXjq5KRQQC6gSAWAAyAehfvrR652JlOl8apXKg3/UoaMVMjwzD4jMEZM6FbKupPu1kIz5CYy1HgDUDWARf3vpdGJdJQQ153QFgZI9Cw8+3EffOs4O3WNK4CuErPvSH/abjwxFyiq7YnUCTPvTptZJrjVw376ncIAaXA3ghKZkVF4ada4klWava4RV0InfNsw1qUwQDIYvc3egZs1ok9CZAdGprazLBpxrXAOCSB7YzO95faXyGwTh47mOEg7x4UyxMCwUtb1rLgmwS+kI91NximMx0bLMC6NJtkLeef0PBKpqebSMnvjnji8ZWlXYvjhfqOT4oQYri2nZXlV3kztjPP0ynp1rv2QLyYtGxhFthZ0SAwx8GJhW8KLtBTMA3XFeYKONCJ/0gIw08Imq44Y9kvcEK90ut+wpZnxGFuiol0CzPwBcKwY/qwVKZfJl02CwPZQosHSLXUwy7i5BRIw7lAesxi4Jph1iVyAsgcYwVTRjghqml+Wf4cbDJasSHlNl11nMVgI0MWwswQzC2GkaAUR7WQXyOsuBgsBMpmwkiBLYnb2/NZisDAgV8ZkLpkfG+YtkPOawFb4hj3/Ac0ryE/csJ9DsG+9OAAAAABJRU5ErkJggg=="
                />
                <span className="skills__name">NODE JS</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img
                  className="skills__icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA7FJREFUWEftWF1SE0EQ/nomho0+gCeQGxhPYFJEXtUTiG8arGI5AfEELFUafJPcIL5qqIQTGG8QboAPyoLZbatndnBZ8rNE16Is94kKm+lvur/u7+sQbthDNwwP/i1AK35/JTyPtxjsS6YJFHhltXcS1E8WzfzCGbr9svckJuwCWM0EHynG9vf9RncRUNcGdKf5sRqx2gWhZgPSEVTcMn9FFDDhvvmYMdAUb39rrw+vAyw3IFueSDKykQQ4BqgVttcO0gG95uEGwAGAZYOLOagslV7nLWMuQJXNQz9m3iFgBcBXCeiVS8G0IBb82AdoxyYLwqnWWbuxNy9bMwF5rz7VENP7C54QOoh0K3xXH807WP7vveivkooCBh4n74+g+Hn45tFg2vcnApKDQNF7xxNifGHN/qyDZgGUi6X5xUCXYr096WJXACVc+Zxk5StAfpYnebIz6R0pPTNLAwi/Rl5ZP8iW/QqgpEx9ycrSkq7lJWNekHLhs7NoYLpRcT2b9amApJ3D9lrS2r/CWcDqIVR85A6TEjONtwhUZULVjADGEAThTCcb1GseDgB++GcANT+1bPfw67D9qCVzaQzVTzpwSqLoebrshQKqvOwNJf0EfOBY+46opjF01ALjmem4sr7ryl8oIK/ZY5OWCXyQjx1gxXjq5KRQQC6gSAWAAyAehfvrR652JlOl8apXKg3/UoaMVMjwzD4jMEZM6FbKupPu1kIz5CYy1HgDUDWARf3vpdGJdJQQ153QFgZI9Cw8+3EffOs4O3WNK4CuErPvSH/abjwxFyiq7YnUCTPvTptZJrjVw376ncIAaXA3ghKZkVF4ada4klWava4RV0InfNsw1qUwQDIYvc3egZs1ok9CZAdGprazLBpxrXAOCSB7YzO95faXyGwTh47mOEg7x4UyxMCwUtb1rLgmwS+kI91NximMx0bLMC6NJtkLeef0PBKpqebSMnvjnji8ZWlXYvjhfqOT4oQYri2nZXlV3kztjPP0ynp1rv2QLyYtGxhFthZ0SAwx8GJhW8KLtBTMA3XFeYKONCJ/0gIw08Imq44Y9kvcEK90ut+wpZnxGFuiol0CzPwBcKwY/qwVKZfJl02CwPZQosHSLXUwy7i5BRIw7lAesxi4Jph1iVyAsgcYwVTRjghqml+Wf4cbDJasSHlNl11nMVgI0MWwswQzC2GkaAUR7WQXyOsuBgsBMpmwkiBLYnb2/NZisDAgV8ZkLpkfG+YtkPOawFb4hj3/Ac0ryE/csJ9DsG+9OAAAAABJRU5ErkJggg=="
                />
                <span className="skills__name"> Express JS</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img
                  className="skills__icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAk1JREFUWEftl09u00AUxr9no9QRC8wNcgPcE1ArLlu4Ae0OuQvKCZqegCBRlx3lBrCliZKcoOUG3IB0gTKJsF81TqKk6bj4jROoELP1+L3ffO/PvCHcs0X3jAf/JpAXd/e00ippnlVVvLJCD+OvwS84PQ3yAFn4M3l2WQWqEpB/2PNHk7RHQKAhGLis19xw2A6HtlCVgOpx5zMDz284Z/TVaRT+caBp3vBHk2MiejM6abZtoKwU8l71GuykFwT4JqcMDClzt9WH8LsUyg7ooHMGxss7nVmGTgykqyqFc1Hq5A6H6v1uv9Te2SYxkDGRCzwS8GWURC82BqTLXE3SHxIHXs19LGkDIoXuqqwiSGnFyYDKJPMqGeGTOonyq6XMkgHF3T7AT8sYnu/R3XucRNtl/xECddhsmAbE7DPhiem7SqLSfkpv1I68uBhoCmJWb5NA+tJ8dFsFGvwloKIcKgYixrfRaZRPA2WWKGT1uNNm4LVIoQ1XmfGGJ+AdgwJzDtG+ZJIUKTRLbEMe8fFUNTpaVW+jnXoKdN667bgASBiu/EhlEm15z+w+03POUrUZga6QuYF0JhIDabj6QfeQmd8uQE1AfKyS3Zb0wFZAOdSNeZr2gayxCCUNVNLckcJYhWzuRIduPE77+XXhcIjMaegZW/edrS13RzJyLINbK6SNLKCoTQQfGe9Vgamk0LJSapLmj0Ov5ga2ysztVVJobsTLx5L8KW2VN2sL2QLovEWgQDo/m5J+TQrpZqkVkpf5KtRagGzKu+if/0C/U/MauKflJUbcB54AAAAASUVORK5CYII="
                />
                <span className="skills__name">MONGO DB</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img
                  className="skills__icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAtVJREFUWEftl1FyEkEQhv+etchGH8QTCCcwOYFQ2fgqniDkTdEq8QTCCcQqs/FNcgLx1ZACTiCeIOQG5EFZSHbbml1YFkh2BljKWCVvsDM7H3/3391DuGMfumM8+HeBzJetDIR7Ds/IOp/zvU0pq63Q/VfNgkf4CkbbObbyfx3ILJ1WAHrvgwjOO5/225uA0lZou9RsMPDch9igStpAZumsDfDTUJWISlI9ItEfHO3V1lVtCaAmRw9joDu0rd0w2eXDBBJeC2jm0CiVZ2RJuLUwlIQT58gqRpeYpbMimA90jaAH9OY0B49aM+EgnIC4vvB7RCUfBvxF7jPg7f6yn3VVIdUC2n59VmbmD5GXXZopI+OMvMZMXskFY5WiMIEx8eL3sdVIBqjUlGF5O30ZVwHRm/z72UPoMPgeKBPd49j7lUSA5hx2YaaMHWfkSvkfz8MYcLvXEC0C0tFnBHwb2FYhIaCmbBXjw6UCXiYskuEJdHgbTLCEOo69l0sKyLc8MX5ubRm5wcg9n1VABRNgOLalzFnlAjPqMMF5MBXBOJj+Uz0Yf71GnVIDhdalDjxR9Du+dpjmAqTRAzWAxk3VM7IQXn1q8yWUCbm4qnKaEkg2VQA9FtyYFsFVYKY1Ki6xlUDS8mZKFIZDt82EJ8CKMJpO0wCSIZsUwXVg9JymBEqXW2ln5P4AqBpfZ1QVJnhupoxH/Vq+f9tqJVAwKYpeEjA+hMJpsUBSndHQzRF5vZvagZ4mc82F6F3cIKcEuhpdZZKC8as98HFgW+WVQvag9H0nSRidnhar0PjqUwfwcJXw3LDnUjCKcXORMqkDl12XF7v7UoiXANfM1L1anMPGIdV7sZyrZ+ZnvW3+BAnXqOjedpUKzZ8bdH9RWRhdFwCpA+FVlr1QLg00OXc8M8uRdG5qxIVglHXm55tEXhlIviySX9LGfSKqrXtZXAtIN42WWfcfSKXWHygJWDQQH6OlAAAAAElFTkSuQmCC"
                />
                <span className="skills__name">FIREBASE</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img
                  className="skills__icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAixJREFUWEftmEFS4kAUhv+XWAg1CzmCN1BPoBaMW/EGujQuZE4wegJxMdkOnsDMdsRSTyDewCOwsQhUJc/qJlAxaTohpCkW9ipVoV9/vP91v79DWLNBa8aDb6AsRbQZ+uH83w3Y2hFBbArfPtyjflbAZd8rgertp/pwHPwloBVfgAGvVrHPBp3DwbILz5uvBKo5PY+BY9UkATVymycrA5IywXqdLUi4k88ss7Ul5UO4Z0q+VIZqF49tZr6REIQ7/0/zVDx+zRqd+W6jayJLBYH42nd/Xq0EKC4ZAwMCvGhhmamJehhsIDw0IZuyqKvO4zPA+7oMmIKau+1H46Cb3GkE/GPgYFrcJqC0B2PN6XUYuJzUN26HbrMdSfpsCkoLVHUergD6HVXOrJBNQhUCEoCmoAoDmYJaCsgE1NJAZUOVAlQmVGlAZUGVClQG1MIHY56GqjoSCNQB83uW85zbOvxRcA+SbSI+utWK/SuPY0xCxYPonKfaMZ73+kyQXjo5pi0kT6aKOM8UUNIxioYaWY6ZpWXmDpGl9dXMYZ2I2lNwVRyV80wBxfuXCDJ0m9Lo6/5tVrbmx0k7T61jXAugpGSiACP7MbsSiTpisFYyAtWn1iWSPBUnl2TZ8tCL7zaSu0+pms55xrMfn7yQYwTopVqxWnm2vVhEXDj9cegl7bCA2azYp6o42Vdp2LtAuG2DvaKmflIG1AKsdxtBXxfn++tHjiMi6yerfb92kn0CUDeSNEu6qVkAAAAASUVORK5CYII="
                />
                <span className="skills__name">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===== WORK =====*/}
      <section className="work section" id="work">
        <h2 className="section-title">Projects</h2>

        <div className="work__container bd-grid">
          <div className="work__img">
            <a href="/dizi-tool">
              <img src="assets/img/projects/dizi-tool/home.png" alt="Digi Store" />
            </a>
            <div className="contains">
              <h1 className="text-center">Digi Store</h1>
              <br />
              <a href="/dizi-tool" className="button">Details</a>
            </div>
          </div>
          <div className="work__img">
            <a href="/organization-manager">
              <img src="assets/img/projects/01/home.png" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">Organization Manager</h1>
              <br />
              <a href="/organization-manager" className="button">Details</a>
            </div>
          </div>
          <div className="work__img">
            <a href="/nextsoft">
              <img src="assets/img/projects/nextsoft/home.png" alt="Nextsoft" />
            </a>
            <div className="contains">
              <h1 className="text-center">Nextsoft</h1>
              <br />
              <a href="/nextsoft" className="button">Details</a>
            </div>
          </div>
          <div className="work__img">
            <a href="/oto-deals">
              <img src="assets/img/projects/02/home.png" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">Oto Deals</h1>
              <br />
              <a href="/oto-deals" className="button">Details</a>
            </div>
          </div>

          <div className="work__img">
            <a href="/tour-guide">
              <img src="assets/img/projects/03/home.png" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">Tour Guide</h1>
              <br />
              <a href="/tour-guide" className="button">Details</a>
            </div>
          </div>
          <div className="work__img">
            <a href="/job-mission">
              <img src="assets/img/projects/04/home.jpg" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">Job Mission</h1>
              <br />
              <a href="/job-mission" className="button">Details</a>
            </div>
          </div>
          <div className="work__img">
            <a href="/food-soft">
              <img src="assets/img/projects/05/home.png" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">Food Soft</h1>
              <br />
              <a href="/food-soft" className="button">Details</a>
            </div>
          </div>
          <div className="work__img">
            <a href="/quiz-let">
              <img src="assets/img/projects/06/home.jpg" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">QUiz Let Online</h1>
              <br />
              <a href="/quiz-let" className="button">Details</a>
            </div>
          </div>
          {/* <div className="work__img">
            <a href="/tech-edu">
              <img src="assets/img/projects/07/home.jpg" alt="" />
            </a>
            <div className="contains">
              <h1 className="text-center">Tech Edu Online</h1>
              <br />
              <a href="/tech-edu" className="button">Details</a>
            </div>
          </div> */}
          
        </div>
      </section>

      {/*===== CONTACT =====*/}
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form action="" className="contact__form">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              className="contact__input"
            ></textarea>
            <input type="button" value="Send" className="contact__button button" />
          </form>
        </div>
      </section>
    </main>

    {/*===== FOOTER =====*/}
    <footer className="footer">
      <p className="footer__title">MD Mohaiminul Islam</p>
      <div className="footer__social">
        <a href="https://www.facebook.com/404.dark" className="footer__icon"
          ><i className="bx bxl-facebook"></i
        ></a>
        <a href="https://www.instagram.com/mh._arafat_/" className="footer__icon"
          ><i className="bx bxl-instagram"></i
        ></a>
        <a href="https://twitter.com/ArafatH58365820" className="footer__icon"
          ><i className="bx bxl-twitter"></i
        ></a>
      </div>
      <p>&#169; 2020 copyright all right reserved</p>
    </footer>

    {/*===== SCROLL REVEAL =====*/}
    

    {/*===== MAIN JS =====*/}
    
  
</>
  );
}
