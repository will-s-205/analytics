import '../App.scss'

export function Title({ title }) {
  return (
    <div className="header-main">
      <h1 className="title">{title}</h1>
      <div className="filter-days-bar"></div>
    </div>
  );
}

export default Title
