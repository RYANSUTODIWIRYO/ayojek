import React, { Component } from 'react'
import App from "./App"

import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"

class MyApp extends Component {
    render(){
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>                    
                    <App/>
                </PersistGate>
            </Provider>
        )
    }
}

export default MyApp