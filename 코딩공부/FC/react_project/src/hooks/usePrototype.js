import React, { useContext } from "react"
import AppStoreContext from "../contexts/AppStoreContext"

const usePrototype = () => {
  const { prototypes } = useContext(AppStoreContext)

  // console.log(useContext(AppStoreContext))
  return prototypes
}

export default usePrototype
