import './css/App.css';
import React, { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import { Pref } from './components/index';

const App = () => {
    const [pref, setPref] = useState();
    const [isSelected, setIsSelected] = useState(false);
    // const selected = array(47).fill(false);
    const apiKey = process.env.REACT_APP_API_KEY;
    var temp = [];

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
            data.result.map(value => {
                return(
                    setPref(value.prefName),
                    console.log(pref)

                    // setPref(value.prefName)
                    // temp[value] = value.prefName
                )
            })
        });
    });

    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="h1">都道府県別の総⼈⼝推移グラフ</h1>
            </header>

            <main>
                {/* 都道府県別チェックボックス */}
                <div className="pref-grid">
                    {temp.map((value,index) =>
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
