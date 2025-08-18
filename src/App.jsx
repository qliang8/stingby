import styles from './App.module.css'
import { Navbar } from './componets/Navbar/Navbar'
import { Hero } from './componets/Hero/Hero'
import { About } from './componets/About/About'
import { Profile } from './componets/Profile/Profile'


function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />  
        <Hero />
        <About />
        <Profile />
      </div>
    </>
  )
}

export default App
