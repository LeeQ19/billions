import { API_URL } from "../constants";
import Billion from "../../components/billion";
import styles from "../../styles/home.module.css";


export const metadata = {
  title: "Home",
};

interface IBillion {
  id: string
  name: string
  squareImage: string
  netWorth: number
  industries: string[]
}

async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const billions = await getBillions();
  return (
    <div className={styles.container}>
      {billions.map((billion: IBillion) => (
        <Billion
          key={billion.id}
          id={billion.id}
          name={billion.name}
          square_image={billion.squareImage}
          netWorth={billion.netWorth}
          industry={billion.industries[0]}
        />
      ))}
    </div>
  );
}
