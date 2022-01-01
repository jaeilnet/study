import React, { useContext } from "react"
import AppStoreContext from "../contexts/AppStoreContext"

const useOrders = () => {
  const { orders } = useContext(AppStoreContext)

  // console.log(useContext(AppStoreContext))
  return orders
}

export default useOrders
