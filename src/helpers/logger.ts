// BASED ON https://developer.chrome.com/docs/devtools/console/format-style/

export enum ConsoleLogType {
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}
const config = {
  [ConsoleLogType.INFO]: {
    color: '#0969da',
    action: console.log
  },
  [ConsoleLogType.DEBUG]: {
    color: '#54aeff',
    action: console.log
  },
  [ConsoleLogType.WARNING]: {
    color: '#ebbf41',
    action: console.warn
  },
  [ConsoleLogType.ERROR]: {
    color: '#cc0000',
    action: console.error
  }
}

export const Logger = (type: ConsoleLogType, params: { service?: string; message: string }) => {
  return config[type].action(
    '%s %c%s %c%s %c%s',
    new Date().toLocaleTimeString(),
    `color: ${config[type]?.color}; font-weight: bold`,
    `proApp RN [${type}]:`,
    'color: gray; font-weight: 300',
    params.service ? `[${params.service}]` : '',
    'font-weight: normal',
    params.message
  )
}
