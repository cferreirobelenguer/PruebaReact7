import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons} from '../store/slices/pokemon';
export const Pokemon=()=>{
    const dispatch=useDispatch();
    const {isLoading,pokemons=[],page}=useSelector(state=>state.pokemons);

    useEffect(()=>{
        
        dispatch(getPokemons())
    },[])
    return(
        <div>
            <div>
                <h2>{isLoading?"True":"False"}</h2>
            </div>
            <div>
                <h1>Pokemon App</h1>
            </div>
            <hr></hr>
            <div>
                {pokemons.map(({name})=>{
                    return(
                        <div key={name}>
                            <h2>{name}</h2>
                        </div>
                    )
                })}
            </div>
            <div>
                
                <button disabled={isLoading} onClick={()=>dispatch(getPokemons(page))}>Siguiente</button>
            </div>
        </div>
    )
}
