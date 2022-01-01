import Footer from "./components/Footer"
import Header from "./components/Header"
import Orders from "./components/Orders"
import Prototypes from "./components/Prototypes"
import AppStoreProviders from "./providers/AppStoreProviders"

function App() {
  return (
    <AppStoreProviders>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStoreProviders>
  )
}

export default App
