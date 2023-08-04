import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = ({ setCalendarData }) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            popperPlacement="auto"
            showPopperArrow={false}
            dateFormat="yyyy.MM.dd"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={update => {
                setDateRange(update);
                setCalendarData(update);
            }}
            minDate={new Date()}
            locale={ko}
            showDisabledMonthNavigation
            disabledKeyboardNavigation
            isClearable={true}
            monthsShown={2}
            inline
            block
        />
    );
};

export default Calendar;