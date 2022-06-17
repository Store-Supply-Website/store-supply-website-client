import '../App.css'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
function Login () {

  return (
    <div className="App">
      <header className>
        {/* <p>
          Store Supply Website Login Page
        </p> */}
        <SignIn></SignIn>
      </header>
    </div>
  )
}
export default Login