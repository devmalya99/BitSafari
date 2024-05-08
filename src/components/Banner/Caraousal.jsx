import React, { useContext, useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api'
import axios from 'axios'
import { GetCryptoState } from '../../context/cryptoContext'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const Caraousal = () => {
    const {currency} = GetCryptoState()
    const [count,setCount] = useState(0)
    //const [trendingCoins,setTrendingCoins] = useState([])
   
    

    // const fetchTrendingCoins = async() => {
    //     const {data}= await axios.get(TrendingCoins(currency))
    //     setTrendingCoins(data)
    // }


    // useEffect(()=>{
    //     fetchTrendingCoins()
        
    // },[currency])

 const trendingCoins =
 [
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 5219369,
        "market_cap": 102750159888437,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 109556370258635,
        "total_volume": 2105492437420,
        "high_24h": 5375650,
        "low_24h": 5191754,
        "price_change_24h": -93419.13753409125,
        "price_change_percentage_24h": -1.75838,
        "market_cap_change_24h": -1906955326792.0156,
        "market_cap_change_percentage_24h": -1.8221,
        "circulating_supply": 19695371,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 6110932,
        "ath_change_percentage": -14.87379,
        "ath_date": "2024-03-14T07:10:36.635Z",
        "atl": 3993.42,
        "atl_change_percentage": 130164.42764,
        "atl_date": "2013-07-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:36.519Z",
        "price_change_percentage_24h_in_currency": -1.7583825379813849
    },
    {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        "current_price": 251980,
        "market_cap": 30242051546406,
        "market_cap_rank": 2,
        "fully_diluted_valuation": 30242051546406,
        "total_volume": 789849252842,
        "high_24h": 261130,
        "low_24h": 250334,
        "price_change_24h": -4321.100018003461,
        "price_change_percentage_24h": -1.68595,
        "market_cap_change_24h": -524690616022.6992,
        "market_cap_change_percentage_24h": -1.70538,
        "circulating_supply": 120103321.127596,
        "total_supply": 120103321.127596,
        "max_supply": null,
        "ath": 362338,
        "ath_change_percentage": -30.65124,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 28.13,
        "atl_change_percentage": 893131.91571,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
            "times": 63.54536314737146,
            "currency": "btc",
            "percentage": 6354.536314737146
        },
        "last_updated": "2024-05-08T06:59:10.401Z",
        "price_change_percentage_24h_in_currency": -1.6859472757088125
    },
    {
        "id": "ripple",
        "symbol": "xrp",
        "name": "XRP",
        "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
        "current_price": 43.51,
        "market_cap": 2404351152389,
        "market_cap_rank": 7,
        "fully_diluted_valuation": 4352339159635,
        "total_volume": 91519031781,
        "high_24h": 45.32,
        "low_24h": 43.26,
        "price_change_24h": -1.1993418435746008,
        "price_change_percentage_24h": -2.68273,
        "market_cap_change_24h": -57755574106.31836,
        "market_cap_change_percentage_24h": -2.34578,
        "circulating_supply": 55235913166,
        "total_supply": 99987652657,
        "max_supply": 100000000000,
        "ath": 215.1,
        "ath_change_percentage": -79.80045,
        "ath_date": "2018-01-07T00:00:00.000Z",
        "atl": 0.159343,
        "atl_change_percentage": 27168.31252,
        "atl_date": "2013-08-16T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:33.796Z",
        "price_change_percentage_24h_in_currency": -2.6827334243348164
    },
    {
        "id": "solana",
        "symbol": "sol",
        "name": "Solana",
        "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
        "current_price": 12335.35,
        "market_cap": 5526287516917,
        "market_cap_rank": 5,
        "fully_diluted_valuation": 7098061624437,
        "total_volume": 241355782035,
        "high_24h": 13272.13,
        "low_24h": 12203.41,
        "price_change_24h": -554.0721012314807,
        "price_change_percentage_24h": -4.29866,
        "market_cap_change_24h": -246870676472.85645,
        "market_cap_change_percentage_24h": -4.27618,
        "circulating_supply": 448099558.024742,
        "total_supply": 575547013.615571,
        "max_supply": null,
        "ath": 19286.66,
        "ath_change_percentage": -35.89619,
        "ath_date": "2021-11-06T21:54:35.825Z",
        "atl": 38.03,
        "atl_change_percentage": 32413.49084,
        "atl_date": "2020-05-11T19:35:23.449Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:16.294Z",
        "price_change_percentage_24h_in_currency": -4.298657767734978
    },
    {
        "id": "binancecoin",
        "symbol": "bnb",
        "name": "BNB",
        "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
        "current_price": 48821,
        "market_cap": 7505882649743,
        "market_cap_rank": 4,
        "fully_diluted_valuation": 7505882649743,
        "total_volume": 68946041247,
        "high_24h": 49888,
        "low_24h": 48069,
        "price_change_24h": -165.92038447569212,
        "price_change_percentage_24h": -0.3387,
        "market_cap_change_24h": -43012145939.103516,
        "market_cap_change_percentage_24h": -0.56978,
        "circulating_supply": 153856150,
        "total_supply": 153856150,
        "max_supply": 200000000,
        "ath": 52934,
        "ath_change_percentage": -7.85154,
        "ath_date": "2024-03-16T00:10:54.176Z",
        "atl": 2.58,
        "atl_change_percentage": 1887039.50422,
        "atl_date": "2017-10-19T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:22.973Z",
        "price_change_percentage_24h_in_currency": -0.3387038240070209
    },
    {
        "id": "dogecoin",
        "symbol": "doge",
        "name": "Dogecoin",
        "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
        "current_price": 12.47,
        "market_cap": 1796617419098,
        "market_cap_rank": 9,
        "fully_diluted_valuation": 1796636979921,
        "total_volume": 95010294019,
        "high_24h": 13.32,
        "low_24h": 12.4,
        "price_change_24h": -0.5700031191227346,
        "price_change_percentage_24h": -4.37186,
        "market_cap_change_24h": -81181302607.36182,
        "market_cap_change_percentage_24h": -4.32322,
        "circulating_supply": 144200956383.705,
        "total_supply": 144203156383.705,
        "max_supply": null,
        "ath": 53.62,
        "ath_change_percentage": -76.77006,
        "ath_date": "2021-05-08T05:08:23.458Z",
        "atl": 0.00552883,
        "atl_change_percentage": 225180.20363,
        "atl_date": "2015-05-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:32.337Z",
        "price_change_percentage_24h_in_currency": -4.371862810887312
    },
    {
        "id": "cardano",
        "symbol": "ada",
        "name": "Cardano",
        "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
        "current_price": 36.9,
        "market_cap": 1303589219727,
        "market_cap_rank": 11,
        "fully_diluted_valuation": 1659982732399,
        "total_volume": 24990764241,
        "high_24h": 38.06,
        "low_24h": 36.59,
        "price_change_24h": -0.4879772050384119,
        "price_change_percentage_24h": -1.30527,
        "market_cap_change_24h": -17021405078.349121,
        "market_cap_change_percentage_24h": -1.2889,
        "circulating_supply": 35338629578.9538,
        "total_supply": 45000000000,
        "max_supply": 45000000000,
        "ath": 225.26,
        "ath_change_percentage": -83.65973,
        "ath_date": "2021-09-02T06:00:10.474Z",
        "atl": 1.38,
        "atl_change_percentage": 2576.16796,
        "atl_date": "2017-11-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:27.046Z",
        "price_change_percentage_24h_in_currency": -1.3052729823494467
    },
    {
        "id": "chainlink",
        "symbol": "link",
        "name": "Chainlink",
        "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
        "current_price": 1161.61,
        "market_cap": 681868663833,
        "market_cap_rank": 18,
        "fully_diluted_valuation": 1161418322528,
        "total_volume": 26344799172,
        "high_24h": 1228.53,
        "low_24h": 1156.1,
        "price_change_24h": -27.373335737433308,
        "price_change_percentage_24h": -2.30224,
        "market_cap_change_24h": -16468347514.022095,
        "market_cap_change_percentage_24h": -2.35822,
        "circulating_supply": 587099971.3083414,
        "total_supply": 1000000000,
        "max_supply": 1000000000,
        "ath": 3862.15,
        "ath_change_percentage": -69.9457,
        "ath_date": "2021-05-10T00:13:57.214Z",
        "atl": 9.55,
        "atl_change_percentage": 12058.62489,
        "atl_date": "2017-11-29T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:29.021Z",
        "price_change_percentage_24h_in_currency": -2.3022413472547543
    },
    {
        "id": "polkadot",
        "symbol": "dot",
        "name": "Polkadot",
        "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
        "current_price": 590.24,
        "market_cap": 803460793332,
        "market_cap_rank": 16,
        "fully_diluted_valuation": 851223007806,
        "total_volume": 15193685469,
        "high_24h": 608.22,
        "low_24h": 580.38,
        "price_change_24h": -3.403781226153569,
        "price_change_percentage_24h": -0.57337,
        "market_cap_change_24h": -3672309928.229126,
        "market_cap_change_percentage_24h": -0.45498,
        "circulating_supply": 1361734486.12808,
        "total_supply": 1442683618.98755,
        "max_supply": null,
        "ath": 4095.22,
        "ath_change_percentage": -85.59361,
        "ath_date": "2021-11-04T14:10:09.301Z",
        "atl": 202.26,
        "atl_change_percentage": 191.69473,
        "atl_date": "2020-08-19T03:44:11.556Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:33.043Z",
        "price_change_percentage_24h_in_currency": -0.5733677426312503
    },
    {
        "id": "stellar",
        "symbol": "xlm",
        "name": "Stellar",
        "image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
        "current_price": 9.01,
        "market_cap": 260585708308,
        "market_cap_rank": 38,
        "fully_diluted_valuation": 450357646351,
        "total_volume": 4966923238,
        "high_24h": 9.25,
        "low_24h": 8.96,
        "price_change_24h": -0.06976608407089202,
        "price_change_percentage_24h": -0.7686,
        "market_cap_change_24h": -1642367527.2520447,
        "market_cap_change_percentage_24h": -0.62631,
        "circulating_supply": 28932008119.4148,
        "total_supply": 50001786995.3935,
        "max_supply": 50001786995.3935,
        "ath": 58.01,
        "ath_change_percentage": -84.47796,
        "ath_date": "2021-05-16T09:48:45.220Z",
        "atl": 0.02966141,
        "atl_change_percentage": 30255.58179,
        "atl_date": "2015-03-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-05-08T06:59:39.173Z",
        "price_change_percentage_24h_in_currency": -0.7685981159906218
    }
]

    

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCount(prev=>(prev+4)%trendingCoins.length)
    },3000)

    return ()=>clearInterval(interval)
  },[trendingCoins.length])
 




  return (
    <div className='Caraousal Container flex justify-start gap-12 border-red-700 mb-8'>
        {
            trendingCoins.slice(count,count+4).map((each)=>{
                return(
                    <Link to={`/coins/${each.id}`}key={each.id} className='w-[36px] sm:w-[48px] md:w-[56px] lg:w-[120px] shrink-0'
                    >
                        <img src={each.image} 
                         className="transition duration-300 ease-in-out"
                        />
                        <div className='flex flex-col'>
                        <span className='text-lg font-semibold mb-2'>{each.name}</span>
                        <span className={each.market_cap_change_percentage_24h.toFixed(2)>0 ?'text-green-500 font-semibold bg-white': 'text-red-600 font-semibold bg-black text-xl rounded-lg mb-4'}>{each.market_cap_change_percentage_24h.toFixed(2)}%</span>
                        <div className={each.market_cap_change_percentage_24h.toFixed(2)>0 ?'text-green-500 font-semibold': 'text-yellow-500 font-semibold  text-lg rounded-lg'}>{each.current_price}{currency==='INR'? '₹' : '$'}</div>
                        </div>
                        
                        
                    </Link>
                )
            })
        }
       

        
    </div>
  )
}

export default Caraousal