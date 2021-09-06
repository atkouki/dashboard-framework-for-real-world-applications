import React from "react";
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';
import './index.css';

import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';

import definition from "./definition.json"

import layout from "@splunk/react-page"
import SplunkThemeProvider from "@splunk/themes/SplunkThemeProvider"

import { DashboardContextProvider} from "@splunk/dashboard-context";
import CustomMap from "./customMap";

const themeDarkKey = 'enterpriseDark';

const themeDark = {
    ...presetThemes[themeDarkKey],
    ...dashboardCoreThemes[themeDarkKey],
    ...reactUIThemes[themeDarkKey],
}

const customPreset = {
    ...EnterprisePreset,
    visualizations:{
        ...EnterpriseViewOnlyPreset.visualizations,
        'viz.CustomMap':CustomMap,
    }
}

layout(
    <SplunkThemeProvider theme={themeDark}>
        <DashboardContextProvider>
            <DashboardCore
            width="100%"
            height= "calc(100vh - 78px)"
            preset={customPreset}
            definition={definition}
            />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle:"Supplier Chain Tracking",
        hideFooter: true
    }
);
