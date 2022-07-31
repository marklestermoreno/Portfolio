import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Contacts from './Component/Contacts/Contacts'
import Loading from './Loading'

import { Tooltip } from 'antd'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillContacts, AiFillGithub } from 'react-icons/ai'

import { motion } from 'framer-motion'

// Components

import Page from './Page'

const App = () => {

  // fe4066 - PINK
  // 111213 - BLACK
  // 212224 - GRAY

  const [loading,] = useState(false)

  return (
    <>
      <div className='3xl:hidden'>
          <div className='font-main'>
            <div className='min-h-screen bg-[#111213]'>
              {loading ?
                <Loading />
                :
                <>
                  <Routes>
                    <Route path="/*" element={<Page />} />
                    <Route path="/contacts" element={<Contacts />} />

                  </Routes>
                </>
              }
            </div>
            <motion.div drag
              class="floating-container">
              <div class="floating-button"> <AiFillContacts className='text-[50px] text-[#fe4066] sm:pt-3 sm:pl-4 xsm:pt-4 xsm:pl-4' /> </div>
              <div class="element-container">

                <span class="float-element tooltip-left">
                  <Tooltip placement="left" title="Facebook" mouseEnterDelay={-0.5} mouseLeaveDelay={-0.5}>
                    <a href="https://www.facebook.com/MLMoreno09/">
                      <FaFacebook className='text-[50px] text-white' />
                    </a>
                  </Tooltip>
                </span>
                <span class="float-element tooltip-left">
                  <Tooltip placement="left" title="Github" mouseEnterDelay={-0.5} mouseLeaveDelay={-0.5}>
                    <a href="https://github.com/marklestermoreno">
                      <AiFillGithub className='text-[50px] text-white' />
                    </a>
                  </Tooltip>
                </span>
                <span class="float-element tooltip-left">
                  <Tooltip placement="left" title="LinkedIn" mouseEnterDelay={-0.5} mouseLeaveDelay={-0.5}>
                    <a href="https://www.linkedin.com/in/mark-lester-moreno-6a06a6219/">
                      <FaLinkedin className='text-[35px] sm:pt-4 sm:pl-4 xsm:pt-4 xsm:pl-4 text-white' />
                    </a>
                  </Tooltip>
                </span>

              </div>
            </motion.div>
            <div className='flex justify-center text-center items-center py-1.5
                        bg-[#fe4066] text-white'>
              Copyright © 2022 - <b className='pl-2'>  Mark Lester Moreno Portfolio  </b>
            </div>
          </div>
      </div>
      <div className='bg-[#111213] hidden 3xl:flex 3xl:flex-col'>
        <div className='bg-[#111213] min-h-screen'>
        </div>
        <div className='flex justify-center text-center items-center py-1.5
                        bg-[#fe4066] text-white'>
          Copyright © 2022 - <b className='pl-2'>  Mark Lester Moreno Portfolio  </b>
        </div>
      </div>
    </>
  )
}

export default App