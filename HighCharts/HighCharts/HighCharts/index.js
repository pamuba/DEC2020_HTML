document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            type:'areaspline',
            zoomType:'xy',
        },
        colors:['#1c110a','#e4d6a7','#FFA376', '#74FF69', '#665FE8'],
        credits:{
            // enabled:false
            text:"My Custom Credit",
            href:'http://google.com',
            position:{
                align:'center',
                x:10
            },
            style:{
                fontSize:'15px',
                color:'red'
            }

        },
        tooltip:{
            animation:false,
            backgroundColor: '#333333',
            borderColor:'red',
            borderRadius: 20,
            followPointer:true,
            style:{
                color:'#ffffff'
            },
            // formatter(){
            //     return `<strong>X value - ${this.x}.</strong> <em>Y value - ${this.y}</em>`
            // },
            formatter(){
                let s = `<strong>X is: </strong> ${this.x}`;
                console.log(this);
                this.points.forEach(function(point){
                    s += `<br>Y is: ${point.y} - ${point.series.name}`;
                });
                return s
            },
            shared:true
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
            categories : ['Apples', 'Bananas', "Oranges"]
        },
        series:[
            {
                name:'John',
                data:[1,2,3,40, 40, 10, 1,2,3]
            },
            {
                name:'Mary',
                data:[2,4,8, 100, 4, 10, 5,1,2]
            },
            {
                name:'Josh',
                data:[2,4,8,1, 4, 10, 5,1,2]
            }
        ]
    });
});