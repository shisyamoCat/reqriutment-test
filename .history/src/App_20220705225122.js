import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PrefLists } from './components/index';
const App = () => {
    const [pref, setPref] = useState({});
    const [prefData, setPrefData] = useState({});
    const [highcharts, setHighcharts] = useState({});
    const [options, setOptions] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const selected = array(47).fill(false);



    // 初回レンダリング時に都道府県一覧を取得
    useEffect(() => {
        // RESAS-API 都道府県一覧アドレス
        const url = "'https://opendata.resas-portal.go.jp/api/v1/prefectures'";
        // API-KEYを設定
        const apiKey = "U2aVmhmh8UtrR57OuIlLifb4l9TBasRQN5KeuHgP";

        fetch(url, {
            headers: { "X-API-KEY": apiKey}
        })
        .then(res => res.json())
        .then(data => {
            setPrefData({prefectures: data.result})
        });
    }, []);

    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="h1">都道府県別の総⼈⼝推移グラフ</h1>
            </header>

            <main>
                <PrefLists prefData={prefData} selected={isSelected}/>
                <HighchartsReact Highcharts={highcharts} options={options} />
            </main>
        </div>
    );
}

export default App
