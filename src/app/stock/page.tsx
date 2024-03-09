'use client';

import { useState } from 'react';

export default function Page() {
  const [data, setData] = useState('');

  async function getData() {
    const res = await fetch('/api/stock?q=client');
    const data = await res.json();
    setData(data.message);
  }

  return (
    <div className='text-center mt-8'>
      <button className='bg-gray-200 p-2 mb-5' onClick={getData}>
        データを取得
      </button>
      <p>{data}</p>
    </div>
  );
}
