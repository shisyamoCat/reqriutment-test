import Highcharts from 'highcharts';
document.addEventListener('DOMContentLoaded', function () {
    const chartOptions = Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: '都道府県別人口推移'
        },
        xAxis: {
            categories: ['1990', '2000', '2010']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});