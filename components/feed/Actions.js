import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline" 

const style = {
  icon = 'h-4 w-4',
  iconContainer : 'flex items-center, space-x-1, text-[#818384]'
}

const Actions = () => {
  return (
    <div>
      <div className = {style.iconContainer}>
        <AnnotationIcon className = {style.icon} />
      </div>
      <div className = {style.iconContainer}>
        <GiftIcon className = {style.icon} />
      </div>
      <div className = {style.iconContainer}>
        <ShareIcon className = {style.icon} />
      </div>
      
    </div>
  )
}

export default Actions