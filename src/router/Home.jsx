import {Link} from 'react-router-dom';
import promo1 from '../assets/banner-promo1.webp';
import promo2 from '../assets/banner-promo2.webp';
import './Home.css';
import VisualizarAparelho from './VisualizarAparelho';

export default function Home(){
    document.title = "Motorola";
    return(
        <body>
            <h1>PROMOÇÕES IMPERDÍVEIS<p>SETEMBRO AMARELO</p></h1>
            <Link to={VisualizarAparelho}>
                <div className="promo-1">       
                    <img src={promo1} alt="Motorola Edge 30 Ultra" className="promo-pic"/>
                </div>
            </Link>
            <Link to={VisualizarAparelho}>
                <div className="promo-1">
                        <img src={promo2} alt="Motorola Edge 30 Ultra" className="promo-pic"/>
                </div>
            </Link>    
         </body>
    )
}   