import { API_URL } from "../app/constants";
import styles from "../styles/billion-info.module.css";

interface IFinancialAsset {
  exchange: string
  ticker: string
  companyName: string
  numberOfShares: number
  sharePrice: number
  currencyCode: string
  exchangeRate: number
  interactive: boolean
  currentPrice: number
  exerciseOptionPrice?: number
}

interface IInfo {
  id: string
  state: string
  city: string
  name: string
  country: string
  position: number
  industries: string[]
  financialAssets: IFinancialAsset[]
  thumbnail: string
  squareImage: string
  bio: string[]
  about: string[]
  netWorth: number
}

export async function getInfo(id: string): Promise<IInfo> {
  const response = await fetch(`${API_URL}person/${id}`);
  return response.json();
}

export default async function Info({ id }: { id: string }) {
  const info = await getInfo(id);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <img src={info.squareImage} alt={info.name} />
        </div>
        <div className={styles.bio}>
          <h3>{info.name}</h3>
          <h4>Networth: {Math.round(info.netWorth * 1e-2) * 1e-1} B</h4>
          <h4>Country: {info.country}</h4>
          <h4>Industries: {info.industries.join(' | ')}</h4>
          <span>{info.bio.join(' ')}</span>
        </div>
      </div>
      <div className={styles.assets}>
        <h3>Financial Assets</h3>
        <div className={styles.assetsContainer}>
          {info.financialAssets.map((financialAsset, index) => (
            <div key={index} className={styles.assetContainer}>
              <h4>{financialAsset.companyName}</h4>
              <h5>Ticker: {financialAsset.ticker}</h5>
              <h5>Shares: {financialAsset.numberOfShares}</h5>
              <h5>Total: {Intl.NumberFormat('en-US', { style: 'currency', currency: financialAsset.currencyCode }).format(financialAsset.numberOfShares * financialAsset.currentPrice)}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
