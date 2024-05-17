import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="w-3/4 m-auto">
       

        <div className=" mt-10 w-full ">
          <div className="mb-4 text-xl flex justify-center text-white items-center">
            Why Choose Us
          </div>
          <Slider {...settings}>
            {data.map((d) => (
              <div>
                <div className="flex justify-center items-center ">
                  <img src={d.img} alt=""></img>
                </div>
                <div>
                  <h1 className="  text-white flex justify-center items-center">
                    {d.name}
                  </h1>
                  <p className=" text-white flex justify-center items-center">
                    {d.dis}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" mt-10   ">
          <div className="mb-4 text-xl flex justify-center text-white items-center">
            Online Session
          </div>
          <Slider {...settings1}>
            {yout.map((dat1) => (
              <div>
                <div className="flex justify-center items-center ">
                  <img src={dat1.img} alt=""></img>
                </div>
                <div>
                  <h1 className="  text-white flex justify-center items-center">
                    {dat1.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" mt-10   ">
          <div className="mb-4 text-xl flex justify-center text-white items-center">
            What our customer are saying
          </div>
          <Slider {...settings2}>
            {client.map((dat2) => (
              <div className="bg-white h-[350px] w-[100px] text-black rounded-s">
                <div className=" h-45 rounded-t-xl flex justify-center items-center  ">
                  <img src="assets/whychoose_icon1.png" alt="" className="h-40 w-40 rounded-full"></img>
                </div>
                <div flex justify-center items-center>
                  <h1 className=" text-xl font-semibold  text-black flex justify-center items-center">
                    {dat2.name}
                  </h1>
                  <p className="text-black flex justify-center items-center">{dat2.email}</p>
                  <div className=" flex justify-center items-center ">
                  <img src={dat2.imgc} alt="" className="size-4"></img>
                  </div>
                  <p className="flex justify-center items-center p-4 text-center font-sans md:font-serif">{dat2.dis}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <img src='assets/wychoosebg.png' alt=''></img>
    <div className='ccd'>
            <h4>Why Choose Us</h4>
            <div className='icon1'>
                <img src='assets/whychoose_icon1.png' alt=''></img>

            </div>
        </div> */}
    </>
  );
}

const data = [
  {
    name: "Guaranteed Playing partner",
    img: "assets/whychoose_icon1.png",
    dis: "No Playing Companion? We'll match You with a Partner",
  },
  {
    name: "Multi-Sport access",
    img: "assets/whychoose_icon2.png",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "Coaching & mentorship",
    img: "assets/whychoose_icon3.png",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "Multi-Sport access",
    img: "assets/whychoose_icon4.png",
    dis: "Get access to all sports within Your city",
  },
];

const yout = [
  {
    name: "Basketball Coaching ",
    img: "assets/badminton.jpg",
  },
  {
    name: "Football Coaching",
    img: "assets/ball.jpg",
  },
  {
    name: "Football Coaching",
    img: "assets/sports4.jpg",
  },
];

const client = [
  {
    name: "DSATHEMES",
    img: "assets/client1.jpg",
    imgc: "assets/sports2.jpg",
    email: "@dsathemes",
    dis: "Dantes remained confused and silent by this explation of the thoughts which has unconsciously been working",
  },
  {
    name: "DSATHEMES",
    img: "assets/client2.avif",
    imgc: "assets/sports1.jpg",
    email: "@dsathemes",
    dis: "Dantes remained confused and silent by this explation of the thoughts which has unconsciously been working",
  },
  {
    name: "DSATHEMES",
    img: "assets/client3.jpg",
    imgc: "assets/sports3.jpg",
    email: "@dsathemes",
    dis: "Dantes remained confused and silent by this explation of the thoughts which has unconsciously been working",
  },
  // {
  //   name: "DSATHEMES",
  //   img: "assets/client1.jpg",
  //   imgc: "assets/comma.jpg",
  //   email:"@dsathemes",
  //   dis: "Dantes remained confused and silent by this explation of the thoughts which has unconsciously been working",
  // },
];
