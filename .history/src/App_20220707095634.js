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
            btnState: Array(47),
            years: [],
            populations: [],
        };
        this.apiKey = process.env.REACT_APP_API_KEY;
        this.changeButtonState = this.changeButtonState.bind(this);
    }

    // 都道府県のボタンがクリックされたらグラフ表示/非表示を切り替える関数
    changeButtonState(prefId) {
        // ボタンチェック管理配列をディープコピー
        const _btnState =  this.state.btnState.slice();

        // 総人口のURL
        const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefId + 1}`;

        // チャックされた都道府県の配列の真偽値を反転
        _btnState[prefId] = !_btnState[prefId];

        if(_btnState){
            fetch(url, { headers: {"X-API-KEY": this.apiKey} })
            .then(res => res.json())
            .then(data => {
                let temp = [];
                Object.keys(data.result.data[0]).forEach(e => {
                    temp.push(data.result.data[0].value)
                });
                const year = {};
                console.log(data.result.data[0].year);

            });
        }
        // else{}
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
                                prefId={index}
                                key={index.toString()}
                                btnState={this.setState({btnState: false})}
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
