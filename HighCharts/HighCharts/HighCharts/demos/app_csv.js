document.addEventListener("DOMContentLoaded", () => { 
    const options={
        chart:{
            type:'column',
            zoomType:'xy'
        },
        title:{
            text:'Our Second Chart'
        },
        yAxis:{
            title:{
                text:'Fruits Eaten'
            }
        },
        responsive:{
            rules:[
                {
                    condition:{
                        maxWidth:500,
                        // callback(){
                        //     return true;
                        // }
                    },
                    chartOptions:{
                        legend:{enabled:false},
                        yAxis:{title:{text:''}}
                    }
                }
            ]
        }
    };
    // $.get('test.csv', csv => {
    //     console.log(csv)
    //     options.data = {
    //         csv, 
    //     };
    //     Highcharts.chart('container', options)
    // });

    // fetch('test.csv').then(res=>{
    //     return res.text();
    // }).then(csv=>{
    //     options.data = {
    //         csv
    //     };
    //     Highcharts.chart('container', options)
    // })

    options.data={
        csvURL:'http://localhost:5500/test.csv',
        enablePolling:true,
        defaultRefreshRate:2
    };
    Highcharts.chart('container', options)
});