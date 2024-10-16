import  { Frontend,Backend,Other } from "../Store/PortfollioContext"

interface props{
    cardHeader:Frontend | Backend | Other,
    label:string
}

function Skill({ cardHeader, label }:props) {


    return (
        <>
            <div className="card skillcard rounded-4" style={{ minHeight: "17rem", maxWidth: "30rem", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}>
                <div className="card-header" style={{background:"#0d6efd4d"}}>
                    <h1 className="text-center ">{label}</h1>
                </div>
                <div className='my-2'>
                    <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
                        {Object.entries(cardHeader).map(([key, value], index) => (
                            <li key={index} className="d-flex rounded-3 align-items-center text-capitalize gap-2 border border-primary " style={{ padding: "0.5rem 0.8rem" }}>
                                <img
                                    src={value ? value : null}
                                    alt={key}
                                    className=""
                                    style={{ width: "25px", height: "25px" }}
                                />
                                <span>{key}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skill