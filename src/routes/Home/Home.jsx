import categories from '../../data/categories';
import Directory from '../../Components/Directory/Directory';

import { HomeContainer } from './HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Directory categories={categories} />
    </HomeContainer>
  );
}
