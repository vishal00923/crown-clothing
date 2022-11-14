import DirectoryItem from '../DirectoryItem/DirectoryItem';

import { DirectoryContainer } from './DirectoryStyles';

export default function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}
