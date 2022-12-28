import {ReactComponent as StarGrey} from '../assets/StarGrey.svg';
import { ReactComponent as StarPink } from '../assets/StarPink.svg';

/**
  * Composant permettant d'afficher une évaluation en étoiles à partir de la propriété 'rating' passée en props.
  * Utilise les composants ReactComponent 'StarGrey' et 'StarPink' pour afficher les étoiles grises ou roses.
  * @param {Object} props - Props du composant.
  * @param {number} props.rating - Nombre d'étoiles à afficher (sur 5).
  * @returns {JSX.Element} Élément JSX du composant StarRate.
*/

const StarRate = (props)=>{
    const numbers = [1, 2, 3, 4, 5]; // Tableau de nombres de 1 à 5, utilisé pour itérer sur les étoiles.
    return(
        
        <div>
            <ul className='lodge__block__middle__rating'>
                {numbers.map((number) =>
                    <li >
                        {number <= props.rating
                            ? <StarPink className='star' /> // Affiche l'étoile rose si le nombre courant est inférieur ou égal à la note passée en props.
                            :<StarGrey className='star'/> // Affiche l'étoile grise dans le cas contraire.
                        }
                    </li>
                )}
            </ul> 
        </div>
    )
}

export default StarRate;