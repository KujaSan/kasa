import logements from '../datas/logements.json';

const url = window.location.href;
const id = url.searchParams.get("id");

console.log(id);
console.table(logements);
const logementID = logements.find( lodge =>lodge.id === id);
console.table(logementID);
function Lodge(){
    return(
        <div>

        </div>
    )
}

export default Lodge;