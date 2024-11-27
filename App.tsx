import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation/tabs';

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MyTabs />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
