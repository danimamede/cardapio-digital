/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { bebidas, pratosPrincipais, sobremesas } from './cardapio';
import Restaurante from './assets/hashtaurante.webp'

export function App() {
  const paginasMenu = [pratosPrincipais, bebidas, sobremesas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
          <img src={Restaurante} className='capa' alt="Imagem de um restaurante à beira-mar" />
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
          <div className='menu'>
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
          </div>
        </>
}