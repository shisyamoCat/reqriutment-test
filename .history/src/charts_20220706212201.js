document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: '都道府県別人口推移'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
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