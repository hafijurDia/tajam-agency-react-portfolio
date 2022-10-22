import React, { useEffect } from 'react'
import SectionWrapper from '../styles/SectionWrapper'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import serviceData from '../data/serviceData'

const Wrapper = styled(SectionWrapper)`
  p {
    font-family: 'Playfair Display', serif;
  }
`

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export default function Services() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    console.log(inView)
  }, [controls, inView])
  return (
    <Wrapper name='services-part' id='services-part'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='service-head text-center'>
              <h2>EXPERTISE</h2>
              <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
            </div>
          </div>
        </div>
        <motion.div
          ref={ref}
          variants={parentVariants}
          initial='hidden'
          animate={controls}
          className='row'
        >
          {serviceData.map((serviceItem, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className='col-lg-4'
            >
              <div className='service-text text-center'>
                <img
                  src={serviceItem.imgSrc}
                  alt='icon'
                  className='img-fluid'
                />
                <h5>{serviceItem.heading}</h5>
                <p>{serviceItem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Wrapper>
  )
}