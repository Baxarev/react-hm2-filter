const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <nav>
      <ul className="toolbar-menu">
        {filters.map((filter, index) =>
          <li className={`toolbar-menu__item ${selected === filter ? `toolbar-menu__item_active` : ''}`}
                key={index}
                onClick={() => onSelectFilter(filter)}>
              <a
                href="#">
                  {filter}
              </a>
          </li>)}
      </ul>
    </nav>
  )
}

export default Toolbar
