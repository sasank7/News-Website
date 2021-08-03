import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/*<span className="headerTitleSm">Janagalam</span>*/}
        <span className="headerTitleLg">World News</span>
      </div>
      <img
        className="headerImg"
        src="https://thumbs.dreamstime.com/b/graphical-modern-digital-world-news-background-concept-series-technology-communication-208917212.jpg"
        alt=""
      />
    </div>
  );
}
