import { deleteCookie, getCookie, hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'
import Pooja from './PoojaCard'

const PoojaList = () => {
  const router = useRouter();

  const [poojaList, setPoojaList] = useState([]);

  useEffect(() => {
    const getAllPooja = async () => {
      const xBhaktToken = getCookie("xBhaktToken") + "";
      const response = await fetch('/api/pooja', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-bhakt-token': xBhaktToken
        }
      });
      
      const responseJson = await response.json();

      if (response.status === 200) {
        const poojaData = responseJson["allPooja"].map((pooja: { id: number; name: string; imageUrl: string; description: string; }) => (
          <Pooja
            key={pooja.id}
            id={pooja.id}
            name={pooja.name}
            imageUrl={pooja.imageUrl}
            description={pooja.description}
          />
        ))
        setPoojaList(poojaData);
      }
      else if (response.status === 401) {
        deleteCookie('xBhaktToken')
        router.push('/Login')
      }
      else {
        alert(responseJson.message)
      }
    }

    getAllPooja();

  }, []);


  return (
    <Fragment>
      {poojaList}
    </Fragment>
  )
}

export default PoojaList