import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* right thing  */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF5733]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* my info */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, sou {' '}
            <div className="hexagon-container relative inline-block">
              <span className="text-[#FF5733] relative z-10">Renato</span>
            </div>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Um desenvolvedor Front-End <br className='sm:block hidden' />apaixonado por criar aplicações web.
          </p>
        </div>
      </div>

      {/* 3D computer */}
      <ComputersCanvas />

      {/* mouse motion */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href="#about">
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeateType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
      </div>
    </section>
  )
}

export default Hero