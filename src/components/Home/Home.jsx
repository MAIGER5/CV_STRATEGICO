import styles from './home.module.css'
import { Card1x3 } from "./card1x3"
import { Consultoria } from "./consultoria"
import { ImgPortada } from "./imgPortada"
import { WelcomTo } from "./welcomTo"


export const Home = () => {
  return (
    <div className="position-relative">
      <div>
        <ImgPortada/>
      </div>
      <div className={`${styles.Card1x3}`} >
        <Card1x3/>
      </div>
      <div className={`${styles.Bienvenido}`} >
        <WelcomTo/>
      </div>
      <div className="container">
        <Consultoria/>
      </div>


    </div>
  )
}
