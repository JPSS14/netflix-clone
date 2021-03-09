import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
  
  return(
    /* itens necessários 
      Header
      Destaque
      As listas
      Rodapé
    */
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            {item.title} teste
          </div>
        ))}
      </section>
    </div>
  );
}