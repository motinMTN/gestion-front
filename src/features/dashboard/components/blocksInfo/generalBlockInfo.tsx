import "./generalBlockInfo.scss";
import { IBlockInfoProps } from "../../../../interfaces/dashboard/blocksInfo/BlockInfo";

export default function GeneralBlockInfo({ blockInfo }: IBlockInfoProps) {
  return (
    <div className="general-block-info">
      <img src={blockInfo.image} className="block-image" alt={blockInfo.title} />
      <h2 className="title">{blockInfo.title}</h2>
      <p className="description">{blockInfo.description}</p>
      <p className="footer">{blockInfo.footer}</p>
      <a href="/consultas/referentes/crear" className="_button">Comenzar ahora</a>
    </div>
  )

}
