const covid1 = new Chart(teste_covid1, {
  type: 'line',
  data: {
      labels: ['Campo Belo', 'Ipe', 'Barão Geraldo', 'Taquaral', 'Centro'],
      datasets: [{
          label: 'Casos por centro de Saúde',
          data: [1000, 2200, 3900, 5200, 6200],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
const covid2 = new Chart(teste_covid2, {
  type: 'bar',
  data: {
      labels: ['20-29 anos', '30 - 39 anos', '40 - 49 anos', '50 - 59 anos', '60 - 69 anos'],
      datasets: [{
          label: 'Casos por faixa etaria e Sexo Masculino - Centro',
          data: [486, 689, 495, 340, 280],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
const covid3 = new Chart(teste_covid3, {
  type: 'scatter',
  data: {
    labels: [
      '20 - 29',
      '30 - 39',
      '40 - 49',
      '50 - 59'
    ],
    datasets: [{
      type: 'bar',
      label: 'Casos por faixa etaria e Sexo Feminino - Centro',
      data: [659, 765, 604, 445],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
      type: 'line',
      label: '',
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: 'rgb(54, 162, 235)'
    }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});