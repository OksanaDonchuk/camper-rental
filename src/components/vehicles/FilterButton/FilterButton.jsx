import clsx from "clsx";
import css from "./FilterButton.module.css";

const FilterButton = ({ children, icon, onClick, isActive }) => {
  return (
    <button
      className={clsx(css.badge, isActive && css.active)}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default FilterButton;
