import Hometab from '@/components/home/Hometab';
import Link from 'next/link';
import React, { SVGProps } from 'react'

export default function Home() {

  return (
    <>
      <Hometab />
    </>
  )
}

declare module 'react' {
  interface SVGProps<T> extends AriaAttributes, DOMAttributes<T> {
    // add any additional SVG-specific attributes you need
  }
}