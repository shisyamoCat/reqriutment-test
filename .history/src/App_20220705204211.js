import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const App = () => {
    const [prefData, setPrefData] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        const initDataset = {};
        const url = "'https://opendata.resas-portal.go.jp/api/v1/prefectures'";
        const apiKey = "U2aVmhmh8UtrR57OuIlLifb4l9TBasRQN5KeuHgP";

        fetch(url, {
            headers: { "X-API-KEY": apiKey}
        })
        .then(res => res.json())
        .then(data => {
            setPrefData({prefectures: data.result})
        });
    });

    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="h1">都道府県別の総⼈⼝推移グラフ</h1>
            </header>
        </div>
    );
}

export default App;
