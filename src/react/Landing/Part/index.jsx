import React from 'react';
import cls from './style.module.scss';
import { useGallery } from '@hooks';

const svg_icons = import.meta.glob('@icons/*.svg', { eager: true });

function Participation(props) {
	const icon = useGallery(svg_icons)?.obj;



	return (<>
		<section className={cls.part}>
			<div className="container">
				<h2 className='title'>Вот что даёт участие в клубе</h2>
				<ul className={cls.part__grid}>
					<li className={cls.part__item}>
						<img src={icon['price.svg']} />
						<p className='text'>0 ₽ за старт в каждой поездке</p>
					</li>
					<li className={cls.part__item}>
						<img src={icon['scooter.svg']} />
						<p className='text'>Катаетесь с друзьями? <br /> Бронируйте до трёх самокатов <br /> с аккаунта с абонементом — <br /> так у всех будет бесплатный старт</p>
					</li>
					<li className={cls.part__item}>
						<img src={icon['pouse.svg']} />
						<p className='text'>Бесплатная пауза 15 минут <br /> в поездке — например, чтобы <br /> зайти за кофе или передохнуть</p>
					</li>
					<li className={cls.part__item}>
						<img src={icon['time.svg']} />
						<p className='text'>Если самокат недостаточно  <br /> заряжен или с ним неудобно   <br /> переходить дорогу, замените  <br /> по пути на другой — это бесплатно</p>
					</li>
				</ul>
			</div>
		</section>
	</>);
}

export default Participation;