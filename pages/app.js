import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/App.module.css'
export default function App() {
    const [stringValue, setStringValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [response, setResponse] = useState("");
    useEffect(() => {
        setError(true)
    }, [])
    const callApi = async () => {
        if(stringValue.length > 0){
            setLoading(true)
            axios.post("/data", {data: stringValue}).then((data) =>{ 
                setResponse(data);
            }).catch(() => setError(true));
        } else {
            setError(true)
        }
    }

    const updateString = (e) => {
        setStringValue(e.target.value);
    }

    return <div>
        <input value={stringValue} onChange={updateString} className={`${error && styles.error} ${styles.input}`} placeholder="String to reverse" />
        <button onClick={callApi}>Submit</button>
    </div>
}