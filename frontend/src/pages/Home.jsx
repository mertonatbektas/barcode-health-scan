import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [barcode, setBarcode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedBarcode = barcode.trim();
    if (!trimmedBarcode) {
      return;
    }

    navigate(`/product/${trimmedBarcode}`);
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 to-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-center">
        <article className="w-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/70 backdrop-blur sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Barcode Health Scan</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Barkod gir, ürünü çekelim ve basit sağlık skoru gösterelim.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={barcode}
              onChange={(event) => setBarcode(event.target.value)}
              placeholder="Örn: 5449000000996"
              aria-label="Barkod"
              className="h-11 flex-1 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
            <button
              type="submit"
              className="h-11 rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98] active:bg-slate-950"
            >
              Ürünü Getir
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default Home;
