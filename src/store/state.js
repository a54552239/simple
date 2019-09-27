import {getStore} from "../assets/js/storage";
const theme = getStore('theme');
export default {
    theme: theme ? theme : 'dark',

}
