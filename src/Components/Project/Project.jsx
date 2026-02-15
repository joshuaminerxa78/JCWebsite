import React from 'react'
import './Project.css'
import pdf2 from '../../assets/images/certificate-hack-the-waste-joshua-clinto_a92zJmU.pdf'

import projectimag1 from '../../assets/images/2F66B716-F475-445C-8C3F-D3CFF144C6EA_1_105_c.jpeg'
import projectimag2 from '../../assets/images/5A8640CF-04B5-4EBB-AFF3-546870F0D72C_1_105_c.jpeg'
import projectimag3 from '../../assets/images/5C373DFD-E7F5-4494-9D28-102A381A5055_1_105_c.jpeg'
import projectimag4 from '../../assets/images/6574BF49-AB77-4738-9675-EE226BFAA539_1_105_c.jpeg'
import projectimag5 from '../../assets/images/721974D3-2819-4618-886F-DD0944A16E01_1_201_a.jpg'

import projectbusint1 from '../../assets/images/Busint/02C79559-D869-4F63-8F89-EF44AE134BC7_1_105_c.jpeg'
import projectbusint2 from '../../assets/images/Busint/4AB0C5BD-74BF-459A-A974-41FD69A5F7EE_1_105_c.jpeg'
import projectbusint3 from '../../assets/images/Busint/9C6735CD-3EA3-4945-86B0-E7DB6868F99C_4_5005_c.jpeg'
import projectbusint4 from '../../assets/images/Busint/9FEBB265-3DD7-4DB1-97A7-64823019045A_1_105_c.jpeg'
import projectbusint5 from '../../assets/images/Busint/75D75058-F71F-46E2-8A6B-DCDCE364D81B_1_105_c.jpeg'
import projectbusint6 from '../../assets/images/Busint/98D0E39A-0EF5-499D-842A-ED0E9410563E_1_105_c.jpeg'
import projectbusint7 from '../../assets/images/Busint/768C9019-10A7-4DD4-ABCC-CC524FF81C6F_1_105_c.jpeg'
import projectbusint8 from '../../assets/images/Busint/5569AABE-9D77-4624-A2AB-F4CBE79908C2_1_105_c.jpeg'





import { project } from './data_project.js'
import ProjectCard from './projectCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

    const images = [
        projectimag1,
        projectimag2,
        projectimag3,
        projectimag4,
        projectimag5, 
        projectbusint1,
        projectbusint2,
        projectbusint3,
        projectbusint4,
        projectbusint5,
        projectbusint6,
        projectbusint7,
        projectbusint8
    ];


function Project() {

    return (
        <>
            <section id="projects" class="section">
                <h2>Projects</h2>
                <embed className="pdfimag" src={pdf2} width="15%" height="20%" />
                <div className="pdfcref">
                    {project.map((item, index) =>
                    (<ProjectCard
                        key={index}
                        project_names={item.project_names}
                        project_explain={item.project_explain}
                    />)
                    )}
                </div>
            </section>

            <div style={{ padding: '50px 0', backgroundColor: 'rgba(42,53,37,255)' }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect={'coverflow'} 
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                    style={{ width: '100%', padding: '50px 0', '--swiper-theme-color': '#ff6b35', 
          '--swiper-navigation-size': '25px'}}
                >
                    {images.map((url, index) => (
                        <SwiperSlide key={index} style={{ width: '300px', height: '400px' }}>
                            <img
                                src={url}
                                alt={`Slide ${index}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    )
}

export default Project