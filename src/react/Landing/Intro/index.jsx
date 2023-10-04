import React from 'react';
import cls from './style.module.scss';
import main_img from '@images/main.png';
import logo_svg from '@icons/logo.svg';
import circle_svg from '@icons/circle.svg';

function Intro(props) {

	return (<>
		<section className={cls.intro}>
			<div className={cls.intro__decor1} />
			<div className={cls.intro__decor3} />
			<div className="container">
				<div className={cls.intro__grid}>
					<div className={cls.intro__content}>
						<img src={logo_svg} data-name='logo' />
						<h1 className='title'>Вступайте <br /> в клуб Самокатов</h1>
						<p className='text'>
							Купите абонемент, чтобы стать <br /> частью клуба в новом сезоне–2024. <br /> 8 месяцев за
							<span data-name='cell'>
								<span data-name='now'>499 ₽</span>
								<span data-name='old'>3190 ₽</span>
							</span>
						</p>
						<a href='https://go.yandex/ru_ru/lp/rides/scooter' className='btn'>Стать частью клуба</a>
					</div>
					<div className={cls.intro__image}>
						<div className={cls.intro__decor2} />
						<img src={main_img} data-name='main' />
						<img src={circle_svg} data-name='circle' />
					</div>
				</div>
			</div>
		</section>
	</>);
}

export default Intro;