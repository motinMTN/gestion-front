import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartData {
  fecha: string;
  venta: number;
  costo: number;
}

interface ChartProps {
  data: ChartData[];
}

const LineGraphic: React.FC<ChartProps> = ({ data }) => {
  const series = [
    {
      name: 'Ventas',
      data: data.map((item) => item.venta),
    },
    {
      name: 'Costos',
      data: data.map((item) => item.costo),
    },
  ];

  const options = {
    xaxis: {
      categories: data.map((item) => item.fecha),
    },
  };

  return <ReactApexChart options={options} series={series} type="line" stroke="smooth" height={350} />;
};

export default LineGraphic;