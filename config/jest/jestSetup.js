const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16.3')
global.fetch = require('jest-fetch-mock')
global.shallow = Enzyme.shallow
global.mount = Enzyme.mount

Enzyme.configure({ adapter: new Adapter() })
