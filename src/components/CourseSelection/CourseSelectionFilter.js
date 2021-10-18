import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'moment/locale/it'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'
import {
    CourseSelectionFilterForm,
    CourseSelectionFilterFormControl,
    CourseSelectionFilterFormGroup,
    CourseSelectionFilterWrapper,
} from './CourseSelectionElements'
import { fetchCourses } from '../../actions/course'
import { selectCourse, selectDate, selectIndex } from '../../actions/selected'
import CurrentDateTime  from '../Clock/CurrentDateTime'
/**
 * Sets the filter according to what the user want
 * User can filter based on course, index, date
 * @returns CourseSelectionFilter component
 */
const CourseSelectionFilter = ({mydate}) => {
    // const [course, setCourse] = useState('')
    // const [index, setIndex] = useState('')
    const mybool = mydate
    const dispatch = useDispatch()

    const { domain } = useSelector((state) => state.user)
    // eslint-disable-next-line camelcase
    const indexesTaken =
        domain === 'teacher'
            ? useSelector((state) => state.user.data.indexes_taught)
            : useSelector((state) => state.user.data.indexes_taken)
    const { courses, isFetched, indexes } = useSelector((state) => state.course)
    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )

    useEffect(() => {
        dispatch(fetchCourses(indexesTaken))
    }, [])

    // TODO: remmeber to delete, testing purposes

    return (
        <>
            <div id="searchFilter">
                <CurrentDateTime/>
                <CourseSelectionFilterWrapper>
                    <CourseSelectionFilterForm>
                        <CourseSelectionFilterFormGroup>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="course">Course</label>
                            <CourseSelectionFilterFormControl
                                name="course"
                                id="course"
                                value={course}
                                onChange={(e) =>
                                    dispatch(selectCourse(e.target.value))
                                }
                            >
                                <option value="" selected disabled hidden>
                                    Choose here
                                </option>
                                {isFetched &&
                                    courses.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                            </CourseSelectionFilterFormControl>
                        </CourseSelectionFilterFormGroup>
                        <CourseSelectionFilterFormGroup>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="index">Index</label>
                            <CourseSelectionFilterFormControl
                                name="index"
                                id="index"
                                value={index}
                                onChange={(e) =>
                                    dispatch(selectIndex(e.target.value))
                                }
                            >
                                <option value="" selected disabled hidden>
                                    Choose here
                                </option>
                                {isFetched &&
                                    indexes.map((item) => (
                                        <option
                                            value={item.group}
                                            key={item._id}
                                        >
                                            {item.group} | {item.day} | {item.start_time} - {item.end_time}
                                        </option>
                                    ))}
                            </CourseSelectionFilterFormControl>
                            <DayPickerInput style = {{display : mybool ? 'none': 'block'}}
                                inputProps={{ readOnly: true }}
                                format="LL"
                                formatDate={formatDate}
                                parseDate={parseDate}
                                placeholder="Select Date"
                                dayPickerProps={{}}
                                onDayChange={(day) => {
                                    dispatch(
                                        selectDate(
                                            day.toLocaleDateString('fr-CA', {
                                                year: 'numeric',
                                                month: 'numeric',
                                                day: 'numeric',
                                            })
                                        )
                                    )
                                }}
                            />
                        </CourseSelectionFilterFormGroup>
                    </CourseSelectionFilterForm>
                </CourseSelectionFilterWrapper>
            </div>
        </>
    )
}

export default CourseSelectionFilter