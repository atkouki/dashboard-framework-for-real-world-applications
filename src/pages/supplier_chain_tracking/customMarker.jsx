import { InfoWindow, Marker } from "react-google-maps";
import React from "react"
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';
import './index.css';

import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';

import SplunkThemeProvider from "@splunk/themes/SplunkThemeProvider"

import { DashboardContextProvider} from "@splunk/dashboard-context";
import CustomMap from "./customMap";
import info_definition from './info_definition.json'
import { Component } from "react";


const themeNormalKey = 'enterprise';

const themeEnterprise = {
  ...presetThemes[themeNormalKey],
  ...dashboardCoreThemes[themeNormalKey],
  ...reactUIThemes[themeNormalKey],
};

class CustomMarker extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            infoVisible:false,
            token: {},
        };
        }

        onMarkerClick = (evt) => 
        {
            this.setState({infoVisible: true});
            this.setState({
                token:{
                    default:{
                        id:this.props.id,
                    }
                }
            });
            
        };

        onCloseInfo = (evt) => 
        {
            this.setState({infoVisible:false});
        };

        
        render() {

            const{
                onMarkerClick,
                onCloseInfo,
                props:{
                    ...props
                },
                state:{
                    infoVisible,
                    token,
                }
            } = this;

            return (
                
                <Marker onClick={onMarkerClick} {...props}>
                    {infoVisible && (
                        <InfoWindow onCloseClick={onCloseInfo}>
                            <SplunkThemeProvider theme={themeEnterprise}>
                                <DashboardContextProvider>
                                    <DashboardCore
                                    width="250px"
                                    height= "340px"
                                    preset={EnterprisePreset}
                                    definition={info_definition}
                                    tokenBinding={token}
                                    />
                                </DashboardContextProvider>
                            </SplunkThemeProvider>
                        </InfoWindow>
                    )}
                </Marker>
            )
        }
}

export default CustomMarker;