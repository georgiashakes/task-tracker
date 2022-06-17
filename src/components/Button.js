import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
	return (
	        <div>
		        <button onClick={onClick} style={{ backgroundColor: color }} className='taskBtn'>
		        	{text}
		        </button>
	        </div>
	        )
}

Button.defaultProps = {
	title: 'ADD',
	color: 'black',
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default Button