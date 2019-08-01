<template>
  <div id="couponType" style="width: 500px;height:500px; position: absolute; margin-left: 600px;"></div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      touristAttractionName: [
        '八折券', '满100减30', '买2送1'
      ],
      seriesData: [],
      selectedName: {}
    }
  },
  created () {
    for (let i = 0; i < this.touristAttractionName.length; i++) {
      this.seriesData.push({
        name: this.touristAttractionName[i],
        value: Math.round(Math.random() * 10000)
      })
      this.selectedName[this.touristAttractionName[i]] = i < 3
    }
  },
  mounted () {
    this.$echarts.init(document.getElementById('couponType')).setOption({
      title: {
        text: '各类型优惠券统计',
        subtext: 'kratos',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: this.touristAttractionName,
        selected: this.selectedName
      },
      series: {
        name: '优惠券',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: this.seriesData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    })
    // myChart.setOption(this.option)
  }
}
</script>

<style scoped>
</style>
