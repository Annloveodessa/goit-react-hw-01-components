import PropTypes from 'prop-types';
import {
  StatisticsTile,
  StatisticsSection,
  StatisticsUl,
  StatisticsLi,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.slyled';
import { randomHexColor } from 'components/randomHexColor';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTile>{title}</StatisticsTile>}

      <StatisticsUl>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsLi key={id} style={{backgroundColor:randomHexColor()}}>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}</StatisticsPercentage>
            </StatisticsLi>
          );
        })}
      </StatisticsUl>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
