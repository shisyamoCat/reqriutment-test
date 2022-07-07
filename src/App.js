import React, { useState, useEffect } from 'react';
import { Header, Main } from './components/index';
import './css/App.css';

const App = () => {
    const [pref, setPref] = useState([]);                   // 都道府県名を格納する配列
    const [btnState, setBtnState] = useState(Array(47));    // チェックボックスの状態を格納する配列
    const [years, setYears] = useState([]);                 // 年度を格納する配列
    const [series, setSeries] = useState([]);               // 都道府県のチェック状態を格納する配列


    // APIから取ってきたデータをJSONで吐き出す関数
    const ConnectApi = (url) => {
        const apiKey = process.env.REACT_APP_API_KEY;           // RESAS-API APIキー

        return (
            fetch(url, { headers: {"X-API-KEY": apiKey} })
            .then(res => res.json())
        )
    }

    // 都道府県のボタンがクリックされたらグラフ表示/非表示を切り替える関数
    const changeButtonState = (prefId) => {
        // RESAS-API 総人口URL
        const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefId + 1}`;

        // チャックボタンの状態をコピー
        const _btnState =  btnState.slice();

        // チャックされた都道府県の配列の真偽値を反転
        _btnState[prefId] = !_btnState[prefId];

        // チェックされた時の処理
        if(!btnState[prefId]){
            ConnectApi(url)
            .then(data => {

                // チェックされた都道府県の人口データを格納する配列
                let prefPopulation = [];

                // チェックされた都道府県の年度データを格納する配列
                let prefYear = [];

                // jsonのチェックされた都道府県の総人口配列
                const obj = data.result.data[0];

                // 総人口配列から人口データと年度データを抜き出して
                // 各配列へ追加
                Object.keys(obj.data).forEach(elm => {
                    prefPopulation.push(obj.data[elm].value)
                    prefYear.push(obj.data[elm].year)
                });

                // チェックされた都道府県名と人口データ配列をprefDataに格納
                const prefData = {
                    name: pref[prefId].prefName,
                    data: prefPopulation
                }

                // series配列の最後にprefDataを追加
                series.push(prefData)

                // 更新したチェック県名をseriesにセット
                setSeries(series)

                // 更新した年度配列をyearsにセット
                setYears(prefYear)
            })
            .catch((error) => {
                return;
            });
        }
        // チェックが外れた時の処理
        else{
            // 現在のチェック状況をコピー
            const _series = series.slice();

            // チェックが外された都道府県と同じ都道府県を
            // 配列から消去
            for(let i in _series){
                if(pref[prefId].prefName === _series[i].name){
                    _series.splice(i,1)
                }
            }

            // 更新したチェック県名をseriesにセット
            setSeries(_series)
        }

        // 更新したチェックボックス状況をbtnStateにセット
        setBtnState(_btnState)
    };


    // レンダリング時に都道府県一覧を取得
    useEffect(() => {
        // RESAS-API 都道府県一覧URL
        const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
        // API-KEYを設定

        ConnectApi(url)
        .then(data => {
            setPref(data.result)
        })
        .catch((error) =>{
            return;
        });
    }, []);


    return (
        <div className="wrapper">
            <Header/>
            <Main
                pref={pref}
                series={series}
                years={years}
                onClick={changeButtonState}
            />
        </div>
    );
}

export default App