import { useState } from "react";
import Chart from "react-apexcharts";
import { DashboardCard } from "../../../../components/dashboard-card/dashboard-card";
import { PaymentForecastingChartSwitch } from "../../../payment-forecasting-chart-switch/payment-forecasting-chart-switch";
import { DashboardResponsiveDR } from "../../../dashboard-responsive-DR/dashboard-responsive-DR";
const RandomNumber = () => {
  return Math.floor(Math.random() * 200);
};
const state = {
  options: {
    chart: {
      id: "basic-bar",
      background: "#fff",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: { curve: "straight", width: 2 },
    markers: {
      size: [4, 4],
      colors: ["#fff", "#fff"],
      strokeColors: "#565666",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        offsetX: -16,
        offsetY: 0,
        formatter: function (value) {
          if (value === 0) {
            return value;
          }
          return "£" + "" + value + "" + "M";
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      markers: {
        radius: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
  },

  series: [
    {
      name: "Actual",
      data: [
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
      ],
      color: "#7987FF",
    },
    {
      name: "Forecast",
      data: [
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
        RandomNumber(),
      ],

      color: "#FF7979",
    },
  ],
};

export const PaymentForecastingChart = () => {
  const [paymentForecastSwitch, setPaymentForecastSwitch] =
    useState("Cash Inflow");
  return (
    <>
      <DashboardCard
        heading={"Payment Forecasting"}
        headingSibling={
          <>
            <PaymentForecastingChartSwitch
              data={["Cash Inflow", "Cash Outflow"]}
              setSwitch={setPaymentForecastSwitch}
              chartSwitch={paymentForecastSwitch}
            />{" "}
            <DashboardResponsiveDR />
          </>
        }
      >
        <div style={{ marginTop: "20px" }}>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={300}
          />
        </div>
      </DashboardCard>
    </>
  );
};
