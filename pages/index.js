import { Calculator } from "../components/Calculator";
import ContainerBlock from "../components/ContainerBlock";
import { RegistrationForm } from "../components/RegistrationForm";
import { DataProvider } from "../context/DataContext";

export default function Home() {
  return (
    <DataProvider>
      <ContainerBlock>
        <Calculator />
        <RegistrationForm />
      </ContainerBlock>
    </DataProvider>
  );
}
