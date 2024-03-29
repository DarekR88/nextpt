"use client"

type BurgerMenuProps = {
  isOpen: boolean
  handleClick: () => void
}

export function BurgerMenu({ isOpen, handleClick, }: BurgerMenuProps) {

return(
    
  <button onClick={handleClick} 
  className="flex flex-col justify-center items-center lg:hidden">
    <span className={`bg-bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
    </span>
    <span className={`bg-bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`} >
    </span>
    <span className={`bg-bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
    </span>    

  </button>

  
)
};