import { useEffect } from "react";
import { Container } from "./styles";

export function Table(){
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>App React Expo</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Desenvolvimento App</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>App Flutter</td>
                        <td className="deposit">R$ 2.000,00</td>
                        <td>Desenvolvimento App</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Contas semana</td>
                        <td className="withdraw"> - R$ 2.500,00</td>
                        <td>Desenvolvimento App</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}