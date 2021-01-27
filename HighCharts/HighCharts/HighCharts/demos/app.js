document.addEventListener("DOMContentLoaded", () => {
  //initialize high charts
  Highcharts.chart("container", {
    credits: {
      //    enabled:false
      text: "My Custom Credits",
      href: "https://google.com",
      position: {
        align: screenLeft,
        x: 10,
      },
      style: {
        fontSize: "15px",
        color: "red",
      },
    },
    chart: {
      type: "areaspline",
      zoomType: "xy",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruits Eaten",
      },
    },
    title: {
      text: "Our First Chart",
    },
    colors: ["#1C110A", "#E4D6A7", "#E9B44C", "#9B2915", "#50A2A7"],
    tooltip: {
      formatter() {
        let s =  `<strong>X value</strong> - ${this.x}. Y value - ${this.y}`;
        this.points.forEach(function(point){
            s += `<br>Y is: ${point.y}`;
        });
        return s;
      },
      shared:true,
      animation: true,
      backgroundColor: "#333333",
      borderColor: "red",
      borderRadius: 20,
      followPointer: true,
      style: {
        color: "#ffffff",
      },
    },
    series: [
      {
        name: "John",
        data: [1, 2, 3, 100, 2, 3, 1, 2, 3],
      },
      {
        name: "Jane",
        data: [1, 20, 25, 60, 13, 12, 40, 14],
      },
      {
        name: "Jane",
        data: [1, 20, 100, 1, 3, 2, 1, 2],
      },
      {
        name: "Jack",
        data: [10, 20, 100, 8, 7, 4, 2, 4],
      },
      {
        name: "Jack",
        data: [8, 12, 100, 6, 7, 4, 200, 4],
      },
      {
        name: "Jane",
        data: [1, 20, 25, 26, 60, 12, 30, 14],
      },
    ],
  });
});
