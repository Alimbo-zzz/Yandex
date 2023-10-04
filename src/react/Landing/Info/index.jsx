import React from 'react';
import cls from './style.module.scss';

import scooter_img from '@images/scooter.png';
import scooter_text_svg from '@icons/scooter-text.svg';


function Info(props) {

	return (<>
		<section className={cls.info}>
			<div className="container">
				<ul className={cls.info__grid}>
					<li className={cls.info__item}>
						<div className={cls.info__text}>
							<h2 className='title'>
								Купить <br /> абонемент <br /> и вступить <br /> в клуб смогут <br /> те, кто в Плюсе
							</h2>
							<p className='text'>За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса</p>
						</div>
					</li>

					<li className={cls.info__item}>
						<img src={scooter_img} />
						<div className={cls.info__decor1} />
					</li>


					<li className={cls.info__item}>
						<img src={scooter_text_svg} />
						<div className={cls.info__decor2} />
					</li>

					<li className={cls.info__item}>
						<div className={cls.info__text}>
							<h2 className='title'>
								80% наших <br /> пользователей <br /> уже в клубе <br /> и экономят <br /> на поездках
							</h2>
							<p className='text'>Присоединяйтесь — опция начнёт действовать в начале сезона–2024. <br /> Об открытии сезона предупредим заранее, чтобы вы были готовы</p>
							<a href="https://go.yandex/ru_ru/lp/rides/scooter" className='btn'>Хочу абонемент</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</>);
}

export default Info;