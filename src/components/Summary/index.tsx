import income from './../../assets/income.svg'
import outcome from './../../assets/outcome.svg'
import totalImg from './../../assets/total.svg'
import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Imagem Entradas" />
                </header>
                <strong className='entrada'>R$ 3.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Imagem Saídas" />
                </header>
                <strong className='saida'>R$ - 2.500,00</strong>
            </div>
            <div className='total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Imagem Total" />
                </header>
                <strong className='amount'>R$ 500,00</strong>
            </div>
        </Container>
    );
}