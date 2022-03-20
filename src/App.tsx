import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const[isNewTabaleOpen, setIsNewTabaleOpen] = useState(false);

  function handleOpenTable(){
      setIsNewTabaleOpen(true);
  }
  function handleCloseTable(){
      setIsNewTabaleOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal = { handleOpenTable }/>
      <Dashboard/>

      <Modal 
          isOpen={isNewTabaleOpen}
          onRequestClose={handleCloseTable}
      >
          <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}
