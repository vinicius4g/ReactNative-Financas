import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth'

console.disableYellowBox = true

import Routes from './src/routes'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar backgroundColor="#131313" barStyle="light-content" />
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	)
}
