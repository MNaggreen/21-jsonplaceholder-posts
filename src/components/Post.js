import './Post.css' /* импорт css файла */

function Post(props) {
  const { id, userId, title, body } = props
  return (
    /* здесь мы просто деструтурируем наш полученные обьект и выводим покаждому свойству */
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User ID: {userId}</h3>
    </div>
  )
}

export default Post
