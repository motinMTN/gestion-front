import { ICounterCardViewProps } from '../../../../../interfaces/dashboard/cardsInfo/CounterCard';
import "./CounterCard.scss"

function CounterCard({ counterCard }: ICounterCardViewProps) {
  let var_width = 0;
  let barFillStyles = {};

  if (typeof counterCard.numerador === "number" && typeof counterCard.divisor === "number") {
    var_width = (counterCard.numerador / counterCard.divisor) * 100;
    barFillStyles = {
      width: var_width.toString() + "%",
      background: "#8BC34A"
    };
  }

  return (
    <div className="counter-card md:w-1/4 pr-4 pl-4">
      <div className="general-info-container flex">
        <div className="img-container md:w-1/4 pr-4 pl-4">
          <img src={counterCard.img_url} className="card-image" width="100%" alt={counterCard.img_url} />
        </div>
        <div className="stadistic-container md:w-3/4 pr-4 pl-4">
          <div className="stadistic-spans">
            <span className="num-span">{counterCard.numerador.toString()}</span>
            <span className="div-span mini">/ {counterCard.divisor.toString()}</span>
          </div>
          <div className="source-container">
            <span className="source-span">{counterCard.title}</span>
          </div>
        </div>
      </div>
      <div className="bar-container">
        <div className="bar-fill" style={barFillStyles}>
        </div>
      </div>
    </div >
  );
}

export default CounterCard