import { faBriefcase, faChartBar, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BottomNavigation = () => {
  return (
    <div className="btm-nav btm-nav-md">
  <button>
  <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#e7cb13",}} />
  </button>
  <button className="active">
  <FontAwesomeIcon icon={faBriefcase} size="lg" style={{color: "#e7cb13",}} />
  </button>
  <button>
  <FontAwesomeIcon icon={faChartBar} style={{color: "#e7cb13"}} size="lg" />
  </button>
</div>
  )
}

export default BottomNavigation