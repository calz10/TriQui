import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'mobx-react'
import { Root } from 'native-base'
import App from './src/App'
import RootStore from './src/stores'
import { name as appName } from './app.json'

const rootStore = new RootStore()
const AppData = () => (
  <Root>
    <Provider rootStore={rootStore} {...rootStore}>
      <App />
    </Provider>
  </Root>
)

AppRegistry.registerComponent(appName, () => AppData)
