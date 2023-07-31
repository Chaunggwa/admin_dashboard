
import Barchart from "../../Components/barchartbox/Barchart";
import ChartBox from "../../Components/chartbox/ChartBox";
import TopCustomers from "../../Components/topcustomers/TopCustomers";
import PieChart from "../../Components/piechart/PieChart";
import "./Home.scss";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


const data1 = [
    {
      name: 'Page A',
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 7098,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 1000,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 1098,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4120,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data3 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 1100,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data4 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data5 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 9000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const chart1 = {
    icon: <AttachMoneyIcon />,
    title: "Total Revenue",
    number: 45,
    percent: 60,
    data: data1
};



const chart2 = {
    icon: <AttachMoneyIcon />,
    title: "Total Sales",
    number: 78.9,
    percent: 90,
    data: data2
};

const chart3 = {
    icon: <PeopleOutlineIcon />,
    title: "Total Customers",
    number: 48.9,
    percent: 30,
    data: data3
};

const chart4 = {
    icon: <PeopleOutlineIcon />,
    title: "Total Orders",
    number: 78.9,
    percent: 77,
    data: data4
};

const chart5 = {
    icon: <PeopleOutlineIcon />,
    title: "Total Visits",
   
    data: data5
};

const chart6 = {
    icon: <PeopleOutlineIcon />,
    title: "Total Products",
   
    data: data2
};

const data7 = [
    { name: 'Mobile', value: 400 },
    { name: 'Laptop', value: 300 },
    { name: 'Desktop', value: 300 },
    { name: 'Tablet', value: 200 },
  ];
  const COLORS = ['#071e22', '#1D7874', '#165baa', '#FF8042'];
  const chart7 = {
    icon: <PeopleOutlineIcon />,
    title: "Reached from Source",
    data: data7,
    COLORS
};


function Home() {
    return (
        <div className="home">
            <div className="box box1"><TopCustomers /></div>
            <div className="box box2"><ChartBox {...chart1} /></div>
            <div className="box box3"><ChartBox {...chart2} /></div>
            <div className="box box4"><ChartBox {...chart3} /></div>
            <div className="box box5"><PieChart {...chart7}/></div>
            <div className="box box6"><Barchart {...chart5} /></div>
            
            
        </div>
    );
}

export default Home;