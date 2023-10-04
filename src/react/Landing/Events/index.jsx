import React from 'react';
import cls from './style.module.scss';
import { useGallery } from '@hooks';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './swiper.scss';
import 'swiper/css/navigation';


const all_images = import.meta.glob("@images/**/*.png", { eager: true })


function Events(props) {
	const image = useGallery(all_images).obj;
	const isPhone = useMediaQuery({ query: '(max-width: 480px)' });


	const swiperData = {
		spaceBetween: 20,
		slidesPerView: 1,
		modules: [Navigation],
		navigation: true
	}


	return (<>
		<section className={cls.events}>
			<div className="container">
				<h2 className='title'>Эксклюзивный доступ к событиям Самокатов</h2>
				<p className='text'>С абонементом — у вас доступ  <br /> к специальным мероприятиям, скидки и классный мерч. В 2023 году  <br /> мы танцевали на Даче Плюс <br /> с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique</p>

				{
					isPhone
						? (
							<Swiper {...swiperData}>
								<img src={image['decor-2.png']} data-decor='slider' />
								<SwiperSlide>
									<li className={cls.events__item}>
										<img src={image['1.png']} data-name='preview' />
									</li>
								</SwiperSlide>
								<SwiperSlide>
									<li className={cls.events__item}>
										<img src={image['2.png']} data-name='preview' />
									</li>
								</SwiperSlide>
								<SwiperSlide>
									<li className={cls.events__item}>
										<img src={image['3.png']} data-name='preview' />
									</li>
								</SwiperSlide>
								<SwiperSlide>
									<li className={cls.events__item}>
										<img src={image['4.png']} data-name='preview' />
									</li>
								</SwiperSlide>
							</Swiper>
						)
						: (
							<ul className={cls.events__list}>
								<li className={cls.events__item}>
									<img src={image['3.png']} data-name='preview' />
									<img src={image['decor-2.png']} data-decor='1' />
								</li>
								<li className={cls.events__item}>
									<img src={image['1.png']} data-name='preview' />
									<img src={image['decor-3.png']} data-decor='2' />
								</li>
								<li className={cls.events__item}>
									<img src={image['2.png']} data-name='preview' />
								</li>
								<li className={cls.events__item}>
									<img src={image['4.png']} data-name='preview' />
									<img src={image['decor-1.png']} data-decor='3' />
								</li>
							</ul>
						)
				}
			</div>
		</section>
	</>);
}

export default Events;