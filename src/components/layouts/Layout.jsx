import React from 'react'
import BottomFooter from '../shared/BottomFooter'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

export default function Layout({children}) {
  return (
    <>
        <Header />
            {children}
        <Footer />
        

    </>
  )
}
