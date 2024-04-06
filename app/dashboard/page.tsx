// Esto es un componente que se renderiza en el servidor

import { fetchRevenue } from '../lib/data';

export default async function DashboardPage() {
  const revenue = await fetchRevenue();
  console.log(revenue);

  return <p>Dashboard Page</p>;
}
