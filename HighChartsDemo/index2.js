document.addEventListener('DOMContentLoaded', ()=>{
    const options = {
        chart:{
            type:'column',
            zoomType:'xy'
        },
        title:{
            text:'Food & Beverages'
        },
        xAxis:{
            // alternateGridColor:'#b7cff7',
            // categories:["Coke", "Pepsi", "7Up"]
        },
        yAxis:{
            title:{
                text:"Soft Drinks"
            }
        }
    
    };
    // $.get('test.csv', csv=>{
    //     options.data={
    //         csv
    //     };
    //     Highcharts.chart('container', options); 
    // })

    // fetch('test.csv')
    //     .then(res=>{
    //         return res.text()
    //     })
    //     .then(csv=>{
    //         options.data = {
    //             csv
    //         };
    //         Highcharts.chart('container', options);
    //     });

    options.data = {
        csvURL:'http://localhost:5501/test.csv',
        enablePolling:true,
        dataRefreshRate: 2
    };
    Highcharts.chart('container', options);
});