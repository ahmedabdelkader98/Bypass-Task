import React, { createContext, useState } from 'react';

export const ContextHandler = createContext();

export const ContextHandlerProvider = (props) => {
  const [UpTopNotificationBarObjContext, setUpTopNotificationBarObjContext] =
    useState({
      text: '',
      color: '',
      show: false,
    });
  const showUpTopNotificationBarContext = (text, color) => {
    var tempUpTopNotificationBarObjContext = {
      ...UpTopNotificationBarObjContext,
    };
    tempUpTopNotificationBarObjContext.text = text;
    tempUpTopNotificationBarObjContext.color = color;
    tempUpTopNotificationBarObjContext.show = true;
    setUpTopNotificationBarObjContext({
      ...tempUpTopNotificationBarObjContext,
    });
    setTimeout(function () {
      tempUpTopNotificationBarObjContext.show = false;
      setUpTopNotificationBarObjContext({
        ...tempUpTopNotificationBarObjContext,
      });
    }, 3000);
  };
  return (
    <ContextHandler.Provider
      value={{
        showUpTopNotificationBarContext,
        UpTopNotificationBarObjContext,
        setUpTopNotificationBarObjContext,
      }}
    >
      {props.children}
    </ContextHandler.Provider>
  );
};
