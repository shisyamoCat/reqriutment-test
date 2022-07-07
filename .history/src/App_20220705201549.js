import './App.css';
import React, { useState, useEffect, useCallback } from 'react';


export default App

function App() {
    const [data, setData] = useState("");

    const setDataset = () =>{
        const url = "'https://opendata.resas-portal.go.jp/api/v1/prefectures'";
        const apiKey = "U2aVmhmh8UtrR57OuIlLifb4l9TBasRQN5KeuHgP";

        fetch(url, {
            headers: { "X-API-KEY": apiKey}
        })
        .then(res => res.json())
        .then(data => {
            setData({prefectures: data.result})
        })
    }

    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="h1">都道府県別の総⼈⼝推移グラフ</h1>
            </header>
        </div>
    );
}

export default App;
