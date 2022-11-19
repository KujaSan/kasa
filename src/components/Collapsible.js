import '../styles/About.css';
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const Collapsible =()=>{
    const reliabilityButton = "fiabilité";
    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    
    const respectButton = "Respect";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

    const serviceButton = "Service";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";

    const secuButton ="Sécurité";
    const secu ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    
    return(
        <div>
            <div>
                <button className="accordion">{reliabilityButton}</button>
                <p className="panel">{reliability}</p>
            </div>

            <div>
                <button className="accordion">{respectButton}</button>
                <p className="panel">{respect}</p>
            </div>

            <div>
                <button className="accordion">{serviceButton}</button>
                <p className="panel">{service}</p>
            </div>

            <div>
                <button className="accordion">{secuButton}</button>
                <p className="panel">{secu}</p>
            </div>
        </div>
    )
    
}
export default Collapsible;