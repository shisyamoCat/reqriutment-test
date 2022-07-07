import './css/App.css';
import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import { Pref } from './components/index';

const App = () => {
    const [pref, setPref] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    // const selected = array(47).fill(false);
    const apiKey = process.env.REACT_APP_API_KEY;
    let temp = {};

    // const changeSelected = (index) => {
    //     const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${index + 1}`;

    //     // 都道府県のチェック判定の為の配列を用意
    //     // const selectState = selected.slice();

    //     //
    //     // selectState[index] = !selectState[index];
    //     return(
    //         fetch(url, { headers: {"X-API-KEY": apiKey} })
    //     )
    // }

    // 初回レンダリング時に都道府県一覧を取得
    useEffect(() => {
        // RESAS-API 都道府県一覧アドレス
        const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
        // API-KEYを設定

        fetch(url, { headers: { "X-API-KEY": apiKey } })
        .then(response => response.json())
        .then(data => {
            // setPref(data.result),
            data.result.map(value => {
                return temp.push(value.prefName)
            })
        });
        console.log("prefName:"+temp)
    },[]);

    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="h1">都道府県別の総⼈⼝推移グラフ</h1>
            </header>

            <main>
                {/* 都道府県別チェックボックス */}

                <div className="pref-grid">
                    {[1].map((value,index) =>
                        <Pref
                            prefName={value}
                            key={index.toString()}
                            onClick={() => setIsSelected(!isSelected)}
                        />
                    )}
                </div>

                {/* <HighchartsReact Highcharts={highcharts} options={options} /> */}
            </main>
        </div>
    );
}

export default App
