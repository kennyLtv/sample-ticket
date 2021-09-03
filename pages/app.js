import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/App.module.css'
export default function App() {
    const [stringValue, setStringValue] = useState("");
    const [error, setError] = useState(false);
    const [response, setResponse] = useState(null);

    const callApi = async () => {
        if(stringValue.length > 0){
            try {
                let {data} = await axios.post("/data", {data: stringValue});
                setResponse(data?.text);
                setError(false);
            } catch(err) {
                setError(true);
            }
        } else {
            setError(true)
        }
    }

    const updateString = (e) => {
        setStringValue(e.target.value);
    }

    return <div className={"container"}>
        <div className={`${styles.width} ${styles.row}`}>
            <input value={stringValue} onChange={updateString} className={`${error && styles.error} ${styles.input}`} placeholder="String to reverse" />
            <button onClick={callApi}>Submit</button>
        </div>
        <div className={`${styles.width} ${styles.col} ${styles.mt2}`}>
            <div>Reversed String:</div>
        {
            response && <div className={styles.pl2}>{response}</div>
        }
        </div>
    </div>
}