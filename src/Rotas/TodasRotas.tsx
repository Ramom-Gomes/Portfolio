import {useRoutes} from 'react-router-dom';
import {Home} from '../Paginas/Home';
import {Sobre} from '../Paginas/Sobre';
import {Projetos} from '../Paginas/Projetos';
import {Contato} from '../Paginas/Contato';

export const TodasRotas = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/sobre', element: <Sobre/>},
        {path: '/projetos', element: <Projetos/>},
        {path: '/contato', element: <Contato/>}
    ])
}