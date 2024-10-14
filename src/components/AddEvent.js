import { useState } from 'react'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';


const AddEvent = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())
   

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add event')
            return
        }
        onAdd ({ text, date })

        setText('')
        setDate(new Date())
        
    }



    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Event name</label>
                <input type='text' placeholder='Add event' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <DateTimePickerComponent format="dd/MMM/yy HH:mm" step={10} onChange={(e) => setDate(e.target.value)} value={date}/>

            </div>
            <input className='btn btn-block' type='submit' value='Save event'></input>
        </form>
    )
}

export default AddEvent
