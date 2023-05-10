import React, {useState,useEffect} from "react";
import classes from './WordsList.module.css';

function WordsList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch("https://localhost:7275/api/dictionary")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className={classes.words_table_container}>
            <div className ={classes.words_table}>
            {items.map(item => (
                <div className={classes.row} key={item.id}>
                <p>{item.name}</p> 
                <p>{item.translations}</p>
                <p>{item.description}</p> 
                </div>
            ))}
            </div>
        </div>
        
      );
    }
  }

  export default WordsList;