import BarcodeForm from '../components/BarcodeForm';

function Home() {
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Barcode Health Scan</h1>
      <BarcodeForm />
    </section>
  );
}

export default Home;
