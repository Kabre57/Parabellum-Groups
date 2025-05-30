import React from 'react'
import { Head, Block, Card } from '../../componenets'
import { Line, Bar, Pie, PolarArea, Doughnut } from "react-chartjs-2";
import { useTheme } from '../../layout/context';

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, RadialLinearScale, Tooltip, Filler, Legend, ArcElement} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, RadialLinearScale, Tooltip, Filler, Legend, ArcElement);

const ChartJsPage = () => {
  const theme = useTheme();
  const solidLineChart = {
    labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets : [{
        label : "Total Received",
        borderColor: "#5ce0aa",
        backgroundColor: "transparent",
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 4,
        fill: false,
        lineTension : .4,
        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    },{
        label : "Total Send",
        backgroundColor: "transparent",
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 4,
        borderColor: "#798bff",
        fill: false,
        lineTension : .4,
        data: [80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82]
    }]
  };
  const filledLineChart = {
    labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets : [{
        label : "Total Received",
        borderColor: "#798bff",
        backgroundColor: "rgba(121, 139, 255, 0.4)",
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 4,
        fill: true,
        lineTension : .4,
        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    }]
  };
  const straightLineChart = {
    labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets : [{
        label : "Total Received",
        borderColor: "#798bff",
        backgroundColor: "rgba(121, 139, 255, 0.3)",
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 4,
        fill: true,
        lineTension : 0,
        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    }]
  };
  const barChartData = {
    labels: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30" ],
    datasets: [
      {
        label: "join",
        backgroundColor: "#9cabff",
        borderWidth: 0,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [
          110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95,
          75, 90, 75, 90,
        ],
      }
    ],
  };
  const barChartMultiple = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets : [{
        label : "Income",
        backgroundColor: "#9cabff",
        borderWidth: 0,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    },{
        label : "Expense",
        backgroundColor: "#f4aaa4",
        borderWidth: 0,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
    }]
  };
  const barChartStacked = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets : [{
        label : "Income",
        backgroundColor: "#9cabff",
        borderWidth: 0,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    },{
        label : "Expense",
        backgroundColor: "#f4aaa4",
        borderWidth: 0,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
    }]
  };
  const pieChartData = {
    labels: ["Send", "Receive", "Withdraw"],
    datasets: [
      {
        borderColor: "#fff",
        backgroundColor: ["rgba(156, 171, 255, 0.8)", "rgba(244, 170, 164, 0.8)", "rgba(143, 234, 197, 0.8)"],
        data: [110, 80, 125],
      },
    ],
  };
  const doughnutChartData = {
    labels: ["Send", "Receive", "Withdraw"],
    datasets: [
      {
        borderColor: "#fff",
        backgroundColor: ["rgba(156, 171, 255, 0.8)", "rgba(244, 170, 164, 0.8)", "rgba(143, 234, 197, 0.8)"],
        data: [110, 80, 125],
      },
    ],
  };
  const polarChartData = {
    labels: ["Send", "Receive", "Withdraw"],
    datasets: [
      {
        borderColor: "#fff",
        backgroundColor: ["rgba(156, 171, 255, 0.8)", "rgba(244, 170, 164, 0.8)", "rgba(143, 234, 197, 0.8)"],
        data: [110, 80, 125],
      },
    ],
  };

  return (
    <>
        <Head title="Chart JS" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Chart Js</Block.TitleLg>
              <Block.LeadText> <a target="_blank" className="text-primary-600 hover:text-primary-800" href="https://www.chartjs.org/">ChartJs</a> is ver simple and flexible JavaScript charting for designers & developers, With the help with <a target="_blank" className="text-primary-600 hover:text-primary-800" href="https://react-chartjs-2.js.org/">react-chartjs-2</a> You can use with react.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Solid Line Chart</Block.Title>
                <Block.Text>A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="h-[260px]">  
                  <Line
                    data={solidLineChart}
                    options={{
                      plugins: {
                        legend: {
                            display: true,
                            reverse: theme.direction === 'rtl' ? true : false,
                            labels: {
                              boxWidth: 12,
                              padding: 20,
                              color: "#6783b8",
                            },
                        },
                        tooltip: {
                            enabled: true,
                            rtl: theme.direction === 'rtl' ? true : false,
                            callbacks: {
                              label: function (context) {
                                  return `${context.parsed.y} BTC`;
                              },
                            },
                            displayColors: false,
                            backgroundColor: "#eff6ff",
                            borderColor: '#eff6ff',
                            titleFont: {
                              size: '13px',
                            },
                            titleColor: "#6783b8",
                            titleMarginBottom: 6,
                            bodyColor: "#9eaecf",
                            bodyFont: {
                              size: '12px',
                            },
                            bodySpacing: 4,
                            padding: 10,
                            footerMarginTop: 0,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                            display: true,
                            position: theme.direction === 'rtl' ? 'right' : 'left',
                            ticks: {
                              beginAtZero: false,
                              color:"#9eaecf", 
                              font: {
                                size: '12px',
                              },
                              padding: 15,
                            },
                            grid: {
                              color: "rgba(82, 100, 132, .2)",
                              zeroLineColor: "rgba(82, 100, 132, .2)",
                              tickMarkLength: 0,
                              drawTicks:false,
                            },
                        },
                        x: {
                            display: true,
                            reverse: theme.direction === 'rtl' ? true : false,
                            ticks: {
                              align:'inner',
                              color:"#9eaecf", 
                              font: {
                                size: '12px',
                              },
                              source: "auto",
                              padding: 10,
                            },
                            grid: {
                              color: "transparent",
                              tickMarkLength: 10,
                              zeroLineColor: "rgba(82, 100, 132, .2)",
                              offsetGridLines: true,
                              drawTicks:false,
                            },
                        },
                      },
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Filled Line Chart</Block.Title>
                <Block.Text>Alternetly, you can use line chart with some background to display more visualy.</Block.Text>
            </Block.Head>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                <div className="col-span-12 md:col-span-6">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter  mb-4">Rounded Chart</h6>
                        <div className="h-[180px]">
                          <Line
                            data={filledLineChart}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                    labels: {
                                      boxWidth: 12,
                                      padding: 20,
                                      color: "#6783b8",
                                    },
                                },
                                tooltip: {
                                    enabled: true,
                                    rtl: theme.direction === 'rtl' ? true : false,
                                    callbacks: {
                                      label: function (context) {
                                          return `${context.parsed.y} BTC`;
                                      },
                                    },
                                    displayColors: false,
                                    backgroundColor: "#eff6ff",
                                    borderColor: '#eff6ff',
                                    titleFont: {
                                      size: '13px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '12px',
                                    },
                                    bodySpacing: 4,
                                    padding: 10,
                                    footerMarginTop: 0,
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                y: {
                                    display: true,
                                    position: theme.direction === 'rtl' ? 'right' : 'left',
                                    ticks: {
                                      beginAtZero: false,
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      padding: 15,
                                    },
                                    grid: {
                                      color: "rgba(82, 100, 132, .2)",
                                      zeroLineColor: "rgba(82, 100, 132, .2)",
                                      tickMarkLength: 0,
                                      drawTicks:false,
                                    },
                                },
                                x: {
                                    display: true,
                                    reverse: theme.direction === 'rtl' ? true : false,
                                    ticks: {
                                      align:'inner',
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      source: "auto",
                                      padding: 10,
                                      autoSkipPadding:8,
                                      reverse: theme.direction === 'rtl' ? true : false,
                                    },
                                    grid: {
                                      color: "transparent",
                                      tickMarkLength: 10,
                                      zeroLineColor: "rgba(82, 100, 132, .2)",
                                      offsetGridLines: true,
                                      drawTicks:false,
                                    },
                                },
                              },
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter  mb-4">Straight Chart</h6>
                        <div className="h-[180px]">
                          <Line
                            data={straightLineChart}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                    labels: {
                                      boxWidth: 12,
                                      padding: 20,
                                      color: "#6783b8",
                                    },
                                },
                                tooltip: {
                                    enabled: true,
                                    rtl: theme.direction === 'rtl' ? true : false,
                                    callbacks: {
                                      label: function (context) {
                                          return `${context.parsed.y} BTC`;
                                      },
                                    },
                                    displayColors: false,
                                    backgroundColor: "#eff6ff",
                                    borderColor: '#eff6ff',
                                    titleFont: {
                                      size: '13px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '12px',
                                    },
                                    bodySpacing: 4,
                                    padding: 10,
                                    footerMarginTop: 0,
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                y: {
                                    display: true,
                                    position: theme.direction === 'rtl' ? 'right' : 'left',
                                    ticks: {
                                      beginAtZero: false,
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      padding: 15,
                                    },
                                    grid: {
                                      color: "rgba(82, 100, 132, .2)",
                                      zeroLineColor: "rgba(82, 100, 132, .2)",
                                      tickMarkLength: 0,
                                      drawTicks:false,
                                    },
                                },
                                x: {
                                    display: true,
                                    reverse: theme.direction === 'rtl' ? true : false,
                                    ticks: {
                                      align:'inner',
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      source: "auto",
                                      padding: 10,
                                      reverse: theme.direction === 'rtl' ? true : false,
                                    },
                                    grid: {
                                      color: "transparent",
                                      tickMarkLength: 10,
                                      zeroLineColor: "rgba(82, 100, 132, .2)",
                                      offsetGridLines: true,
                                      drawTicks:false,
                                    },
                                },
                              },
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
            </div>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Bar Chart - Single</Block.Title>
                <Block.Text>A bar chart provides a way of showing data values represented as vertical bars.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="h-[260px]">
                  <Bar
                    data={barChartData}
                    options={{
                      plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
                            displayColors: false,
                            callbacks: {
                              title: function() {
                                  return false;
                              },
                              label: function (context) {
                                  return `${context.parsed.y} People`;
                              },
                            },
                            backgroundColor: "#eff6ff",
                            titleFont: {
                              size: '11px',
                            },
                            titleColor: "#6783b8",
                            titleMarginBottom: 6,
                            bodyColor: "#9eaecf",
                            bodyFont: {
                              size: '9px',
                            },
                            bodySpacing: 4,
                            padding: 8,
                            footerMarginTop: 0,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                            display: true,
                            stacked: false,
                            position: theme.direction === 'rtl' ? 'right' : 'left',
                            ticks: {
                              beginAtZero: true,
                              color:"#9eaecf", 
                              font: {
                                size: '12px',
                              },
                              padding: 10,
                            },
                            grid: {
                              color: "rgba(82, 100, 132, .2)",
                              zeroLineColor: "rgba(82, 100, 132, .2)",
                              tickMarkLength: 0,
                              drawTicks:false,
                            },
                        },
                        x: {
                            display: true,
                            stacked: false,
                            reverse: theme.direction === 'rtl' ? true : false,
                            ticks: {
                              color:"#9eaecf", 
                              font: {
                                size: '12px',
                              },
                              source: "auto",
                              padding: 10,
                            },
                            grid: {
                              color: "transparent",
                              tickMarkLength: 10,
                              zeroLineColor: "transparent",
                              drawTicks:false,
                            },
                        },
                      },
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Bar Chart - Multiple</Block.Title>
                <Block.Text>A bar chart provides a way of comparison of multiple data sets side by side or with stacked view.</Block.Text>
            </Block.Head>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                <div className="col-span-12 md:col-span-6">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter mb-4">Multiple Bar</h6>
                        <div className="h-[180px]">
                          <Bar
                            data={barChartMultiple}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: true,
                                    displayColors: false,
                                    callbacks: {
                                      title: function() {
                                          return false;
                                      },
                                      label: function (context) {
                                          return `${context.parsed.y} USD`;
                                      },
                                    },
                                    backgroundColor: "#eff6ff",
                                    titleFont: {
                                      size: '11px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '9px',
                                    },
                                    bodySpacing: 4,
                                    padding: 8,
                                    footerMarginTop: 0,
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                y: {
                                    display: true,
                                    stacked: false,
                                    position: theme.direction === 'rtl' ? 'right' : 'left',
                                    ticks: {
                                      beginAtZero: true,
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      padding: 10,
                                    },
                                    grid: {
                                      color: "rgba(82, 100, 132, .2)",
                                      zeroLineColor: "rgba(82, 100, 132, .2)",
                                      tickMarkLength: 0,
                                      drawTicks:false,
                                    },
                                },
                                x: {
                                    display: true,
                                    stacked: false,
                                    reverse: theme.direction === 'rtl' ? true : false,
                                    ticks: {
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      source: "auto",
                                      padding: 10,
                                    },
                                    grid: {
                                      color: "transparent",
                                      tickMarkLength: 10,
                                      zeroLineColor: "transparent",
                                      drawTicks:false,
                                    },
                                },
                              },
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter mb-4">Stacked Bar</h6>
                        <div className="h-[180px]">
                          <Bar
                            data={barChartStacked}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: true,
                                    displayColors: false,
                                    callbacks: {
                                      title: function() {
                                          return false;
                                      },
                                      label: function (context) {
                                          return `${context.parsed.y} USD`;
                                      },
                                    },
                                    backgroundColor: "#eff6ff",
                                    titleFont: {
                                      size: '11px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '9px',
                                    },
                                    bodySpacing: 4,
                                    padding: 8,
                                    footerMarginTop: 0,
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                y: {
                                    display: true,
                                    stacked: true,
                                    position: theme.direction === 'rtl' ? 'right' : 'left',
                                    ticks: {
                                      beginAtZero: true,
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      padding: 10,
                                    },
                                    grid: {
                                      color: "rgba(82, 100, 132, .2)",
                                      zeroLineColor: "rgba(82, 100, 132, .2)",
                                      tickMarkLength: 0,
                                      drawTicks:false,
                                    },
                                },
                                x: {
                                    display: true,
                                    stacked: true,
                                    reverse: theme.direction === 'rtl' ? true : false,
                                    ticks: {
                                      color:"#9eaecf", 
                                      font: {
                                        size: '12px',
                                      },
                                      source: "auto",
                                      padding: 10,
                                    },
                                    grid: {
                                      color: "transparent",
                                      tickMarkLength: 10,
                                      zeroLineColor: "transparent",
                                      drawTicks:false,
                                    },
                                },
                              },
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
            </div>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Pie & Donught Charts</Block.Title>
                <Block.Text>Pie and doughnut charts are probably the most commonly used charts. It use to show relational proportions between data.</Block.Text>
            </Block.Head>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                <div className="col-span-12 md:col-span-4">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter text-center mb-4">Pie Chart</h6>
                        <div className="h-[180px]">
                          <Pie
                            data={pieChartData}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: true,
                                    rtl: theme.direction === 'rtl' ? true : false,
                                    displayColors: false,
                                    callbacks: {
                                      label: function (context) {
                                          return `${context.parsed} BTC`;
                                      },
                                    },
                                    backgroundColor: "#eff6ff",
                                    titleFont: {
                                      size: '13px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '12px',
                                    },
                                    bodySpacing: 4,
                                    padding: 10,
                                    footerMarginTop: 0,
                                },
                              },
                              rotation: -1.5,
                              // cutoutPercentage: 70,
                              maintainAspectRatio: false,
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter text-center mb-4">Doughnut Chart</h6>
                        <div className="h-[180px]">
                          <Doughnut
                            data={doughnutChartData}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: true,
                                    rtl: theme.direction === 'rtl' ? true : false,
                                    displayColors: false,
                                    callbacks: {
                                      label: function (context) {
                                          return `${context.parsed} BTC`;
                                      },
                                    },
                                    backgroundColor: "#eff6ff",
                                    titleFont: {
                                      size: '13px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '12px',
                                    },
                                    bodySpacing: 4,
                                    padding: 10,
                                    footerMarginTop: 0,
                                },
                              },
                              rotation: 1,
                              cutoutPercentage: 40,
                              maintainAspectRatio: false,
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <Card>
                      <Card.Body>
                        <h6 className="font-heading font-bold text-base/tighter text-center mb-4">Polar Chart</h6>
                        <div className="h-[180px]">
                          <PolarArea
                            data={polarChartData}
                            options={{
                              plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: true,
                                    displayColors: false,
                                    rtl: theme.direction === 'rtl' ? true : false,
                                    callbacks: {
                                      label: function (context) {
                                          return `${context.parsed.r} BTC`;
                                      },
                                    },
                                    backgroundColor: "#eff6ff",
                                    titleFont: {
                                      size: '13px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                      size: '12px',
                                    },
                                    bodySpacing: 4,
                                    padding: 10,
                                    footerMarginTop: 0,
                                },
                              },
                              maintainAspectRatio: false,
                            }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                </div>
            </div>
          </Block>

        </div>
    </>
  )
}

export default ChartJsPage