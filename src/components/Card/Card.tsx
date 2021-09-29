import { StyledCard } from './Card.style';

interface Props {
  item: any;
}

export const Card = ({ item: { id, title, body, image } }: Props) => (
  <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>

    <div>
      <img src={`./images/${image}`} alt='' />
    </div>
  </StyledCard>
);
