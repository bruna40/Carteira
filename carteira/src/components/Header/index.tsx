import Logo from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
        <Content>
            <img src={Logo} alt="Carteira" />
            <button>Nova Transação</button>
        </Content>
    </Container>
  );
}