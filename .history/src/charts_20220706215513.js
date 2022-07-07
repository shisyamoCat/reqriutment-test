import Highcharts from 'highcharts';

const chartOptions = () => {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: '都道府県別人口推移'
        },
        xAxis: {
            categories: ''
        },
        yAxis: {
            title: {
                text: 'year'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    })
}

export default chartOptions


