import React from 'react'

import { SelectMenu } from 'mayccos-library-dropdown'
import 'mayccos-library-dropdown/dist/index.css'
const departments = [
  {
    option: 'Sales'
  },
  {
    option: 'Marketing'
  },
  {
    option: 'Engineering'
  },
  {
    option: 'Human Resources'
  },
  {
    option: 'Legal'
  }
]
const App = () => {
  return (
    <main>
      <SelectMenu
        option={departments}
        htmlFor='departments'
        defaultValue='select a department'
        label='departments'
        hideLabel={false}
        wrapperStyle={{ backgroundColor: '#f7f7f7' }}
      />
    </main>
  )
}

export default App
