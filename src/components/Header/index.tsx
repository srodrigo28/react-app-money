import logoImg from './../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo do topo" />
                <button type='button'>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}