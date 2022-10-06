import { useEffect } from "react";
import {Container} from "./style";

export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3001/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data));
    },[])
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
                        <td className="title">Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$2.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}