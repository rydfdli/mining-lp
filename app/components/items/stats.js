"use client"
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useLayoutEffect } from 'react'

const Stats = ({number, persentage = '', text}) => {

  const count = useMotionValue(0)
  const rounded = useTransform(`${count}persentage`, Math.round)

  useEffect(() =>{
    const animation = animate(
      count,
      number,
      {
        duration: 2,
      }
    )
  }, [])


  return (
    <div className="md:w-1/4 w-full md:text-start text-center text-sm md:text-md mb-7 md:mb-0">

      <motion.h1 className="text-7xl md:mb-5 mb-2 text-center mx-auto">
        {rounded}
      </motion.h1>
    
      
      <p className="max-w-[200px] mx-auto">{text}</p>
    </div>
  );
}

export default Stats