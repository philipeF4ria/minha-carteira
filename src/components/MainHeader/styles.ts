import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;

    background: ${props => props.theme.colors.secondary};
		padding: 0 10px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
	color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.samp``;
