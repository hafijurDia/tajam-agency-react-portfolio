import React,{useEffect} from 'react'
import styled from 'styled-components'
import SectionWrapper from '../styles/SectionWrapper'
import { Zoom, Bounce } from 'react-reveal'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Wrapper = styled(SectionWrapper)`
  a {
    border: 1px solid #00e0d0;
    color: #00e0d0;
    padding: 16px 30px;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
    &:hover {
      background: palevioletred;
      color: #fff;
    }
    
  }
  @media screen and (max-width: 992px) {
    
  }
`
const parentVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
    
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration:1,
    },
  },
}

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    console.log(inView)
  }, [controls, inView])


  return (
    <Wrapper name='about-part' id='about-part'  ref={ref}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='about-img text-center'>
            <img
                src='img/big-logo.png'
                alt='image not found'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='about-text'>
              <motion.h2
                variants={parentVariants}
                initial='hidden'
                animate={controls}
              >
                OUR STORY
              </motion.h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus
              </p>
              <p>
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. ClassName aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
              <a href='#'>LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}