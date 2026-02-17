 codex/check-repo-status-and-update-readme.md-o5l5my
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductView from '../components/ProductView';
import { getProduct } from '../lib/api';

function Product() {
  const { barcode } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchData() {
      setLoading(true);
      try {
        const result = await getProduct(barcode);
        if (active) setData(result);
      } catch (error) {
        toast.error(error.message || 'Ürün getirilirken hata oluştu');
        if (active) setData(null);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();

    return () => {
      active = false;
    };
  }, [barcode]);

  return (
    <section className="mx-auto max-w-3xl p-6">
      {loading ? <p>Yükleniyor...</p> : <ProductView barcode={barcode} data={data} />}
=======
import { useParams } from 'react-router-dom';
import ProductView from '../components/ProductView';

function Product() {
  const { barcode } = useParams();

  return (
    <section className="mx-auto max-w-3xl p-6">
      <ProductView barcode={barcode} />
 main
    </section>
  );
}

export default Product;
