import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IMedicalBranchCard } from "../../../../interfaces/dashboard/cardsInfo/MedicalBranchCard";

function GalleryComponent({thumbnails} : IMedicalBranchCard) {
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para almacenar el índice de la imagen actual

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index); // Actualiza el índice de la imagen actual al hacer clic en un thumbnail
    setToggler(!toggler); // Cambia el estado de 'toggler' para mostrar el lightbox
  };
  
  return (
    <>
      {/* Renderiza los thumbnails */}
      {thumbnails?.map((thumbnail, index) => (
        // <div key={ thumbnail.id } className="col-md-6 col-lg-4 col-xl-3">
        //   <img
        //     className="thumbnail-image"
        //     key={index}
        //     src={thumbnail.url}
        //     alt={`Thumbnail ${index}`}
        //     onClick={() => handleThumbnailClick(index)}
        //   />
        // </div>
        <div key={ thumbnail.id } className="md:w-1/2 pr-4 pl-4 lg:w-1/3 xl:w-1/4 ">
          <img
            className="thumbnail-image"
            key={index}
            src={thumbnail.url}
            alt={`Thumbnail ${index}`}
            onClick={() => handleThumbnailClick(index)}
          />
        </div>
      ))}
      
      {/* Renderiza el componente FsLightbox */}
      <FsLightbox
        toggler={toggler}
        sources = {thumbnails?.map((thumbnail, index) => (
            thumbnail.url
          ))}
        slide={currentIndex+1} // Muestra la imagen correspondiente al índice actual
      />
    </>
  );
}

export default GalleryComponent;
