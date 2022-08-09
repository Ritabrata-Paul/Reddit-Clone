const style = {
  post : 'flex flex-col space-y-1 cursor-pointer',
  wrapper : 'flex space-x-3 rounded bg-[#1a1a1b]/80'
}

const Post = () => {
  return (
    <div className = {style.wrapper}>
      <div className = {style.post}>
        <>
        <h1>Post</h1>
        <p1>Nothing</p1>
        </>
      </div>
    </div>
  )
}

export default Post