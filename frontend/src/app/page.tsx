import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import { Group } from '@mantine/core'

export default function Home() {
  return (
    <Group className={styles.hero}>
      <Hero />
    </Group>
  )
}
