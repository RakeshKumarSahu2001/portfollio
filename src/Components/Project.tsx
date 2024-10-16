import { project } from "../Store/PortfollioContext";
import { MdArrowForwardIos } from "react-icons/md";


function Project({ pic, name, text, tools,link }: project) {
  return <>
    <div className="cards_item">
      <div className="card" tabIndex={0}>
        <div className="card_image"><img src={pic} alt={pic} /></div>
        <div className="card_content">
        <a href={link} target="_blank"><h2 className="card_title">Visit website<MdArrowForwardIos className="ms-3 pb-1" /></h2></a>
          <div className="card_text">
            <span className="note">{name}</span>
            <p className="lh-sm">{text}</p>

            <ul className="postcard__tagbox d-flex flex-wrap unstyled g-4 m-0">
              {
                tools.map((tool) => <li className="tag__item">{tool}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>

  </>
}


export default Project;
