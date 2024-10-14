import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAddEvent, eventcnt, maxevents }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            {eventcnt < maxevents && <Button color ={showAddEvent ? 'red' : 'green'} text={showAddEvent ? 'Close' : 'Add'} onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'ToDo List App'
}


Header.propTypes = {
    title: PropTypes.string,
}



export default Header

