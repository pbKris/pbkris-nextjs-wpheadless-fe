// src/components/ui/callout.tsx

import React from 'react';

type CalloutProps = {
  children: React.ReactNode;
  type?: 'info' | 'warning'; // Definisikan props yang bisa diterima
};

export function Callout({ children, type = 'info' }: CalloutProps) {
  const bgColor =
    type === 'warning'
      ? 'bg-yellow-100 border-yellow-400'
      : 'bg-blue-100 border-blue-400';

  return (
    <div className={`my-4 rounded-md border p-4 ${bgColor}`}>{children}</div>
  );
}
