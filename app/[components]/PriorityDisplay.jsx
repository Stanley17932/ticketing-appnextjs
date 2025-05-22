import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
        <FontAwesomeIcon icon={faFire} className="text-green-400 hover:cursor-pointer hover:text-green-200"/>
        <FontAwesomeIcon icon={faFire} className="text-green-400 hover:cursor-pointer hover:text-green-200"/>
        <FontAwesomeIcon icon={faFire} className="text-green-400 hover:cursor-pointer hover:text-green-200"/>
        <FontAwesomeIcon icon={faFire} className="text-green-400 hover:cursor-pointer hover:text-green-200"/>
        
    </div>
  )
}

export default PriorityDisplay