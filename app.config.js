export default {
  android: {
    package: 'com.elenitaex5.easbuildtest',
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
  },
  ios: {
    bundleIdentifier: 'com.elenitaex5.easbuildtest'
  },
  extra: {
    eas: {
      projectId: 'afec2f33-fd70-463b-a0af-1ff17c1a8143'
    }
  }
}