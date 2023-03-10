# Eas Build Test

This project is for testing builds in Android and IOS, having a project from 0.

For push notification the project has to be configured in FIREBASE console.
https://docs.expo.dev/push-notifications/push-notifications-setup/

If the project is configured EAS project secret GOOGLE_SERVICES_JSON has to be included uploading google-services.json downloaded from Firebase project.

After installing apk or ipa in devices and start expo server dev client... an Expo Push Token is given like that: `ExponentPushToken[XXXXXXXXXXXXXX]`. It could be used for send push notifications to dev.

- iOS `ExponentPushToken[4ajkjJKY26ELR8pNkwa9jj]`
- Android `ExponentPushToken[T1h2ypFUxXEVqBEeZzKfxv]`

## Deep Links

Deep links has an schema like : `easbuildtest://{url}`

If you need to test Deep Links fastest way is using [QR GENERATOR TOOL](https://www.qr-code-generator.com/).

## Troubleshoot

### Testing in web:

Expo Webpack is actually in beta and most times testing in web mode (`expo start --dev-client` and `w`) is crashing with pollyfill error.

To solve this error:

- Uninstall web modules
  `npm uninstall react-dom react-native-web @expo/webpack-config`
- Install them again through Expo
- `npx expo install react-dom react-native-web @expo/webpack-config`
- Start only web mode:
  `npx expo start --web`
