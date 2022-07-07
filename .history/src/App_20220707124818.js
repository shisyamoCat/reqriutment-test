import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Pref } from './components/index';
import './css/App.css';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pref: [],
            btnState: Array(47),
            years: [],
            populations: [],
            series: [],
        };
        this.changeButtonState = this.changeButtonState.bind(this);

        // RESAS-API APIキー
        this.apiKey = process.env.REACT_APP_API_KEY;
        // RESAS-API 都道府県一覧url
        this.url_pref = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

        // RESAS-API 総人口rul
        this.url_pop = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefId + 1}`;
    }

    // 都道府県のボタンがクリックされたらグラフ表示/非表示を切り替える関数
    changeButtonState(prefId) {
        // ボタンチェック管理配列をコピー
        const _btnState =  this.state.btnState.slice();

        // チャックされた都道府県の配列の真偽値を反転
        _btnState[prefId] = !_btnState[prefId];

        // チェックされた時の処理
        if(this.state.btnState){
            fetch(this.url_pop, { headers: {"X-API-KEY": this.apiKey} })
            .then(res => res.json())
            .then(data => {
                let prefPopulation = [];
                let prefYear = [];
                const obj = data.result.data[0];
                Object.keys(obj.data).forEach(elm => {
                    prefPopulation.push(obj.data[elm].value)
                    // prefYear.push(obj.data[elm].year)
                });
                const resPrefData = {
                    name: this.state.pref[prefId].prefName,
                    data: prefPopulation
                }
                this.setState({
                    btnState: _btnState,
                    series: [...this.state.series, resPrefData],
                    // years: prefYear,
                })
            })
            .catch((error) => {
                return;
            });
        }
        // チェックが外れた時の処理
        else{}
    }

    // レンダリング時に都道府県一覧を取得
    componentDidMount() {
        fetch(this.url_pref, { headers: { "X-API-KEY": this.apiKey } })
        .then(res => res.json())
        .then(data => {
            this.setState({pref: data.result})
        })
        .catch((error) => {
            return;
        });

        fetch(url_pop, { headers: { "X-API-KEY": this.apiKey } })
        .then(res => res.json())
        .then(data => {
            let prefPopulation = [];
            let prefYear = [];
            const obj = data.result.data[0];

            Object.keys(obj.data).forEach(elm => {
                prefPopulation.push(obj.data[elm].value)
                prefYear.push(obj.data[elm].year)
            });
            this.setState({years: prefYear})
        })
        .catch((error) => {
            return;
        });

    };

    render(){
        const options = {
            chart: {
                type: 'line'
            },
            title: {
                text: '都道府県別人口構成'
            },
            xAxis: {
                title: {
                    text: '年度'
                },
            },
            yAxis: {
                title: {
                    text: '人口'
                }
            },
            plotOptions: {
                accessibility: {
                    enabled: false
                },
                series: {
                    pointInterval: 5,
                    pointStart: this.state.years[0],
                    pointEnd: this.state.years[-1],
                }
            },
            series: this.state.series
        }

        return (
            <div className="wrapper">
                <header className="header">
                    <h1 className="h1">都道府県別 人口構成グラフ</h1>
                </header>

                <main className='container'>
                    <h2>都道府県</h2>

                    {/* 都道府県別チェックボックス */}
                    <div className="pref-grid">
                        {this.state.pref.map((value,index) =>
                            <Pref
                                prefName={value.prefName}
                                prefId={index}
                                key={index.toString()}
                                btnState={this.state.btnState}
                                onClick={this.changeButtonState}
                            />
                        )}
                    </div>

                    <h2>人口構成グラフ</h2>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </main>
            </div>
        );
    }
}
