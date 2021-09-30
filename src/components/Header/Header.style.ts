import styled from 'styled-components';

interface Props {
  theme: any;
}

export const StyledHeader = styled.header`
  background-color: ${({ theme }: Props) => theme.colors.header};
  padding: 40px 0;
  color: #fff;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    padding: 0 20px;
  }

  a {
    text-transform: uppercase;
    color: #fff;
  }

  a:hover {
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }

  svg {
    font-size: 70px;
  }

  span {
    font-size: 70px;
    margin-left: 10px;
  }

  @media (max-width: ${({ theme }: Props) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 40vw;
  margin-left: 20px;
  border-radius: 20px;

  @media (max-width: ${({ theme }: Props) => theme.mobile}) {
    width: 80vw;
    margin: 40px 0 30px;
  }
`;
