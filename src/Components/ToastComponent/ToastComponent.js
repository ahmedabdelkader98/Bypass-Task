import { View, Platform, Text } from 'react-native';
import React, { useContext } from 'react';
import { ContextHandler } from '../../Context/ContextHandler';

export default function ToastComponent() {
  const { UpTopNotificationBarObjContext } = useContext(ContextHandler);
  return (
    <>
      {UpTopNotificationBarObjContext.show && (
        <View
          style={{
            top: 0,
            backgroundColor: UpTopNotificationBarObjContext.color,
            width: '100%',
            height: Platform.OS === 'ios' ? 70 : 50,
            zIndex: 1000000,
            position: 'absolute',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              paddingTop: Platform.OS === 'ios' ? 50 : 0,
              paddingBottom: Platform.OS === 'ios' ? 10 : 0,
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            {UpTopNotificationBarObjContext.text}
          </Text>
        </View>
      )}
    </>
  );
}
