import React from 'react'
import Slider from "react-slick";
import InstagramEmbed from 'react-instagram-embed';

const Main = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div className='mainContainer'>
        <div className='sliderMain'>
            <Slider {...settings}>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/2.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/3.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/4.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/5.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/6.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/7.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/8.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/9.jpg'}/>
                </div>
                <div className='sliderImgWrapper'>
                    <img className='sliderImg' src={'/assets/slider-main/10.jpg'}/>
                </div>
            </Slider>
        </div>
        <div className='posterMain'>Афиша</div>
        <div className='instagramMain'>
            <InstagramEmbed
                url='https://www.instagram.com/p/CJON0g0gL8R/'
                clientAccessToken='457379435279893|6946c215cceae530254b4ae0385e5ae7'
                maxWidth={350}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </div>
    </div>
}

export default Main