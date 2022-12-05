import { useSearchParams } from "react-router-dom";
import logements from '../datas/logements.json';
import '../styles/Lodge.css';


function Lodge(){
    let [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const lodgeItem = logements.find( lodge =>lodge.id === id);
    console.table(lodgeItem);
    
    return(
        <div>
            <img className="thumb" alt="placeholder" src={lodgeItem.pictures[0]}></img>
            <h1>{lodgeItem.title}</h1>
            <h2 className="locationMessage">{lodgeItem.location}</h2>
        </div>
    )
}

export default Lodge;