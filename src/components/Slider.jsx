import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';




const Slider = () => {
  return (
    <div>
        <Carousel>
               
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block sm:w-[550px] md:w-[650px] lg:w-[760px] sm:h-[390px] md:h-[390px]"
                        src="https://img.freepik.com/free-photo/close-up-student-reading-book_23-2148888822.jpg?size=626&ext=jpg&ga=GA1.2.2094369221.1665932667"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block sm:w-[550px] md:w-[650px] lg:w-[760px] sm:h-[390px] md:h-[390px]"
                        src="https://img.freepik.com/premium-photo/student-studying-using-laptop-computer-online-education-beautiful-woman-freelancer-writes-notes-planning-working-project-working-from-home_207258-299.jpg?size=626&ext=jpg&ga=GA1.2.2094369221.1665932667"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block sm:w-[550px] md:w-[650px] lg:w-[760px] sm:h-[390px] md:h-[390px]"
                        src="https://img.freepik.com/free-photo/handsome-black-man-is-engaged-gym_1157-29642.jpg?w=1800&t=st=1665932681~exp=1665933281~hmac=b0c7e4cbec3f2c23d94771fb9630867b728a1d1c9ed6f4acf8bf1c0064604dcf"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

    </div>
  )
}

export default Slider