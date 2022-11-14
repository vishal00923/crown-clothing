import { useNavigate } from 'react-router-dom';
import {
  ContentTitle,
  ContentSubtitle,
  ContentContainer,
  DirectoryItemContainer,
  BackgroundImageContainer,
} from './DirectoryItemStyles';

export default function DirectoryItem({ category }) {
  const navigate = useNavigate();
  const { title, imageUrl, size, route } = category;

  return (
    <DirectoryItemContainer onClick={() => navigate(route)} size={size}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </DirectoryItemContainer>
  );
}
