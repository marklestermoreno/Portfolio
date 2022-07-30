import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Contacts from './Component/Contacts/Contacts'
import Loading from './Loading'

// Components

import Page from './Page'

const App = () => {

  // fe4066 - PINK
  // 111213 - BLACK
  // 212224 - GRAY

  const [loading, setLoading] = useState(false)

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