import { useNavigate } from 'react-router-dom';
import {
  Title,
  Preview,
  CategoryPreviewContainer,
} from './CategoryPreviewStyles';

import ProductCard from '../ProductCard/ProductCard';

export default function CategoryPreview({ title, products }) {
  const navigate = useNavigate();

  return (
    <CategoryPreviewContainer>
      <Title onClick={() => navigate(`/shop/${title}`)}>
        {title.toUpperCase()}
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
