//曲线图    
    var myChart = echarts.init(document.getElementById('main'));
       // 指定图表的配置项和数据
       var option = {       
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['订单量','同比量'],
            y:'20px',
            x: '70px'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['10:00','10:30','11:00','11:30','12:00','12:30','13：00','13:30','14:00','15:00'],
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
        },
        series: [
            {
                name:'订单量',
                type:'line',
                data:[28,25, 25, 28, 38, 39, 30,32,36,33,36,47],
                // markPoint: {
                //     data: [
                //         {type: 'max', name: '最大值'},
                //         {type: 'min', name: '最小值'}
                //     ]
                // },
                // markLine: {
                //     data: [
                //         {type: 'average', name: '平均值'}
                //     ]
                // },
                itemStyle: {
                    normal: {
                        color: "#3aa9eb",
                        lineStyle: {
                            color: "#3aa9eb"
                        }
                    }
                // lineStyle: {//线的颜色
                //     normal: {
                //         color: '#3aa9eb',
                //     }
                 },


            },
            {
                name:'同比量',
                type:'line',
                data:[21, 27, 27, 28, 35, 37, 30,32,40,22,26,37,48],
                markPoint: {
                    // data: [
                    //     {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    // ]
                },
                itemStyle: {
                    normal: {
                        color: "#24d8cb",
                        lineStyle: {
                            color: "#24d8cb"
                        }
                    }
                // lineStyle: {
                //     normal: {
                //         color: '#24d8cb',
                //     }
                },
                // markLine: {
                //     data: [
                //         {type: 'average', name: '平均值'},
                //         [{
                //             symbol: 'none',
                //             x: '90%',
                //             yAxis: 'max'
                //         }, {
                //             symbol: 'circle',
                //             label: {
                //                 normal: {
                //                     position: 'start',
                //                     formatter: '最大值'
                //                 }
                //             },
                //             type: 'max',
                //             name: '最高点'
                //         }]
                //     ]
                // }
            }
        ]
       };

       // 使用刚指定的配置项和数据显示图表。
       myChart.setOption(option);



//json1危化品
//         $(function(){
//             $.ajax({
//                 type:"get",//请求类型 get或者post
//                 url:"../data/danger.json",//请求地址
//                 async:true,//异步或者同步，默认是异步
//                         //timeout超时时间（毫秒）
//                 cache:false,//默认: true , 为false不读取缓存
//                 dataType:"json",
//                 success:function(data){
//                     console.log(data);
//                     for (var i = 0; i < data.danger.length; i++) {
//                         $(".right .json1").append("<ul><li>"+data.danger[i].proder+"</li><li>"+data.danger[i].num+"</li><li class='colorr'>"+data.danger[i].lider+"</li><li class='colorrr'>"+data.danger[i].week+"</li></ul>");
//                     };
//
//                 },//请求成功的回调函数，请求回的数据是这个函数的第一个参数
//                 error:function(){
//                     alert("请求失败");
//                 },//请求失败的回调函数
//
//             })
//         })
//
        