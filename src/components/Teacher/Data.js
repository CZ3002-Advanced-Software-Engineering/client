import img1 from '../../images/image3.svg'

// false = black, true = white

export const takeAttendanceDesc = {
    id: 'take_attendance',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Attendance',
    headline: 'Take attendance for your current class.',
    description: 'Take attendance via face recognition or manually',
    buttonLabel: 'Take Attendance',
    imgStart: true,
    img: img1,
    alt: 'alt',
    dark: false,
    primary: false,
    darkText: true,
    button: '/take_attendance',
}

export const viewAttendanceDesc = {
    id: 'view_attendance',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Attendance',
    headline: 'View attendance for your classes',
    description:
        'View the attendance for one of your classes that you are currently teaching',
    buttonLabel: 'View Attendance',
    imgStart: false,
    img: img1,
    alt: 'alt',
    dark: true,
    primary: true,
    darkText: false,
    button: '/take_attendance',
}

export const viewAbsenteesDesc = {
    id: 'view_absentees',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Absentees',
    headline: 'View absentees from your classes.',
    description: 'Check who is absent from your current classes',
    buttonLabel: 'View Absentees',
    imgStart: true,
    img: img1,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    button: '/take_attendance',
}

export const NavBarInfo = [
    {
        text: 'Take Attendance',
        link: '/take_attendance',
    },
    {
        text: 'View Attendance',
        link: '/view_attendance_teacher',
    },
    {
        text: 'View Absentees',
        link: '/absentees',
    },
]