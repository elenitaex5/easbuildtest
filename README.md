# Eas Build Test

This project is for testing builds in Android and IOS, having a project from 0.

For push notification the project has to be configured in FIREBASE console.
https://docs.expo.dev/push-notifications/push-notifications-setup/

If the project is configured EAS project secret GOOGLE_SERVICES_JSON has to be included uploading google-services.json downloaded from Firebase project.

After installing apk or ipa in devices and start expo server dev client... an Expo Push Token is given like that: `ExponentPushToken[XXXXXXXXXXXXXX]`. It could be used for send push notifications to dev.