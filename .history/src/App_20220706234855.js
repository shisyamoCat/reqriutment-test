import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Pref } from './components/index';
import './css/App.css';
import chartOptions from './charts.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pref: [],
            btnState: [],
        };
        this.apiKey = process.env.REACT_APP_API_KEY;
        this.changeButtonState = this.changeButtonState.bind(this);
    }

    // 都道府県のボタンがクリックされたらグラフ表示/非表示を切り替える関数
    changeButtonState(prefId) {
        const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefId + 1}`;
        console.log(prefId);
        // 都道府県のチェック判定の為の配列を用意
        // const selectState = selected.slice();

        //
        // selectState[index] = !selectState[index];
        fetch(url, { headers: {"X-API-KEY": this.apiKey} })
        .then(res => res.json())
        .then(data => {
            let temp = [];
            Object.keys(data.result.data.data).forEach(e => {
                temp.push(data.result.data.data[e].value)
            });
            const res_series = "";
            this.setState({"":""});
            console.log(temp);

        });
    }

    // レンダリング時に都道府県一覧を取得
    componentDidMount() {
        // RESAS-API 都道府県一覧アドレス
        const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
        // API-KEYを設定

        fetch(url, { headers: { "X-API-KEY": this.apiKey } })
        .then(response => response.json())
        .then(data => {
            this.setState({pref: data.result})
        });
    };

    render(){
        return (
            <div className="wrapper">
                <header className="header">
                    <h1 className="h1">都道府県別 総⼈⼝推移グラフ</h1>
                </header>

                <main>
                    {/* 都道府県別チェックボックス */}
                    <div className="pref-grid">
                        {this.state.pref.map((value,index) =>
                            <Pref
                                prefName={value.prefName}
                                key={index.toString()}
                                onClick={this.changeButtonState}
                            />
                        )}
                    </div>
                    <div id="container"></div>
                    {/* <HighchartsReact Highcharts={Highcharts} chartOptions={chartOptions} /> */}
                </main>
            </div>
        );
    }
}
