import PropTypes from 'prop-types'

function Header({myProp,bgColor,textColor}) {
    const headerStyles = {
        backgroundColor : bgColor,
        color:textColor,
        
    }
  return (
   <header style={headerStyles}>
       <div className="container"> 
           <h2>{myProp}</h2>
       </div>
   </header>
  )
}
Header.defaultProps = {
    myProp : "Feedback App",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}

//type checking for props
Header.propTypes = {
    myProp : PropTypes.string,
    bgColor:PropTypes.string,
    textColor: PropTypes.string ,
}
export default Header

