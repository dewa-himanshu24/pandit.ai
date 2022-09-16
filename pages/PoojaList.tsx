import { getCookie } from 'cookies-next';
import React, { Fragment, useEffect, useState } from 'react'
import Pooja from './PoojaCard'

const PoojaList = () => {
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
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);

      if (response.status === 200) {
        const poojaData = responseJson["allPooja"].map((pooja: { id: number; name: string; imageUrl: string; description: string }) => (
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