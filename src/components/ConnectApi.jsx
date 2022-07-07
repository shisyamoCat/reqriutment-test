
const ConnectApi = (url) => {
    const apiKey = process.env.REACT_APP_API_KEY;           // RESAS-API APIキー

    return (
        fetch(url, { headers: {"X-API-KEY": apiKey} })
        .then(res => res.json())
    )
}

export default ConnectApi