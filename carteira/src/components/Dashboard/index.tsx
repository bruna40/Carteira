import { Sumary } from '../Sumary';
import { Container } from './style';
import { TransactionsTable } from "../../components/TransactionsTable";

export function Dashboard() {
    return(
        <Container>
            <Sumary />
            <TransactionsTable />
        </Container>
    )
}