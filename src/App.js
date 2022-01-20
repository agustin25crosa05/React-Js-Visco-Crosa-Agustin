import React, {Component} from "react";
import './App.css';

// LLAMADO A LOS COMPONENTS
import NavBar from './NavBar/NavBar';
import Header from "./Header/Header";
import CardComponent from "./CardComponent/CardComponent";


class App extends Component{
  render(){
    return(
    <div>
        <Header 
          header_title='Visco'
        />
      <NavBar />
      <div className="userSection">
        <CardComponent
          name='NMD_R1'
          img='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7bba6ff67ee74ba0a968ad240083256d_9366/Zapatillas_NMD_R1_Negro_GX0997_01_standard.jpg'
          description='Los soñadores dominan el futuro. Hechas en colaboración con Pixar de Disney, estas zapatillas adidas NMD_R1 lucen un colorido diseño que rinde homenaje al mayor evento deportivo del mundo. Inspiradas en modelos de running clásicos, ofrecen comodidad y estilo con su exterior tejido elástico y mediasuela Boost que te devuelve la energía que inviertes a cada paso. Una colorida plantilla muestra a personajes de Pixar participando en sus deportes favoritos para recordarte que debes soñar en grande con cada paso que das.'
          price='$23.999'
        />
        <CardComponent
          name='SUPERNOVA'
          img='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Zapatillas_Supernova_Negro_S42722_01_standard.jpg'
          description='Cumplí con tus objetivos uno por uno. Estas zapatillas de running adidas están diseñadas para que rompás tus marcas personales en cada salida a correr. La tecnología Boost en el antepié y el talón se combina con la amortiguación Bounce para ofrecerte una pisada balanceada y llena de energía. Llegó la hora de superar tus propias expectativas.'
          price='$18.499'
        />
        <CardComponent
          name='CONTINENTAL 80 STRIPES'
          img='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/221645ca620a43f5b732ac24011508f3_9366/Zapatillas_Continental_80_Stripes_Blanco_FX5090_01_standard.jpg'
          description='¿Querés lucir un estilo clásico? Ponete estas zapatillas retro adidas Continental 80 y ya. Tomate las calles de la ciudad. Una y otra vez. Las 3 Tiras sobre el exterior de cuero blanco las hacen perfectas para todo momento y lugar. Cuando cada momento del día es una oportunidad de lucir un clásico estilo deportivo, no hay que pensarlo dos veces.'
          price='$18.499'
        />
      </div>

    </div>
    );
  };
};

export default App;