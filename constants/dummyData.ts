export const dashboardData = {
  metrics: [
    {
      id: 1,
      title: "Total Sales",
      value: "$32,450",
      view: "sales",
      icon: "/dollar.svg",
    },
    {
      id: 2,
      title: "Orders",
      value: 1234,
      view: "orders",
      icon: "/ordersyellow.svg",
    },
    {
      id: 3,
      title: "Customers",
      value: 945,
      view: "customers",
      icon: "/users.svg",
    },
    {
      id: 4,
      title: "Revenue",
      value: "$54,200",
      view: "revenue",
      icon: "/revenue.svg",
    },
  ],
  recentOrders: [
    {
      id: 201,
      customer: "Emily Clark",
      item: "Pasta",
      price: "$14",
      status: "Delivered",
    },
    {
      id: 202,
      customer: "Michael Lee",
      item: "Sushi",
      price: "$18",
      status: "Pending",
    },
    {
      id: 203,
      customer: "Sarah Adams",
      item: "Burger",
      price: "$10",
      status: "Delivered",
    },
    {
      id: 204,
      customer: "David Miller",
      item: "Salad",
      price: "$9",
      status: "Cancelled",
    },
  ],
};

export const chartData = {
  salesBarChart: [
    { month: "Aug", sales: 8000 },
    { month: "Sep", sales: 5000 },
    { month: "Oct", sales: 12000 },
    { month: "Nov", sales: 25000 },
    { month: "Dec", sales: 12000 },
    { month: "Jan", sales: 15000 },
    { month: "Feb", sales: 4000 },
  ],
  revenueLineChart: [
    { month: "Aug", revenue: 9000 },
    { month: "Sep", revenue: 11000 },
    { month: "Oct", revenue: 12000 },
    { month: "Nov", revenue: 30000 },
    { month: "Dec", revenue: 17000 },
    { month: "Jan", revenue: 20000 },
    { month: "Feb", revenue: 14000 },
  ],
  customerGrowth: [
    { month: "Jan", customers: 200 },
    { month: "Feb", customers: 400 },
    { month: "Mar", customers: 700 },
    { month: "Apr", customers: 1200 },
    { month: "May", customers: 1800 },
    { month: "Jun", customers: 2400 },
  ],
};

export const revenueData = [
  { month: "Aug", revenue: 6000 },
  { month: "Sep", revenue: 18000 },
  { month: "Oct", revenue: 2000 },
  { month: "Nov", revenue: 25000 },
  { month: "Dec", revenue: 12000 },
  { month: "Jan", revenue: 15000 },
  { month: "feb", revenue: 4000 },
];

export const salesData = {
  todaySales: 3450,
  targetSales: 5000,
  lastWeekSales: 8200,
  lastMonthSales: 28500,
};

export const PreferredFood = {

    data1: [
      { name: "Pizza", value: 35 },
      { name: "Burger", value: 25 },
      { name: "Pasta", value: 20 },
      { name: "Sushi", value: 10 },
      { name: "Salad", value: 10 },
    ],
  
    data2: [
      { name: "Pizza", value: 45 },
      { name: "Burger", value: 30 },
      { name: "Pasta", value: 15 },
      { name: "Sushi", value: 5 },
      { name: "Salad", value: 5 },
    ],

  };

export const analyticsData = [
  { month: "Jan", traffic: 2200, orders: 1800, engagement: 2000 },
  { month: "Feb", traffic: 1500, orders: 1000, engagement: 800 },
  { month: "Mar", traffic: 1700, orders: 1100, engagement: 850 },
  { month: "Apr", traffic: 1200, orders: 200, engagement: 900 },
  { month: "May", traffic: 2200, orders: 1000, engagement: 1000 },
  { month: "Jun", traffic: 2500, orders: 1500, engagement: 1200 },
  { month: "Jul", traffic: 2700, orders: 900, engagement: 1300 },
  { month: "Aug", traffic: 3000, orders: 1800, engagement: 1500 },
  { month: "Sep", traffic: 3300, orders: 1900, engagement: 1600 },
  { month: "Oct", traffic: 3500, orders: 2000, engagement: 1700 },
  { month: "Nov", traffic: 3800, orders: 2100, engagement: 1800 },
  { month: "Dec", traffic: 4000, orders: 2200, engagement: 1900 },
];

export const InHouse = [
  { month: "Jan", customers: 150 },
  { month: "Feb", customers: 180 },
  { month: "Mar", customers: 210 },
  { month: "Apr", customers: 250 },
  { month: "May", customers: 300 },
  { month: "Jun", customers: 350 },
  { month: "Jul", customers: 200 },
  { month: "Aug", customers: 250 },
  { month: "Sep", customers: 120 },
  { month: "Oct", customers: 400 },
  { month: "Nov", customers: 700 },
  { month: "Dec", customers: 650 },
];


export const geoData = [
  ["Country", "Users"],
  ["United States", 1000],
  ["India", 1050],
  ["China", 600],
  ["Australia", 800],
  ["Sri Lanka", 650],
  ["United Kingdom", 400],
  ["France", 350],
  ["Japan", 450],
];
