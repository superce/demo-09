import React from 'react';
import echarts from 'echarts'
let myData =[
  '1','2' ,'3' ,'4', '5'
]
class Work extends React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'))

    myChart.setOption({

    title: {
      text: '服装',
      textStyle:{color:'black'},
      left:'center',
    },
    tooltip: {

    },
    xAxis: {
        data: myData

    },
    animationDuration:10000,
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [20, 20, 20, 10, 10, 20]
    }]


    });
  }
  render(){
    return(
      <div id='main' style={{width:"100%" ,height:"auto"}}>
        Work
      </div>
    )
  }
}

export default Work;
