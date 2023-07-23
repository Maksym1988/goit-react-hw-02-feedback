import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.itemText}>
            Good:
            <span className={css.itemValue}>{good}</span>
          </p>
        </li>
        <li className={css.item}>
          <p className={css.itemText}>
            Neutral:
            <span className={css.itemValue}>{neutral}</span>
          </p>
        </li>
        <li className={css.item}>
          <p className={css.itemText}>
            Bad:
            <span className={css.itemValue}>{bad}</span>
          </p>
        </li>
      </ul>
      <div>
        <p className={css.itemText}>
          Total:
          <span className={css.itemValue}>{total}</span>
        </p>
        <p className={css.itemText}>
          Positive feedback:
          <span className={css.itemValue}>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
