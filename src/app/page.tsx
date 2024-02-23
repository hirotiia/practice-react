import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/layouts/header';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h1>Hello Next.js</h1>
      </main>
    </>
  );
}
