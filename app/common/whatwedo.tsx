"use client"
import Link from 'next/link'
import styles from './whatwedo.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function WhatWedo()   {

  return (
    <>
        <div className={styles.main}>
            <section className={styles.container}>
                <p>what we do</p>
            </section>
        </div>
    </>
  )
}