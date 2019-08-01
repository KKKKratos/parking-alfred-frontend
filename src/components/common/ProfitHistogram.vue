<template>
  <div id="profit" style="width: 1000px;height:300px;"></div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      seriesData: [],
      colors: ['#5793f3', '#d14a61', '#675bba']
    }
  },
  created () {
    for (let i = 0; i < 10; i++) {
      this.seriesData.push(parseInt(Math.round(Math.random() * 40000) + 10000))
    }
  },
  mounted () {
    this.$echarts.init(document.getElementById('profit')).setOption({
      color: this.colors,
      title: {
        text: '当月各类型优惠券统计',
        subtext: 'kratos',
        x: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'category',
          name: '第X天',
          axisTick: {
            alignWithLabel: true
          },
          data: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '盈利',
          min: 0,
          max: 60000,
          position: 'left',
          axisLine: {
            lineStyle: {
              color: this.colors[2]
            }
          },
          axisLabel: {
            formatter: '{value} 元'
          }
        }
      ],
      series: [
        {
          name: '盈利1',
          type: 'bar',
          data: this.seriesData
        },
        {
          name: '盈利2  ',
          type: 'line',
          data: this.seriesData
        }
      ]
    })
    // myChart.setOption(this.option)
  }
}
</script>

<style scoped>
</style>
