import React, { useContext } from "react"
import AppStoreContext from "../contexts/AppStoreContext"

const useActions = () => {
  const { addToOrder, remove, removeAll } = useContext(AppStoreContext)

  return { addToOrder, remove, removeAll }
}
export default useActions
