import React from 'react';

import '../styles/Banner.scss';
import BannerImg from '../assets/banner-img.png';

const Banner = () => {
	return (
		<div className="hero-banner">
			<div className="content">
				<div className="text-content">
					<h1>SALES</h1>
					<p>
						Welcome to our exclusive ecommerce website dedicated to offering the
						finest and costliest watches in the market. Our collection comprises
						of high-end luxury timepieces from the most renowned brands in the
						world.
					</p>
					<div className="ctas">
						<div className="banner-cta">Read More</div>
						<div className="banner-cta v2">Shop Now</div>
					</div>
				</div>
				<img className="banner-img" src={BannerImg} />
			</div>
		</div>
	);
};

export default Banner;
