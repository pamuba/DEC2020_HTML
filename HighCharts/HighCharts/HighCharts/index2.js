document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            // type:'areaspline',
            type:'line',
            zoomType:'xy',
        },
        title:{
            text:"First Fruit Chart"
        },
        yAxis:{
            title:{
                text:"Fruits Eaten"
            }
        },
        xAxis:{
            // categories : ['Apples', 'Bananas', "Oranges"]
        },
        series:[
            {
                name:"Fruit Consumption",
                data:[
                    {
                        name:'Jack',
                        y:10,
                        x:2,
                        color:'red'
                    },
                    {
                        name:'John',
                        y:20,
                        x:4
                    }
                ]
            }
        ]
    });
});