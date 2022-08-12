import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats]= useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3771839.jpg&fm=jpg" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore itaque porro cumque minima, blanditiis quasi inventore harum sunt 
                non quae iusto doloremque repellat et. Laboriosam dolores eius illo ex beatae.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              {cats.map((c) =>(
                <Link to ={`/?cat=${c.name}`} className="link ">
                <li className="sidebarListItem">{c.name}</li>
                </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
        </div>
    </div>
  )
}
