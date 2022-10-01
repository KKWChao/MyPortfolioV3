import React from 'react'
import { CustomBox } from './layoutStyle'

function layout({children}) {

  return (
    <CustomBox>
      {children}
    </CustomBox>
  )
}

export default layout