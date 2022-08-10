import Vote from '../feed/Vote'
import Actions from '../feed/Actions'

const style = {
  post : 'flex flex-col space-y-1 cursor-pointer',
  wrapper : 'flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]',
  postTitle : 'text-lg font-medium text-[#D7DADC]',
  postContent : 'text-sm font-light text-[#D7DADC]/80'
  
}

const Post = () => {
  return (
    <div className = {style.wrapper}>
    <Vote />  
    <div className = {style.post}>
      
      <h1 className = {style.postTitle}>How many aptitude questions are there in the aptitude test?</h1>
      <p1 className = {style.postContent}>More than 1000 aptitude questions and answers for freshers who are preparing for interviews and placements after graduation and master degree courses. Many online aptitude tests and quizzes available to gauge your readiness to face the competitive exams.</p1>
      <Actions />
    </div>
    </div>
  )
}

export default Post