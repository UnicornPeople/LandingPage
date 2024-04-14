import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./fonts/Font.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import * as Sentry from "@sentry/react";
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router-dom";

ChannelService.loadScript()

ChannelService.boot({
  // write your plugin key  
  "pluginKey":"52bce222-811d-4bb8-9d56-ecff2504be8e",
});

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const queryParameters = new URLSearchParams(window.location.search)
const utmSource = queryParameters.get("utm_source")
logEvent(analytics, 'ref_utm_source', {
  content_id: utmSource
});

Sentry.init({
  dsn: "http://0ced3b57de26986918913e5753ad224f@sentry.jspiner.io/3",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  tracesSampleRate: 1.0,
});

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
