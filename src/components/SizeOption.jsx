import React from 'react'
import { useTheme } from '../contexts/ThemeContext';

const SizeOption = ({sizeName}) => {
  //classes referentes ao tema padrao e o tema de alto contraste
  const {toggleTheme, theme}  = useTheme();

  //tema padrao
  let textColor = "text-primary-darker";
  let borderColor = "border-[#584424]";

  //cores do tema em alto contraste
  if(theme == 'theme2'){
    textColor = "text-white";
    borderColor = "border-white";
  }
  return (
    <div className={`grid place-content-center
                    w-[40px] h-[40px]
                    max-sm:w-[33px] max-sm:h-[33px]
                    rounded-full 
                    border-solid border-2 
                    ${borderColor}`}>
        <h1 className={`${textColor} font-montserrat font-semibold`}>{sizeName}</h1>
    </div>
  )
}

export default SizeOption