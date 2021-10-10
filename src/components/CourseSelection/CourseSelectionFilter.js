import React, { useContext, useState } from 'react'
import {
    CourseSelectionFilterForm,
    CourseSelectionFilterFormControl,
    CourseSelectionFilterFormExtra,
    CourseSelectionFilterFormGroup,
    CourseSelectionFilterFormInput,
    CourseSelectionFilterFormSizeInput,
    CourseSelectionFilterFormSizeInputWrapper,
    CourseSelectionFilterWrapper,
} from './CourseSelectionElements'

/**
 * Sets the filter according to what the user want
 * User can filter based on religion, location, price, number of days, casket, packages, religion.
 * @returns PackageFilter component
 */
const CourseSelectionFilter = () => {
    const [course, setCourse] = useState('')
    const [index, setIndex] = useState('')
    return (
        <>
            <div id="searchFilter">
                <CourseSelectionFilterWrapper>
                    <CourseSelectionFilterForm>
                        <CourseSelectionFilterFormGroup>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="course">Course</label>
                            <CourseSelectionFilterFormControl
                                name="course"
                                id="course"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                            >
                                put ur courses here
                            </CourseSelectionFilterFormControl>
                        </CourseSelectionFilterFormGroup>
                        <CourseSelectionFilterFormGroup>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="index">Index</label>
                            <CourseSelectionFilterFormControl
                                name="index"
                                id="index"
                                value={index}
                                onChange={(e) => setIndex(e.target.value)}
                            >
                                put ur indexes here
                            </CourseSelectionFilterFormControl>
                        </CourseSelectionFilterFormGroup>
                    </CourseSelectionFilterForm>
                </CourseSelectionFilterWrapper>
            </div>
        </>
    )
}

export default CourseSelectionFilter