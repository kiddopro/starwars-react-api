import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import Card from './card';
const CardContainer = (props) => {
    const { store, actions } = useContext(Context);
    return(
        <div className="container d-flex" style={{overflow: "auto"}}>
            {store.listaPersonajes.map((item, index) => {
                <Card key={index} name={item.name} url={item.url} />
            })}
        </div>
    );
}

export default CardContainer;