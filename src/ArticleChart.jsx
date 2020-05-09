import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const data = [
  { year: '50', android: 67225 },
  { year: '110', android: 179873 },
  { year: '100', android: 310088 },
  { year: '150', android: 539318 },
  { year: '140', android: 539318 },
  { year: '200', android: 539318 },
  { year: '250', android: 539318 },
  { year: '255', android: 539318 },
  { year: '300', android: 539318 },
];

const chartRootStyles = {
  chart: {
    paddingRight: '20px',
  },
};
const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
};
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
  },
});
const legendItemStyles = {
  item: {
    flexDirection: 'column',
  },
};

const ChartRootBase = ({ classes, ...restProps }) => (
  <Chart.Root {...restProps} className={classes.chart} />
);
const LegendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item {...restProps} className={classes.item} />
);
const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Paper>
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries
            name="Android"
            valueField="android"
            argumentField="year"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
          <Title
            text="NUMBER OF ARTICLES PUBLISHED FOR “Elections”"
          />
        </Chart>
      </Paper>
    );
  }
}
