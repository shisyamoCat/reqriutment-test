import './css/App.css';
import React, { Component } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import { Pref } from './components/index';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pref: [],
            btnState
        }
        const apiKey = process.env.REACT_APP_API_KEY;
        this.changeState = this.changeState.bind(this);
    }

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
    componentDidMount() {
        // RESAS-API 都道府県一覧アドレス
        const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
        // API-KEYを設定

        fetch(url, { headers: { "X-API-KEY": apiKey } })
        .then(response => response.json())
        .then(data => {
            this.setState({pref: data.result})
        });
    };

    render(){
        return (
            <div className="wrapper">
                <header className="header">
                    <h1 className="h1">都道府県別の総⼈⼝推移グラフ</h1>
                </header>

                <main>
                    {/* 都道府県別チェックボックス */}

                    <div className="pref-grid">
                        {this.state.pref.map((value,index) =>
                            <Pref
                                prefName={value.prefName}
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
}
