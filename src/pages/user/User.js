import "./user.css"
import {CalendarToday, LocationCity, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function user() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuário</h1>
        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1994</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+55 (11)99999-8888</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">anna.beck@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCity className="userShowIcon" />
              <span className="userShowInfoTitle">São Paulo, SP - Brasil</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Nome completo</label>
                <input type="text" placeholder="Anna Beck" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="anna.beck@gmail.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input type="text" placeholder="+55 (11)99999-8888" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input type="text" placeholder="São Paulo, SP - Brasil" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <label htmlFor="file"><Publish /></label>
                <input type="file" id="file" style={{display: 'none'}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
