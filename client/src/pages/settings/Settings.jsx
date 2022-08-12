import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/5911942/pexels-photo-5911942.jpeg?cs=srgb&dl=pexels-cottonbro-5911942.jpg&fm=jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Ebuka" />
                    <label>Email</label>
                    <input type="email" placeholder="ebukaobiora10@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
        </div>
        <Sidebar />
    </div>
  )
}
