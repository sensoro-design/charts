import type { BarConfig as BaseBarConfig } from '@ant-design/plots';
import { Bar as BaseBar } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface BarConfig extends BaseConfig {
  type: 'basic';
  title?: string;
  data?: BaseBarConfig['data'];
  config?: Omit<BaseBarConfig, 'data'> & { data?: BaseBarConfig['data'] };
}

const prefixCls = 'sen-bar';

const Bar: FC<BarConfig> = ({
  config = {},
  data,
  title,
  type = 'basic',
  legend,
  timeRange,
  empty,
  customContentData,
  style = {},
  className = '',
}) => {
  const { seriesField } = config;

  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );

  const legendMap = useMemo(
    () => (seriesField ? groupBy(originalData, seriesField) : {}),
    [seriesField, originalData],
  );

  const colorMap = useMemo(() => {
    const data = transform(
      legendMap,
      (result: Record<string, ''>, value, key) => {
        result[key] = '';
        return result;
      },
      {},
    );
    return generateColorMap(data);
  }, [legendMap]);

  const defaultConfig = {
    basic: {
      ...getDefaultConfig({
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
      }),
      legend: false,
    },
  };

  const newConfig = merge({}, defaultConfig[type], config, {
    data: originalData,
  }) as BaseBarConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={seriesField}
        legend={legend}
        colorMap={colorMap}
        timeRange={timeRange}
      >
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseBar {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Bar;
