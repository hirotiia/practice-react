'use client';

import Link from 'next/link';

export default function Lesson() {
  return (
    <>
      <h1>Lesson Page</h1>

      <h2>
        <Link href={'/'}>Back to home</Link>
        <Link href={'/ir'}>irページへ</Link>
      </h2>
    </>
  );
}
