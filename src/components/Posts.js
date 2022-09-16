import { useEffect, useState } from 'react'
import Post from './Post'

const API_URL =
  'https://jsonplaceholder.typicode.com/posts' /* просто переменная */

function Posts() {
  const [posts, setPosts] = useState(
    []
  ) /* изначальное значение пустой массив */
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL) /* сюда мы вставляем переменную */
      .then((res) =>
        res.json()
      ) /* если ответ от сервера успешный мы получим в res json */
      .then((posts) =>
        /* posts здесь и выше это разные переменные которые просто совпали имененем, но после вызова функции setPosts у обоих будет одиноковое значение */

        setPosts(posts)
      )
      .catch(
        (error) =>
          setError(
            error.message
          ) /* при возникновении ошибки функция setError изменит переменную error */
      ) /* при возникновении ошибки в консоле выведеся ошибка */
      .finally(() =>
        setIsLoading(false)
      ) /* вызовется в любом случае когда загрузка будет окончена успешно или же с ошибкой*/
  }, []) /* данная функци вызовется два раза при запуске приложения и при рендеринге массива так как в списке зависимостей у нас пустой массив */

  /* console.log(posts) */
  /* if (isLoading) { */
  /* если строка isLoading равна true, то код покажет данное сообщение */
  /* return ( */
  /* { */
  /* <h1>Loading...</h1> */
  /* } */
  /* )  также можно сэмулировать медленный интенрнет чтобы увидеть сообщение */
  /*  } */

  if (error) {
    /* если строка ошибки не пустая то код покажет ошибку */
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      {/*  фрагмент реакт */}
      <h1>Posts</h1>
      <hr />
      {isLoading /* это тернарный оператор если isLoading равно True то мы выводим код ниже ксли нет томы выводим посты, кстати isLoading выводится прямо ниже заголовка а сам заголовок появляется сразу */ ? (
        <h1>Loading...</h1>
      ) : (
        posts.map(
          (post) => (
            <Post key={post.id} {...post} />
          ) /* здесь мы передаем отдельно id как ключ, а также с помощью spread operator создаем обьект с несколькими элементами и передаем его в Post.js */
        )
      )}
      {/* здесь мы передаем отдельно id как ключ, а также с помощью spread
      operator создаем обьект с несколькими элементами и передаем его в Post.js */}
    </>
  )
}

export default Posts
