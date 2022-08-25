import React from 'react'

const Button = (props: { classes: string; value: string;}) => {
  return (
    <div className={props.classes}>
      <input
        type="submit"
        value={props.value}
        className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition duration-300 ease-in-out hover:shadow-md"
      />
    </div>
  )
}

export default Button
