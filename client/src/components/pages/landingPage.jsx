import React, { useState } from 'react';
import { Container as LandingPageContainer } from '../components';
import SignIn from '../landingPage/signIn';
import SignUp from '../landingPage/signUp';
import Overlay from '../landingPage/overlay';

const LandingPage = () => {
	const [signIn, toggle] = useState(true);

	return (
		<div>
			<LandingPageContainer>
				<SignUp signIn={signIn} />
				<SignIn signIn={signIn} />
				<Overlay signIn={signIn} toggle={toggle} />
			</LandingPageContainer>
		</div>
	);
};

export default LandingPage;