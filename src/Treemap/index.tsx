import type { BaseConfig as AntVBaseConfig, Tooltip } from '@ant-design/plots';
import { Treemap as BaseTreemap } from '@ant-design/plots';
import { merge } from 'lodash';
import type { FC } from 'react';
import React from 'react';
import Composite from '../components/Composite';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';

interface Child {
  [key: string]: any;
}
interface Data {
  name: string;
  children: Child[];
}

type BaseTreemapConfig = Omit<AntVBaseConfig<any>, 'tooltip'>;

const defaultConfig = {
  ...getDefaultConfig({ tooltipBox: true, treemap: true }),
  legend: false,
};

export interface TreemapConfig extends BaseTreemapConfig, BaseConfig {
  title?: string;
  data?: Data;
  config?: Omit<BaseTreemapConfig, 'data'> & {
    colorField: string;
    data?: Data;
    tooltip: Tooltip;
  };
}

const prefixCls = 'sen-pie';

const Treemap: FC<TreemapConfig> = ({
  title,
  config = {},
  data,
  style = {},
  className = '',
  empty,
}) => {
  const newConfig = merge({}, defaultConfig, config, { data });

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite title={title}>
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseTreemap {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Treemap;
