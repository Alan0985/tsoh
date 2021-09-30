import { StyledHeader, StyledNav, Image } from './Header.style';
import { StyledContainer } from '../Utils/Container.style';
import { StyledFlex } from '../Utils/Flex.style';
import { StyledButton } from '../Button/Button.style';
import { FaSlackHash } from 'react-icons/fa';

export const Header: React.FC = () => (
  <StyledHeader>
    <StyledContainer>
      <StyledNav>
        <div>
          <FaSlackHash />
          <span>OfficeHash</span>
        </div>

        <ul>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Teams</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </StyledNav>

      <StyledFlex>
        <div>
          <h1>OfficeHash makes everything in office easy. </h1>
          <p>
            OfficeHash makes everything easy. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vel, recusandae quod id error est quia
            magnam culpa quam provident dolores ut architecto repudiandae
            reiciendis animi cum ea dicta excepturi eum!
          </p>
          <StyledButton bg='#fff' color='#7fd4c2'>
            Free Trial
          </StyledButton>
        </div>

        <Image src='./images/office1.jfif' />
      </StyledFlex>
    </StyledContainer>
  </StyledHeader>
);
