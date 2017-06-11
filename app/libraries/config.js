import path from 'path'
import electron from 'electron'
import pkg from '../package.json'

const app = electron.app || electron.remote.app

const config = {}

// app info
config.app = {
  name: app.getName(),
  path: app.getAppPath(),
  version: pkg.version,
  updated: pkg.updated,
  description: pkg.description
}

// storage config
config.storage = {
  meta: { type: pkg.name, version: pkg.version },
  sign: `© ${new Date().getFullYear()} zlnote`,
  root: path.resolve(config.app.path, '..', 'data'),
  ext: '.note'
}

// log4js appender config
config.log4js = {
  type: 'file',
  filename: path.resolve(config.app.path, '..', pkg.name + '.log')
}

// server config
config.server = {
  address: '',
  port: 56831
}

export default Object.assign(config, {
  stamp_length: 8
})
