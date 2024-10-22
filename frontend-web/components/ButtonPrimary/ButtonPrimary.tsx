import React from 'react'

interface ButtonPrimaryProps {
  text: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

export default ButtonPrimary