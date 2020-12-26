let REACT_APP_URL: string = '';
if (process.env.NODE_ENV === 'production') {
  REACT_APP_URL = 'http://52.79.214.183:8080';
  // REACT_APP_URL = 'https://til-log.me';
} else if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  REACT_APP_URL = 'http://localhost:5000';
}
export default REACT_APP_URL;
// import REACT_APP_URL from "../config"
// ${REACT_APP_URL}
