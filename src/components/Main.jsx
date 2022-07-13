import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Pref from './Pref'

const Main = (props) => {
    // チャートの設定
    const options = {
        // チャートの種類
        chart: {
            type: 'line',
        },

        // チャートタイトル
        title: {
            text: '',
        },
        // x軸の設定
        xAxis: {
            title: {
                text: '年度',
            },
        },
        // y軸の設定
        yAxis: {
            title: {
                text: '人口数',
            }
        },
        // 凡例の設定
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
        },
        plotOptions: {
            series: {
                pointInterval: 5,
                pointStart: props.years[0],
            },
        },
        // WEBアクセシビリティ
        accessibility: {
            enabled: false
        },
        // 都道府県名と人口データ
        series: props.series
    }

    return (
        <main className='container'>
            <h2>都道府県</h2>

                {/* 都道府県別チェックボックス */}
                <div className="pref-grid">
                    {props.pref.map((value,index) =>
                        <Pref
                            prefName={value.prefName}   // 都道府県名データ引き渡し
                            prefId={index}              // 都道府県名データのインデックス引き渡し
                            key={index.toString()}
                            onClick={props.onClick}     // changeButtonState関数引き渡し
                        />
                    )}
                </div>

                <h2>人口構成グラフ</h2>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
        </main>
    )
}

export default Main