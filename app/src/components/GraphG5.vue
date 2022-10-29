<template>
  <div class="container">
    <Bar v-if="loaded" :chart-data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const link = "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
axios({method: "get", url: link, responseType: "stream"})
  .then(function (res) {
        if(!res.data) return
        console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });


export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const userlist  = ['boloro', 'barbinha']
      this.chartdata = userlist

      this.loaded = true
    } catch (e) {
      console.log(e)
    }
  }
  
}
</script>