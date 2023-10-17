import React from 'react'
import { FooterAuth } from './footer/footer'
import { HeaderAuth } from './header/Header'

export default function Layout({ children }: any) {
  return (
    <div>
      <HeaderAuth/>
      {children}
      <FooterAuth/>
    </div>
  )
}
