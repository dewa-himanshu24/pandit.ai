import React from 'react'
import Pooja from './Pooja'

const DUMMY_POOJAS = [
  {
    id: "p1",
    name: "Daily Aarti",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p2",
    name: "Shiv Aarti",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p3",
    name: "Vishnu Vandana",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p4",
    name: "Ganesha Aarti",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p5",
    name: "Maa Laxmi Aarti",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p6",
    name: "Grah Pravesh",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p7",
    name: "Diwali Pooja",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p8",
    name: "Ekadashi",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p9",
    name: "Janmashtami",
    imageUrl: "assets/images/blog/blog-02.jpg"
  },
];

const PoojaList = () => {
  const poojaList = DUMMY_POOJAS.map((pooja) => (
    <Pooja
      key={pooja.id}
      name={pooja.name}
      imageUrl={pooja.imageUrl}
    />
  ))

  return (
    <>{poojaList}</>
  )
}

export default PoojaList