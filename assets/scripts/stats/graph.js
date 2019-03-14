// graph bar chart of scores
// chart.js
const Chart = require('chart.js')
const store = require('../store')

const generateBarChart = () => {
  // console.log('generateBarChart')

  const maxValue = Math.max(...store.data)

  // map data count to value labels
  const data = store.data.reduce((object, item) => {
    !object[item] ? object[item] = 1 : object[item]++
    return object
  }, {})

  // fill object with value
  for (let i = 0; i < maxValue; i++) { if (!data[i]) { data[i] = 0 } }

  const chartHTML = $('#mycanvas')[0].getContext('2d')
  const myChart = new Chart(chartHTML, {
    type: 'bar',
    data: {
      labels: Object.keys(data),
      datasets: [{
        label: 'Frequency of Times Scored',
        data: Object.values(data),
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
        borderColor: 'black',
        borderWidth: 5,
        fontSize: '24px'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

module.exports = {
  generateBarChart
}
