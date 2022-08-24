import React from 'react'

import { Button } from 'ptkui'
import 'ptkui/dist/index.css'

const App = () => {

  return(
    <>
      <Button type="primary" text="Primary Button"></Button>
      <Button type="default" text="Default Button"></Button>
      <Button type="dashed" text="Dashed Button"></Button>
      <Button type="text" text="Text Button"></Button>
      <Button type="link" text="Link Button"></Button>

    </>
  )
  
}

export default App
