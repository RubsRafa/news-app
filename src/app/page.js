"use client"

import Navbar from '@/components/NavBar'
import styles from './page.module.css';
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Categories />
    </main>
  )
}
