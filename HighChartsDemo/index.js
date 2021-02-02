document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container',{
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            // type:'areaspline',
            zoomType:'xy'
        },
        tooltip:{
            // animation:false,
            // backgroundColor:'#333333',
            // borderColor:'#f01f11',
            // borderRadius:20,
            // followPointer:true,
            // style:{
            //     color:'#ffffff'
            // }
            // formatter(){
            //     // return `<strong>X value - ${this.x}. Y value - ${this.y}`
            //     let s = `<strong>X is: </strong>${this.x}`;
            //     console.log(this)
            //     this.points.forEach(function(point){
            //         // s+= `<br>Y is:${point.y}`
            //         s+= `<br>Y is:${point.y} - ${point.series.name}`;
            //     });
            //     return s;
            // },
            // shared:true
        },
        credits:{
            // enabled:false
            text:"Go To",
            href:'https://google.com',
            position:{
                align:'left',
                x:10
            },
            style:{
                fontSize:"15px",
                color:"red"
            }
        },

        title:{
            text:'Food & Beverages'
        },
        // colors:['rgb(255,245,240)','rgb(254,224,210)','rgb(252,187,161)','rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)','rgb(203,24,29)','rgb(165,15,21)','rgb(103,0,13)'],
        xAxis:{
            // alternateGridColor:'#b7cff7',
            categories:["Coke", "Pepsi", "7Up"]
        },
        yAxis:{
            
            title:{
                text:"Soft Drinks"
            }
        },
        series:[{
            // data:[["Jane", 10],["John",20],["Will", 33]]
            // data:[{
            //     name:"John",
            //     y:10,
            //     color:'red',
            //     x:2
            // },
            // {
            //     name:"Will",
            //     y:12,
            //     color:'red',
            //     x:5
            // }]
            name:'Soft Drinks',
            negativeColor:'red',
            data:[1,-2,3,4,10,-20,2,50,100,200,2,40,30,100,1],
            zones:[
               {
                value:0,
                color:'#f7a35c'
               },
               {
                value:100,
                color:'#7cb5ef'
               },
               {
                color:'#90ed7d'
               },

            ]
        }]
        // series:[{
        //     name:'John',
        //     data:[1,100,3,2,2,3,1,2,3]
        // },
        // {
        //     name:'Jane',
        //     data:[2,4,8,4,15,80,50,10,5,1]
        // },
        // {
        //     name:'Jane',
        //     data:[111,4,8,15,80,50,80,5,1]
        // },
        // {
        //     name:'Jane',
        //     data:[2,4,130,15,80,50,10,5,1]
        // }
        // ]
    })
})