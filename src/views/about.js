import PaulImg from './../assets/img/2018-09-23-Paul.jpg'
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
      // "https://www.dropbox.com/s/gdva72dl55ydw7n/%2B%2B%2B+++Paul_Welby_Resume_GitHub_REST_11-2-22.docx?dl=0"
      "https://www.dropbox.com/s/gi3wkm1puvqi0it/%2B%2B%2BPaul_Welby_Resume_GitHub_REST_11-22-22.docx?dl=0"
    );
  }


    return (
      <div className='content-container'>
        <div className="container mt-5 pr-4">

          <div className="row flex-lg-row-reverse align-items-center g-2 py-2">
            <div className="col-lg-4"></div>

            <div style={{position: 'relative', left: '20px', bottom: '15px'}} className="col-10 pr-2 col-sm-8 col-lg-2">
              <img src={PaulImg} className="PaulImg d-block mx-lg-auto img-fluid" alt="PaulImg" width="300" height="200" loading="lazy" />
            </div>

            <div className="col-lg-6">

              <h3 className="display-6 fw-bold lh-1 mb-3">A bit about me...</h3>

              <p className="lead">My name is <strong>Paul Welby</strong>

              <br/> I am a UI Designer and Front-End Software/Web Developer. I can quickly design and customize 
              responsive mobile-first components &amp; sites with Angular and React. I style content for the web 
              using Material Design and Bootstrap v4 &amp; v5 - the current most popular front-end open source toolkit, featuring 
              Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript 
              plugins. Data sources I work with include MS SQL, MySQL, Oracle, and NoSQL DBs such as Firebase and MongoDB for data management. I employ Auth0 and 
              Firebase for user authentication, and more...</p>

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