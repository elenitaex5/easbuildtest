export default {
  scheme: 'proapp',
  android: {
    package: 'com.elenitaex5.proapp',
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON
  },
  ios: {
    bundleIdentifier: 'com.elenitaex5.proapp'
  },
  extra: {
    eas: {
      projectId: '3513020b-19cf-440d-bc31-4287acfc48d0'
    }
  }
}
