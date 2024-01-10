import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      test
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Meus projetos
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projetos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('','',0.1,1)}
          className="mt-3 text-secondary text-[17px] max-x-3xl leading-[30px]"
        >
          A seguir, apresento projetos que destacam minhas habilidades e experiência por meio de exemplos do mundo real do meu trabalho. Cada projeto é brevemente descrito, com links para repositórios de código e demonstrações ao vivo. Isso reflete minha capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias e gerenciar projetos de forma eficaz.
        </motion.p>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,'')