<template>
  <div id="coupon" style="width: 500px;height:500px;"></div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      touristAttractionName: [
        '长隆海洋王国', '御温泉', '淇澳岛', '海泉湾', '澳门观光塔', '野狸岛',
        '圆明新园', '珠海渔女', '外伶仃岛', '东澳岛', '海滨公园', '农科奇观'
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
      this.selectedName[this.touristAttractionName[i]] = i < 5
    }
  },
  mounted () {
    this.$echarts.init(document.getElementById('coupon')).setOption({
      title: {
        text: '各景点优惠券统计',
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
        name: '景点',
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
