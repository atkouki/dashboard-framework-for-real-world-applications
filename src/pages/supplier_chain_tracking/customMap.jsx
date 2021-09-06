import React from 'react'
import BaseVisualization from '@splunk/dashboard-visualizations/common/BaseVisualization'
import GMap from './GMap'

const CustomMap = ({dataSources,width,height,background='transparent',title,description,options}) => 
{
    return(<GMap/>);
};

CustomMap.propTypes = {
    ...BaseVisualization.propTypes,
};

CustomMap.defaultProps={
    ...BaseVisualization.defaultProps,
}

export default CustomMap;