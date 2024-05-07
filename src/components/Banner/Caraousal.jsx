import React, { useContext, useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api'
import axios from 'axios'
import { GetCryptoState } from '../../context/cryptoContext'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const Caraousal = () => {
    const {currency} = GetCryptoState()
    const [count,setCount] = useState(0)
    const [trendingCoins,setTrendingCoins] = useState([])
    const dummyArr= 
    [
        {
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin",
            "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            "current_price": 5318968,
            "market_cap": 104751055155947,
            "market_cap_rank": 1,
            "fully_diluted_valuation": 111691098575668,
            "total_volume": 984259027908,
            "high_24h": 5371629,
            "low_24h": 5248326,
            "price_change_24h": 6990.88,
            "price_change_percentage_24h": 0.13161,
            "market_cap_change_24h": 250821175182,
            "market_cap_change_percentage_24h": 0.24002,
            "circulating_supply": 19695143,
            "total_supply": 21000000,
            "max_supply": 21000000,
            "ath": 6110932,
            "ath_change_percentage": -13.10136,
            "ath_date": "2024-03-14T07:10:36.635Z",
            "atl": 3993.42,
            "atl_change_percentage": 132876.69517,
            "atl_date": "2013-07-05T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:44.453Z",
            "price_change_percentage_24h_in_currency": 0.13160599611855878
        },
        {
            "id": "ethereum",
            "symbol": "eth",
            "name": "Ethereum",
            "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
            "current_price": 256951,
            "market_cap": 30904897328472,
            "market_cap_rank": 2,
            "fully_diluted_valuation": 30904897328472,
            "total_volume": 1041369962303,
            "high_24h": 261130,
            "low_24h": 254362,
            "price_change_24h": -1982.525557062996,
            "price_change_percentage_24h": -0.76565,
            "market_cap_change_24h": -201071201436.47656,
            "market_cap_change_percentage_24h": -0.64641,
            "circulating_supply": 120101536.931692,
            "total_supply": 120101536.931692,
            "max_supply": null,
            "ath": 362338,
            "ath_change_percentage": -29.17375,
            "ath_date": "2021-11-10T14:24:19.604Z",
            "atl": 28.13,
            "atl_change_percentage": 912162.48868,
            "atl_date": "2015-10-20T00:00:00.000Z",
            "roi": {
                "times": 63.588198657139046,
                "currency": "btc",
                "percentage": 6358.819865713905
            },
            "last_updated": "2024-05-07T12:58:50.651Z",
            "price_change_percentage_24h_in_currency": -0.7656492446612966
        },
        {
            "id": "ripple",
            "symbol": "xrp",
            "name": "XRP",
            "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
            "current_price": 44.79,
            "market_cap": 2474984437490,
            "market_cap_rank": 7,
            "fully_diluted_valuation": 4480199024202,
            "total_volume": 138210241503,
            "high_24h": 47.34,
            "low_24h": 44.08,
            "price_change_24h": 0.704635,
            "price_change_percentage_24h": 1.59838,
            "market_cap_change_24h": 41396461995,
            "market_cap_change_percentage_24h": 1.70105,
            "circulating_supply": 55235913166,
            "total_supply": 99987652657,
            "max_supply": 100000000000,
            "ath": 215.1,
            "ath_change_percentage": -79.18635,
            "ath_date": "2018-01-07T00:00:00.000Z",
            "atl": 0.159343,
            "atl_change_percentage": 27997.3174,
            "atl_date": "2013-08-16T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:21.408Z",
            "price_change_percentage_24h_in_currency": 1.5983830056790562
        },
        {
            "id": "solana",
            "symbol": "sol",
            "name": "Solana",
            "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
            "current_price": 12973.21,
            "market_cap": 5812398707218,
            "market_cap_rank": 5,
            "fully_diluted_valuation": 7465486403579,
            "total_volume": 203491136819,
            "high_24h": 13272.13,
            "low_24h": 12593.37,
            "price_change_24h": 379.83,
            "price_change_percentage_24h": 3.01615,
            "market_cap_change_24h": 175766378847,
            "market_cap_change_percentage_24h": 3.11829,
            "circulating_supply": 448106725.669983,
            "total_supply": 575551478.202518,
            "max_supply": null,
            "ath": 19286.66,
            "ath_change_percentage": -32.88663,
            "ath_date": "2021-11-06T21:54:35.825Z",
            "atl": 38.03,
            "atl_change_percentage": 33939.94335,
            "atl_date": "2020-05-11T19:35:23.449Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:38.486Z",
            "price_change_percentage_24h_in_currency": 3.0161467395355963
        },
        {
            "id": "binancecoin",
            "symbol": "bnb",
            "name": "BNB",
            "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
            "current_price": 49485,
            "market_cap": 7613853265419,
            "market_cap_rank": 4,
            "fully_diluted_valuation": 7613853265419,
            "total_volume": 68971719393,
            "high_24h": 49888,
            "low_24h": 48659,
            "price_change_24h": 525.5,
            "price_change_percentage_24h": 1.07332,
            "market_cap_change_24h": 86960358174,
            "market_cap_change_percentage_24h": 1.15533,
            "circulating_supply": 153856150,
            "total_supply": 153856150,
            "max_supply": 200000000,
            "ath": 52934,
            "ath_change_percentage": -6.52693,
            "ath_date": "2024-03-16T00:10:54.176Z",
            "atl": 2.58,
            "atl_change_percentage": 1914166.60595,
            "atl_date": "2017-10-19T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:45.774Z",
            "price_change_percentage_24h_in_currency": 1.0733228483272617
        },
        {
            "id": "dogecoin",
            "symbol": "doge",
            "name": "Dogecoin",
            "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
            "current_price": 13.13,
            "market_cap": 1895441426926,
            "market_cap_rank": 9,
            "fully_diluted_valuation": 1895522142031,
            "total_volume": 121130851924,
            "high_24h": 13.38,
            "low_24h": 12.9,
            "price_change_24h": -0.05462659424844318,
            "price_change_percentage_24h": -0.41417,
            "market_cap_change_24h": -12832813904.44043,
            "market_cap_change_percentage_24h": -0.67248,
            "circulating_supply": 144186276383.705,
            "total_supply": 144192416383.705,
            "max_supply": null,
            "ath": 53.62,
            "ath_change_percentage": -75.54406,
            "ath_date": "2021-05-08T05:08:23.458Z",
            "atl": 0.00552883,
            "atl_change_percentage": 237069.69708,
            "atl_date": "2015-05-06T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:46.151Z",
            "price_change_percentage_24h_in_currency": -0.4141680904683767
        },
        {
            "id": "cardano",
            "symbol": "ada",
            "name": "Cardano",
            "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
            "current_price": 37.64,
            "market_cap": 1330796651436,
            "market_cap_rank": 11,
            "fully_diluted_valuation": 1694628513560,
            "total_volume": 27988272847,
            "high_24h": 38.7,
            "low_24h": 37.34,
            "price_change_24h": -0.5125999678444302,
            "price_change_percentage_24h": -1.34362,
            "market_cap_change_24h": -18607238777.64673,
            "market_cap_change_percentage_24h": -1.37892,
            "circulating_supply": 35338629578.9538,
            "total_supply": 45000000000,
            "max_supply": 45000000000,
            "ath": 225.26,
            "ath_change_percentage": -83.2991,
            "ath_date": "2021-09-02T06:00:10.474Z",
            "atl": 1.38,
            "atl_change_percentage": 2635.23094,
            "atl_date": "2017-11-02T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:47.387Z",
            "price_change_percentage_24h_in_currency": -1.343615312789904
        },
        {
            "id": "chainlink",
            "symbol": "link",
            "name": "Chainlink",
            "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
            "current_price": 1206.87,
            "market_cap": 708705077281,
            "market_cap_rank": 18,
            "fully_diluted_valuation": 1207128448161,
            "total_volume": 29123968026,
            "high_24h": 1247.42,
            "low_24h": 1185.9,
            "price_change_24h": -27.184591706952006,
            "price_change_percentage_24h": -2.20286,
            "market_cap_change_24h": -19653136784.070312,
            "market_cap_change_percentage_24h": -2.69828,
            "circulating_supply": 587099971.3083414,
            "total_supply": 1000000000,
            "max_supply": 1000000000,
            "ath": 3862.15,
            "ath_change_percentage": -68.80276,
            "ath_date": "2021-05-10T00:13:57.214Z",
            "atl": 9.55,
            "atl_change_percentage": 12521.00429,
            "atl_date": "2017-11-29T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:50.500Z",
            "price_change_percentage_24h_in_currency": -2.202863107162698
        },
        {
            "id": "polkadot",
            "symbol": "dot",
            "name": "Polkadot",
            "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
            "current_price": 599.98,
            "market_cap": 817080908390,
            "market_cap_rank": 16,
            "fully_diluted_valuation": 865682684092,
            "total_volume": 15960894207,
            "high_24h": 608.22,
            "low_24h": 590.27,
            "price_change_24h": 1.33,
            "price_change_percentage_24h": 0.22217,
            "market_cap_change_24h": 3590386027,
            "market_cap_change_percentage_24h": 0.44136,
            "circulating_supply": 1360896611.97749,
            "total_supply": 1441845745.91232,
            "max_supply": null,
            "ath": 4095.22,
            "ath_change_percentage": -85.37813,
            "ath_date": "2021-11-04T14:10:09.301Z",
            "atl": 202.26,
            "atl_change_percentage": 196.05767,
            "atl_date": "2020-08-19T03:44:11.556Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:59.339Z",
            "price_change_percentage_24h_in_currency": 0.22216555611454264
        },
        {
            "id": "stellar",
            "symbol": "xlm",
            "name": "Stellar",
            "image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
            "current_price": 9.13,
            "market_cap": 264063278130,
            "market_cap_rank": 40,
            "fully_diluted_valuation": 456414739405,
            "total_volume": 6994037754,
            "high_24h": 9.47,
            "low_24h": 9.04,
            "price_change_24h": -0.06118067890373702,
            "price_change_percentage_24h": -0.66592,
            "market_cap_change_24h": -1759793641.804779,
            "market_cap_change_percentage_24h": -0.66202,
            "circulating_supply": 28929030214,
            "total_supply": 50001786995.3935,
            "max_supply": 50001786995.3935,
            "ath": 58.01,
            "ath_change_percentage": -84.27209,
            "ath_date": "2021-05-16T09:48:45.220Z",
            "atl": 0.02966141,
            "atl_change_percentage": 30658.18897,
            "atl_date": "2015-03-05T00:00:00.000Z",
            "roi": null,
            "last_updated": "2024-05-07T12:58:51.657Z",
            "price_change_percentage_24h_in_currency": -0.6659173702970472
        }
    ]
    

    // const fetchTrendingCoins = async() => {
    //     const {data}= await axios.get(TrendingCoins(currency))
    //     setTrendingCoins(data)
    // }


    // useEffect(()=>{
    //     fetchTrendingCoins()
    // },[currency])

    console.log(trendingCoins)

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCount(prev=>(prev+4)%dummyArr.length)
    },3000)

    return ()=>clearInterval(interval)
  },[dummyArr.length])
 




  return (
    <div className='Caraousal Container flex justify-start gap-12 border-red-700 mb-8'>
        {
            dummyArr.slice(count,count+4).map((each)=>{
                return(
                    <Link to={`/coins/${each.id}`}key={each.id} className='w-[36px] sm:w-[48px] md:w-[56px] lg:w-[120px] shrink-0'
                    >
                        <img src={each.image} 
                         className="transition duration-300 ease-in-out"
                        />
                        <div className='flex flex-col'>
                        <span className='text-lg font-semibold '>{each.name}</span>
                        <span className={each.market_cap_change_percentage_24h.toFixed(2)>0 ?'text-green-500 font-semibold': 'text-red-600 font-semibold'}>{each.market_cap_change_percentage_24h.toFixed(2)}%</span>
                        </div>
                        
                        
                    </Link>
                )
            })
        }
       

        
    </div>
  )
}

export default Caraousal