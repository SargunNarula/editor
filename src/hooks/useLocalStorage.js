import { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-'

function useLocalStorage(key, initialValue) {
  
  const prefixedKey = PREFIX + key

  
  const [value, setValue] = useState( () => {

      const jsonValue = localStorage.getItem(prefixedKey)
      

      // Key was already set 
      if (jsonValue != null) {

          return JSON.parse(jsonValue)

        }
      

      // Key has to be set --- values can be of 2 types
      //                        1. function reference
      //                        2. value

      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue
      }

    }


  )

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  
  return [value, setValue]

}

export default useLocalStorage
