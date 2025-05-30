export var totalDeposit = {
    labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
    dataUnit: "USD",
    stacked: true,
    datasets: [
      {
        label: "Active User", // @v2.0
        backgroundColor: [
          "rgba(9, 113, 254, 0.5)",
          "rgba(9, 113, 254, 0.5)",
          "rgba(9, 113, 254, 0.5)",
          "rgba(9, 113, 254, 0.5)",
          "rgba(9, 113, 254, 0.5)",
          "rgba(9, 113, 254, 0.5)",
          "rgb(101, 118, 255)",
        ],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [7200, 8200, 7800, 9500, 5500, 9200, 9690],
      },
    ],
  };
  
  export var totalWithdraw = {
    labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
    dataUnit: "USD",
    stacked: true,
    datasets: [
      {
        label: "Active User",
        backgroundColor: [
          "rgba(129, 107, 255, 0.2)",
          "rgba(129, 107, 255, 0.2)",
          "rgba(129, 107, 255, 0.2)",
          "rgba(129, 107, 255, 0.2)",
          "rgba(129, 107, 255, 0.2)",
          "rgba(129, 107, 255, 0.2)",
          "rgb(129, 107, 255)",
        ],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [7200, 8200, 7800, 9500, 5500, 9200, 9690],
      },
    ],
  };
  
  export var totalBalance = {
    labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
    dataUnit: "USD",
    stacked: true,
    datasets: [
      {
        label: "Active User",
        backgroundColor: [
          "rgba(85, 155, 251, 0.2)",
          "rgba(85, 155, 251, 0.2)",
          "rgba(85, 155, 251, 0.2)",
          "rgba(85, 155, 251, 0.2)",
          "rgba(85, 155, 251, 0.2)",
          "rgba(85, 155, 251, 0.2)",
          "rgb(85, 155, 251)",
        ],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        data: [6000, 8200, 7800, 9500, 5500, 9200, 9690],
      },
    ],
  };