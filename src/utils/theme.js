import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let _colors = require('material-ui/styles/colors');
let mainTheme = lightBaseTheme;
mainTheme.palette.primary1Color = _colors.indigo600;
mainTheme.palette.primary2Color = _colors.indigo900;
mainTheme.palette.accent1Color = _colors.pink500;
const muiTheme = getMuiTheme(mainTheme);

export default muiTheme;