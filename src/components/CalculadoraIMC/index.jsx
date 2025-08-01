import { useState } from "react"
import styles from './Calculadora.module.css';
import InputMask from 'react-input-mask';

function Calculadora() {    
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    
    function CalculaIMC() {
        const pesoN = parseInt(peso);
        const alturaN = parseFloat(altura);
        const resultado = pesoN / (alturaN * alturaN);


            if (resultado <= 18.5 ) {
                return <p className={styles.formText}>Seu IMC é de {resultado.toFixed(2)} você está em classificação de magreza</p>
            } else if ( resultado <= 24.9) {
                return <p className={styles.formText}>Seu IMC é de {resultado.toFixed(2)} você está em classificação normal</p>
            } else if ( resultado <= 29.9) {
                return <p className={styles.formText}>Seu IMC é de {resultado.toFixed(2)} você está em classificação de sobrepeso</p>
            } else if ( resultado <= 39.9) {
                return <p className={styles.formText}>Seu IMC é de {resultado.toFixed(2)} você está em classificação de obesidade</p>
            } else if ( resultado > 40) {
                return <p className={styles.formText}>Seu IMC é de {resultado.toFixed(2)} você está em classificação de obesidade grave</p>
            } 

    }

    return (
        <form className={styles.form} >
            <div className={styles.formItem}>
                <p>Peso:</p>
                <InputMask mask="999" name="peso" className={styles.formInput} onChange={(e) => setPeso(e.target.value)} type="text" placeholder="Informe seu peso" />
            </div>
            <div className={styles.formItem}>
                <p>Altura:</p>
                <InputMask mask="9.99" className={styles.formInput} onChange={(e) => setAltura(e.target.value)} type="text" placeholder="Informe sua altura" />
            </div>
            {CalculaIMC()}
        </form>

    )
}

export default Calculadora