import Link from "next/link";
import styles from "../styles/billion.module.css";

interface IBillionProps {
  id: string
  name: string
  square_image: string
  netWorth: number
  industry: string
}

export default function Billion({ id, name, square_image, netWorth, industry }: IBillionProps) {
  return (
    <div className={styles.billion}>
      <Link prefetch href={`/person/${id}`}>
        <img src={square_image} alt={name} />
        <h3>{name}</h3>
        <h4>{Math.round(netWorth * 1e-3)} Billion  |  {industry}</h4>
      </Link>
    </div>
  );
}
