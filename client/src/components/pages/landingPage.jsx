import React, { useState } from 'react';
import { Container as LandingPageContainer } from '../components';
import SignIn from '../landingPage/signIn';
import SignUp from '../landingPage/signUp';
import Overlay from '../landingPage/overlay';
import Logo from '../../images/logo.png';
import Footer from '../footer';

const LandingPage = () => {
	const [signIn, toggle] = useState(true);

	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<div>
				<img src={Logo} alt="logo" className="w-[200px]" />
			</div>
			<div className='pt-10'>
				<LandingPageContainer>
					<SignUp signIn={signIn} />
					<SignIn signIn={signIn} />
					<Overlay signIn={signIn} toggle={toggle} />
				</LandingPageContainer>
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;