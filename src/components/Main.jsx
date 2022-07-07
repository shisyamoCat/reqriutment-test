import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Pref from './Pref'

const Main = (props) => {
    // チャートの設定
    const options = {
        chart: {
            type: 'line',
        },
        title: {
            text: '',
        },
        xAxis: {
            title: {
                text: '年度',
            },
        },
        yAxis: {
            title: {
                text: '人口数',
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
        },
        plotOptions: {
            series: {
                pointInterval: 5,
                pointStart: props.years[0],
            }
        },
        accessibility: {
            enabled: false
        },
        series: props.series
    }

    return (
        <main className='container'>
            <h2>都道府県</h2>

                {/* 都道府県別チェックボックス */}
                <div className="pref-grid">
                    {props.pref.map((value,index) =>
                        <Pref
                            prefName={value.prefName}
                            prefId={index}
                            key={index.toString()}
                            onClick={props.onClick}
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