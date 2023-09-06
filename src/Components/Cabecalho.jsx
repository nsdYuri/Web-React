import {Link} from "react-router-dom";
import MotoLogo from "../assets/motorola-logo-02-home.webp";
import './Cabecalho.css';

export default function Cabecalho(){
    return(
        <>
            <header className="cabecalho">
                <Link to="/"><img className="logo-cabecalho" src={MotoLogo}/></Link>
                <ul className="lista-opcoes">
                    <li><Link to="/" className="opcao">Home</Link></li>
                    <li><Link to="/aparelhos" className="opcao">Aparelhos</Link></li>
                    <li><Link to="/ofertas" className="opcao">Ofertas</Link></li>
                    <li><Link to="/acessorios" className="opcao">Acessórios</Link></li>
                </ul>
            </header>
        </>
    )
}