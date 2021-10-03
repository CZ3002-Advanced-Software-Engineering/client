import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import SignIn from './pages/signin'
import StudentHome from './pages/studentHome'
import TeacherHome from './pages/teacherHome'
import TakeAttendance from './pages/takeAttendance'
import ManualAttendance from './pages/manualAttendance'
import ViewAttTeacher from './pages/viewAttTeacher'
import DisplayClassAtt from './pages/displayClassAtt'
import SubmitDoc from './pages/submitDoc'
import FacialRecognition from './pages/facialRecognition'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn} />
                {/* student routes */}
                <Route exact path="/student_home" component={StudentHome} />
                <Route exact path="/submit_documents" component={SubmitDoc} />
                {/* teacher routes */}
                <Route exact path="/teacher_home" component={TeacherHome} />
                <Route
                    exact
                    path="/take_attendance"
                    component={TakeAttendance}
                />
                <Route
                    exact
                    path="/take_attendance/manual"
                    component={ManualAttendance}
                />
                <Route
                    exact
                    path="/take_attendance/face"
                    component={FacialRecognition}
                />
                <Route
                    exact
                    path="/view_attendance_teacher"
                    component={ViewAttTeacher}
                />
                <Route
                    exact
                    path="/view_attendance_teacher/class"
                    component={DisplayClassAtt}
                />
            </Switch>
        </Router>
    )
}
