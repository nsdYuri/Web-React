import promoCameras from '../assets/promo-1-espec.jpeg';
import promoCharging from '../assets/promo1-charging.jpeg';
import promoMain from '../assets/moto-edge-promo1.webp';
import './Home.css'

export default function Home(){
    document.title = "Motorola";
    return(
        <body>
            <div className="promo-1">
                <h2 className="tit-promo">Promoção Setembro Amerelo - <span className='set-amarelo'>Moto Edge 30 Ultra</span></h2>
                
                <section className="conteudo">
                    <img src={promoMain} alt="Motorola Edge 30 Ultra" className="promo-pic"/>
                    <img src={promoCameras} alt="Motorola Edge 30 Ultra - Cameras" className="promo-pic"/>
                    <img src={promoCharging} alt="Motorola Edge 30 Ultra - Carregamento" className="promo-pic"/>
                </section>
                <footer>
                    <h5>DE <span className='cut'><h2>R$ 5.199</h2></span> por <h2><span className='destaque'>R$ 3.599</span></h2><p>Via pix ou 1x no cartão</p></h5>
                </footer>     
            </div>
            <div className="promo-1">
                <h2 className="tit-promo">Promoção Setembro Amerelo - <span className='set-amarelo'>Moto Edge 30 Ultra</span></h2>
                
                <section className="conteudo">
                    <img src={promoMain} alt="Motorola Edge 30 Ultra" className="promo-pic"/>
                    <img src={promoCameras} alt="Motorola Edge 30 Ultra - Cameras" className="promo-pic"/>
                    <img src={promoCharging} alt="Motorola Edge 30 Ultra - Carregamento" className="promo-pic"/>
                </section>
                <footer>
                    <h5>DE <span className='cut'><h2>R$ 5.199</h2></span> por <h2><span className='destaque'>R$ 3.599</span></h2><p>Via pix ou 1x no cartão</p></h5>
                </footer>    
            </div>
         </body>
    )
}   