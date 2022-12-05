
import { pokemonAPI } from "../../../api/pokemonAPI"
import {setPokemons, startLoadingPokemons } from "./pokemonSlice"

//Función que regresa una tarea asíncrona: llama a la api de los pokemons
export const getPokemons=(page=0)=>{
    return async(dispatch,getState)=>{
        dispatch(startLoadingPokemons())
        //Realizar petición http
        const {data}= await pokemonAPI.get(`/pokemon?limit=10&offset=${page*10}`)
        
        dispatch(setPokemons({pokemons:data.results,page:page+1}))
    }

}