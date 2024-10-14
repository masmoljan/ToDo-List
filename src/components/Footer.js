import React from 'react'

const Footer = ({ eventcnt }) => {
    return (
        <footer>
            <small>Maximum amount of events: {eventcnt}</small>
            <p>Copyright &copy; 2021</p>
        </footer>
    )
}

export default Footer
