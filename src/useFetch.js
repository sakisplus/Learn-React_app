import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortCtrl = new AbortController();

        // Simulate internet delay
        setTimeout(() => {

            // Get data from server
            fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error('no server!!!!')
                }
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false)
                setError(null)
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(e.message)
                    setIsPending(false)
                }
            })
        }, 1000);

        return () => abortCtrl.abort();

    }, [url]);

    return {data, isPending, error}
}

export default useFetch;