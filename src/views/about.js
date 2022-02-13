import PaulImg from './../assets/img/paul_sm.jpg'
import './about.css'

const About = () => {

  const goToGithub = () => {
    window.open(
      "https://github.com/PaulyWolly",
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  const downloadMyResume = () => {
    window.open(
      "https://www.dropbox.com/s/gdva72dl55ydw7n/%2B%2B%2BPaul_Welby_Resume_GitHub_REST_2-3-22.docx?dl=0"
    );
  }


    return (
      <div className='content-container'>
        <div className="container mt-5 pr-4">

          <div className="row flex-lg-row-reverse align-items-center g-2 py-2">
            <div className="col-lg-4"></div>

            <div style={{position: 'relative', left: '20px', bottom: '15px'}} className="col-10 pr-2 col-sm-8 col-lg-2">
              <img src={PaulImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300" height="200" loading="lazy" />
            </div>

            <div className="col-lg-6">

              <h3 className="display-6 fw-bold lh-1 mb-3">A bit about me...</h3>

              <p className="lead">My name is <strong>Paul</strong>, and I can quickly design and customize responsive mobile-first components &amp; sites with Angular, React, Material Design and Bootstrap, the current most popular
              front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components,
              powerful JavaScript plugins, Firebase and MongoDB data management, Auth0 and Firebase authentication, and
              more...</p>

              <p>&nbsp;</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button onClick={goToGithub} type="button" className="btn-sm btn-primary btn-lg px-3 me-md-2">My Github Repo</button>
                <button onClick={downloadMyResume} type="button" className="btn-sm btn-success btn-lg px-4">Download my resume</button>
              </div>
            </div>

            <div className="col-lg-1"></div>

          </div>

        </div>
      </div>
    );
  };

export default About;