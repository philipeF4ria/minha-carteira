import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

		const randomEmoji = useMemo(() => {
			const index = Math.floor(Math.random() * emojis.length);

			return emojis[index];
		}, []);

		return (
        <Container>
            <h1>Toogle</h1>

						<Profile>
							<Welcome>Olá, {randomEmoji}</Welcome>
							<UserName>Philipe Faria</UserName>
						</Profile>
        </Container>
    );
}

export default MainHeader;
