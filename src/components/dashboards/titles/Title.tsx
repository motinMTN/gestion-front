import { CSSProperties } from "react";
import "./Title.scss";

type TextAlign = 'left' | 'right' | 'center';

interface TitleProps{
  label: string;
  position?: TextAlign;
}

const Title = ({ label, position }: TitleProps) => {
  const style: CSSProperties = {
    textAlign: position,
  };

  return (
    <div className="content-title">
      <div className="title" style={style}>
        {label}
      </div>
    </div>
  )
}

export default Title