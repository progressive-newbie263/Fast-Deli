'use client';

import { useEffect, useState } from 'react';

export default function DeliveryPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5002/')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl">{message}</h1>
    </div>
  );
}
