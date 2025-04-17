import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { classNames } from "../../../utils/classes";
import { TopBarMenuProps } from "../../../interfaces/dashboard/topBar/TopBar";
import CardViewSession from "./cardViewSession/CardViewSession";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./TopBarMenu.scss";

const TopBarMenu = ({ items, card }: TopBarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  //   //pequeño hook para saber el estado del session_options
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpenMobile(!isOpenMobile);
  };

  function handleClick() {
    setIsOpen(!isOpen);
  }


  function handleClickOutside(event: MouseEvent) {
    const targetElement = event.target as Element;
    // Verificar si el elemento clickeado no es el contenedor de la ventana emergente
    if (containerRef.current && !containerRef.current.contains(targetElement)) {
      // Verificar si el evento no se originó dentro del botón de toggle
      if (targetElement.closest(".toggle-button") === null) {
        setIsOpen(false);
      }
    }
  }

  // esto se carga cuando se monta el componente
  useEffect(() => {
    // Agregar evento click al body 
    document.addEventListener('click', handleClickOutside);
    // Limpiar evento click del body cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [containerRef]);

  

  return (

    <nav className="p-1 topBarMenu">
      {/* max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 */}
      <div className="">


        <div className="relative flex items-center justify-between h-16">
          <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400  focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isOpenMobile ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>


          <div className={classNames("", isOpenMobile ? "flex items-center justify-center" : "flex-1 flex items-center justify-between")}>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    className=" px-3 py-2 rounded-md link_menu"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end md:justify-start">
              <div className="session_options mr-4 md:mr-0">
                <div className="toggle-button" onClick={handleClick}>
                  <span>Mi cuenta</span>
                  <FontAwesomeIcon icon={fas.faAngleDown} className={classNames("icon-faAngle-account", isOpen ? "transformed" : "")} />
                </div>
                <div className={classNames("card-view-session-container", isOpen ? "block animate__animated animate__fadeIn" : "hidden animate__animated animate__fadeOut")} ref={containerRef}>
                  <CardViewSession card={card} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className based on menu state */}
      <div className={`${isOpenMobile ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className=" block px-3 py-2 rounded-md"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopBarMenu;