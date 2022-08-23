import React from 'react'
import Pooja from './Pooja'

const DUMMY_POOJAS = [
  {
    id: "p1",
    name: "Daily Aarti",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p2",
    name: "Shiv Aarti",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p3",
    name: "Vishnu Vandana",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p4",
    name: "Ganesha Aarti",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p5",
    name: "Maa Laxmi Aarti",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p6",
    name: "Grah Pravesh",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p7",
    name: "Diwali Pooja",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p8",
    name: "Ekadashi",
    image: "assets/images/blog/blog-02.jpg"
  },
  {
    id: "p9",
    name: "Janmashtami",
    image: "assets/images/blog/blog-02.jpg"
  },
];

const PoojaList = () => {
  const poojaList = DUMMY_POOJAS.map((pooja) => (
    <Pooja
      key={pooja.id}
      name={pooja.name}
      image={pooja.image}
    />
  ))

  return (
    <>{poojaList}</>
  )
}

export default PoojaList