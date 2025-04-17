import './MedicalBranchCard.scss';
import GalleryComponent from '../../gallery/Gallery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCalendarXmark } from "@fortawesome/free-regular-svg-icons";
import { IMedicalBranchCardViewProps } from '../../../../../interfaces/dashboard/cardsInfo/MedicalBranchCard';
import React from 'react';

function MedicalBranchCard({medicalBranchCard}: IMedicalBranchCardViewProps) {
  return (
    <div className='medical-branch-info border_top_card flex flex-col'>
      <h2 className='title mb-3'>Información</h2>
      <div className='medical-appointments mb-3'>
        <FontAwesomeIcon icon={medicalBranchCard.available === true ? faCalendarCheck : faCalendarXmark} className={ medicalBranchCard.available === true ? "icon-faCalendarCheck" : "icon-faCalendarXmark"} />
        <span className={medicalBranchCard.available === true ? "is-available" : "is-unavailable"}>
          {medicalBranchCard.available === true ? "Elegible para reservación de citas en línea" : "No es elegible para reservación de citas en línea"}
        </span>
      </div>
      <div className='gallery flex mb-3'>
        <GalleryComponent thumbnails={medicalBranchCard.thumbnails} />
      </div>
      <div className="specialties mb-3">
        <span className='subtitle'>Especialidades:</span>
        <div className='tags-container'>
          {medicalBranchCard.specialties?.map((specialty) => (
            <span key={specialty.id} className='tag'>{ specialty.name }</span>
          ))}
        </div>
      </div>
      <div className="location">
        <span className='subtitle'>Ubicación:</span>
        <div className='info-container'>
          {/* <span className=''>Aramberri 124, Centro. <br></br> Monterrey, Nuevo León. México. C.P. 64000</span> */}
          <span className=''>
            {medicalBranchCard.location?.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MedicalBranchCard;