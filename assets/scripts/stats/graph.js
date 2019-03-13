// graph bar chart of scores
// chart.js
const Chart = require('chart.js')
const store = require('../store')

const generateBarChart = () => {
  console.log('generateBarChart')

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
        label: '# of Times Scored',
        data: Object.values(data),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
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
