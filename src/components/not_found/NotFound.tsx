import { Link } from "react-router-dom";
import "./NotFound.scss";
import { PATH_HOME } from "../../router/paths/dashboard_paths";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <h1 className="title_404">404</h1>

              <div className="four_zero_four_bg">
              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  Parece que andas perdido...
                </h3>
                <p>la página que quieres visualizar no esta dispobible</p>
                <Link to={PATH_HOME} className="link_404">Ir al Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound