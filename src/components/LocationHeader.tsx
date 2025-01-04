import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../props/Constants';

type LocationHeaderProps = {
  title: string;
  selected: boolean;
};

export default function LocationHeader({
  title,
  selected,
}: LocationHeaderProps) {
  return (
    <div className={cn('favorites__locations locations', {'locations--current': selected})}>
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoutes.Main}>
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
}
