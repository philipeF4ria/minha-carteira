import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';

import Toggle from '../Toggle';

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

		const randomEmoji = useMemo(() => {
			const index = Math.floor(Math.random() * emojis.length);

			return emojis[index];
		}, []);

		return (
        <Container>
            <Toggle />

						<Profile>
							<Welcome>Olá, {randomEmoji}</Welcome>
							<UserName>Philipe Faria</UserName>
						</Profile>
        </Container>
    );
}

export default MainHeader;
