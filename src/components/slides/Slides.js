import Carousel from 'react-bootstrap/Carousel';
function Slides() {
  return (
    <div className='br4 pa code'>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 pointer br4"
          src="https://designshack.net/wp-content/uploads/img-placeholder.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>My Projects</h5>
          <p>These are my projects. Please take a look if you want.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="resize d-block h-50 w-100 pointer br4"
          src="https://designshack.net/wp-content/uploads/img-placeholder.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Resume</h5>
          <p>Do you want to hire me? Give a look at my resume<br/>
          Click on the Image to download the resume in .PDF</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-50 w-100 pointer br4"
          src="https://designshack.net/wp-content/uploads/img-placeholder.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Other Socials</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default Slides;