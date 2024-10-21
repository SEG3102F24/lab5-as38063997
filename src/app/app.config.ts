import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"lab3-seg3102-1e70d","appId":"1:863918851903:web:cfbe5947bf6b8a1a90b58a","storageBucket":"lab3-seg3102-1e70d.appspot.com","apiKey":"AIzaSyAYTeLq2VOSZ3e4sT5wyk8JnvbetjQnTto","authDomain":"lab3-seg3102-1e70d.firebaseapp.com","messagingSenderId":"863918851903","measurementId":"G-RPTSCL5BH1"})), provideFirestore(() => getFirestore()), provideAuth(() => getAuth())]
};