import Modal from 'react-modal';
import { Container, ButtonSelect, ButtonSelected } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTrasactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasaction({ isOpen, onRequestClose }: NewTrasactionProps) {
    const [type, setType] = useState('');
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <button type='button' onClick={onRequestClose} className="modal-close">
            <img src={closeImg} alt="Fechar modal" />

        </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='Valor' />

                <ButtonSelect>
                    <ButtonSelected
                        type='button'
                        onClick={() => {setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor = "green"
                    >
                        <img src={incomeImg} alt="img entrada mony"/>
                        <span>Entrada</span>
                    </ButtonSelected>
                    <ButtonSelected
                        type='button'
                        onClick={() => {setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor = "red"
                    >
                        <img src={outcomeImg} alt="img saída mony"/>
                        <span>Saída</span>
                    </ButtonSelected>
                </ButtonSelect>
                <input type="text" placeholder='Categoria' />
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}