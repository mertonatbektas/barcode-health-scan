import { useParams } from 'react-router-dom';
import ProductView from '../components/ProductView';

function Product() {
  const { barcode } = useParams();

  return (
    <section className="mx-auto max-w-3xl p-6">
      <ProductView barcode={barcode} />
    </section>
  );
}

export default Product;
