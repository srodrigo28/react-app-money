import Modal from 'react-modal';

interface NewTrasactionProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasaction( {isOpen, onRequestClose} : NewTrasactionProps){
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <h2>Cadastrar transação</h2>

            <input type="text" placeholder='Titulo' />
            <input type="text" placeholder='Valor' />
            <input type="text" placeholder='Categoria' />
            <button type='submit'>Cadastrar</button>
        </Modal>
    )
}