export function createChartOptions(
    chartTitle: string,
    xLabel: string,
    yLabel: string
  ) {
    return {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: chartTitle,
          font: { size: 16 },
        },
        tooltip: {
          titleFont: { size: 14 },
          bodyFont: { size: 12 },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: xLabel,
            font: { size: 14 },
          },
          ticks: {
            font: { size: 12 },
          },
        },
        y: {
          title: {
            display: true,
            text: yLabel,
            font: { size: 14 },
          },
          ticks: {
            stepSize: 1,
            font: { size: 12 },
          },
        },
      },
    }
  }
  