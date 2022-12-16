import {ReactComponent as StarGrey} from '../assets/StarGrey.svg';
import { ReactComponent as StarPink } from '../assets/StarPink.svg';

const StarRate = (props)=>{
    const numbers = [1, 2, 3, 4, 5];
    return(
        
        <div>
            <ul className='lodge__block__middle__rating'>
                {numbers.map((number) =>
                    <li >
                        {number <= props.rating
                            ? <StarPink className='star' />
                            :<StarGrey className='star'/>
                        }
                    </li>
                )}
            </ul> 
        </div>
    )
}

export default StarRate;