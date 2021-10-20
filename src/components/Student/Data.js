import img1 from '../../images/image3.svg'

// false = black, true = white

export const viewAttendanceDesc = {
    id: 'view_attendance_student',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Attendance',
    headline: 'View attendance from your classes.',
    description: 'Check your attendance for your classes',
    buttonLabel: 'View Attendance',
    imgStart: true,
    img: img1,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    button: '/course_selection/view_attendance',
}

export const submitDocumentsDesc = {
    id: 'submit_documents',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Absent',
    headline: 'Submit Documents for your classes',
    description: 'Check which class were you absent from',
    buttonLabel: 'Submit Documents',
    imgStart: false,
    img: img1,
    alt: 'alt',
    dark: true,
    primary: true,
    darkText: false,
    button: '/view_absentees',
}

export const NavBarInfo = [
    {
        text: 'View Attendance',
        link: 'view_attendance_student',
    },
    {
        text: 'Submit Documents',
        link: 'submit_documents',
    },
]