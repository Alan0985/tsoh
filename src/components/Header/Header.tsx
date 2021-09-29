import { StyledHeader, StyledNav, Image } from './Header.style';
import { StyledContainer } from '../Utils/Container.style';
import { StyledFlex } from '../Utils/Flex.style';
import { StyledButton } from '../Button/Button.style';
import { FaBitcoin } from 'react-icons/fa';

export const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <StyledNav>
        <div>
          <FaBitcoin />
          <span>Bitcoin</span>
          <StyledButton bg='#fff' color='#333'>
            Give It A Go
          </StyledButton>
        </div>
      </StyledNav>

      <StyledFlex>
        <div>
          <h1>Future. Revolutionary. Decentralized. Magic. Epic.</h1>
          <p>
            Bitcoin is a decentralized digital currency, without a central bank
            or single administrator, that can be sent from user to user on the
            peer-to-peer bitcoin network without the need for intermediaries.
          </p>
          <StyledButton bg='#000' color='#fff'>
            Get Started Here
          </StyledButton>
        </div>

        <Image src='./images/bitcoin2.png' />
      </StyledFlex>
    </StyledContainer>
  </StyledHeader>
);