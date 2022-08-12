import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
           {/*<span className="headerTitleSm">Lifestyle</span> */}
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg" alt="" />
    </div>
  );
}
