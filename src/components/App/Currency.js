import { useEffect,useState } from 'react';
import { useParams,useHistory } from 'react-router-dom'

export default function Currency() {
  const params = useParams();
  const [price,setPrice]=useState(null)
  const history=useHistory();
  useEffect(async () => {
    try {
      const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${params.currency}`);
      const data = await response.json();
      setPrice(data.bpi[params.currency].rate)
    } catch (error) {
      console.log(error);
    }
  }, [params.currency])

  return (
    <>
  <h3>{`Bitcoin price in ${params.currency}`}</h3>
  <h4>{`Price: ${price}`}</h4>
  <button onClick={() => history.push("/currencies")}>Home</button>
  </>
  )
}