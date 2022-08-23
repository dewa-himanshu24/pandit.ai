import React from 'react'

const Pooja = (props: { imageUrl: string ; name: string }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="wow fadeInUp group mb-10" data-wow-delay=".15s">
        <div className="mb-8 overflow-hidden rounded">
          <a href="blog-details.html" className="block">
            <img
              src={props.imageUrl}
              alt="image"
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
          <h3>
            <a
              href="blog-details.html"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {props.name}
            </a>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Pooja