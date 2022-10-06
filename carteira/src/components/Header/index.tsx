import Logo from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
        <Content>
            <img src={Logo} alt="Carteira" />
            <button type="button" onClick={onOpenNewTransactionModal} >
                Nova Transação
            </button>

        </Content>
    </Container>
  );
}