import { StyledContainer } from '../Utils/Container.style';
import { StyledFlex } from '../Utils/Flex.style';
import { StyledFooter } from './Footer.style';
import { SocialIcons } from '../SocialIcons/SocialIcons';

export const Footer: React.FC = () => (
  <StyledFooter>
    <StyledContainer>
      <StyledFlex>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>021-543-123-4567</li>
          <li>example@bitcoin.com</li>
        </ul>

        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <SocialIcons />
      </StyledFlex>
      <p>&copy;2021 Bitcoin. All Rights Reserved.</p>
    </StyledContainer>
  </StyledFooter>
);
