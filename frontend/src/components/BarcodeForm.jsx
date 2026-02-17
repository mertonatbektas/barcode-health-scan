import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BarcodeForm() {
  const [barcode, setBarcode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!barcode.trim()) return;
    navigate(`/product/${barcode.trim()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="w-full rounded border p-2"
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        placeholder="Barkod numarası"
      />
      <button className="rounded bg-slate-900 px-4 py-2 text-white" type="submit">
        Tara
      </button>
    </form>
  );
}

export default BarcodeForm;
