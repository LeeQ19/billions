import Link from "next/link";
import Info, { getInfo } from "../../../components/billion-info";
import styles from "../../../styles/person.module.css";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const info = await getInfo(id);
  return {title: info.name};
}

export default async function PersonDetailPage({ params: { id } }: IParams) {
  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
          <div>
            <p>
              <span>&lsaquo;</span>
              Home
            </p>
          </div>
        </Link>
      </header>
      <Info id={id} />
    </>
  );
}
