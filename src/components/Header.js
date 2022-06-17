import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ color, title, onAdd, showAdd }) => {
	return (
		<header className='header'>
			<h1 style={{ color: color }}>
				{title}
			</h1>
			<Button
				color={showAdd ? 'navy' : 'cyan'}
				text={showAdd ? 'Close' : 'Add'}
				onClick={onAdd}
			/>
		</header>
	)
}

Header.defaultProps = {
	color: 'black',
	title: 'Task Tracker Default Title'
}

Header.propTypes = {
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default Header