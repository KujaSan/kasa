import {ReactComponent as StarGrey} from '../assets/StarGrey.svg';
import { ReactComponent as StarPink } from '../assets/StarPink.svg';

const StarRate = (props)=>{
    const numbers = [1, 2, 3, 4, 5];
    return(
        
        <div>
            <ul className='starRate'>
                {numbers.map((number) =>
                    <li value={1}>
                        {number <= props.rating
                            ? <StarPink />
                            :<StarGrey/>
                        }
                    </li>
                )}
            </ul> 
        </div>
    )
}

export default StarRate;