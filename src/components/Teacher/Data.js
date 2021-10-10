import img1 from '../../images/image3.svg'
import img2 from '../../images/facial-recognition.png'
import img3 from '../../images/attendant-list.png'

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
    button: '/view_attendance_teacher',
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

export const takeAttendanceTeacherBox = {
    id: 'take_attendance',
    backgroundColor: false,
    headerColor: true,
    boxColor: true,
    boxHeaderColor: false,
    boxTextColor: false,
    header: 'Choose the method',
    boxes: [
        {
            header: 'Facial Recognition',
            text: 'Click here to take attendance by facial recognition',
            img: img2,
            alt: 'img2',
            path: '/facial_recognition',
        },
        {
            header: 'Manual',
            text: 'Click here to take attendance manually',
            img: img3,
            alt: 'img3',
            path: '/manual_attendance',
        },
    ],
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