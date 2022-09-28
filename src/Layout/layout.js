import React from 'react'
import { LayoutStyle } from './layoutStyle'

function layout({children}) {
  const classes = {LayoutStyle}
  return (
    <div>
      <main classes = {classes.root}>
        {children}
      </main>
    </div>
  )
}

export default layout