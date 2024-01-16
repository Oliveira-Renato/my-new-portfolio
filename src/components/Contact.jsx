import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm ] = useState({
    name:'',
    email: '',
    message: '' 
  })
  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_2hekz37',
      'template_np6fa9v',
      {
        from_name: form.name,
        to_name: 'Renato',
        from_email: form.email,
        to_email: 'renato.printf@gmail.com',
        message: form.message
      },
      '1LWDpusn1DTYbgqIZ'
    ).then(() => {
      setLoading(false)
      alert('Obrigado. Entrarei em contato assim que possível.')

      setForm({
        name: '',
        email: '',
        message: ''
      })

    }, (error) => {
      setLoading(false)

      console.log(error)

      alert('Algo deu errado.')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* form motion */}
      <motion.div
        variants={slideIn('left','tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h2 className={styles.sectionHeadText}>Contato.</h2>

        {/* forms */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* input name */}
          <label 
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Seu nome</span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Qual é o seu nome?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
             />
          </label>
          {/* input email */}
          <label 
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Seu e-mail</span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Qual é o seu e-mail?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
             />
          </label>
          {/* input message */}
          <label 
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Sua mensagem</span>
            <textarea 
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Deixe sua mensagem ou comentário aqui."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
             />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      {/* globe motion */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')