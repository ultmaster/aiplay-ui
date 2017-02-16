import React, {Component} from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

function getStyles(context) {
  const _context$muiTheme = context.muiTheme,
    appBar = _context$muiTheme.appBar,
    iconButtonSize = _context$muiTheme.button.iconButtonSize,
    zIndex = _context$muiTheme.zIndex,
    palette = _context$muiTheme.palette;

  const flatButtonSize = 36;

  return {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      display: 'flex',
      backgroundColor: palette.canvasColor,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 20,
      fontWeight: 300,
      color: palette.textColor,
      height: appBar.height,
      lineHeight: appBar.height + 'px',
      textAlign: 'center',
    },
    mainElement: {
      boxFlex: 1,
      flex: '1'
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16
    },
    iconButtonIconStyle: {
      fill: palette.accent1Color,
      color: palette.accent1Color,
    },
    flatButton: {
      color: palette.accent1Color,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
    }
  };
}

class NavBar extends Component {
  render() {

    console.log(this.context);
    const prepareStyles = this.context.muiTheme.prepareStyles;
    const styles = getStyles(this.context);
    const title = this.props.title;
    console.log(this.props);
    console.log(styles.iconButtonIconStyle);

    return (
      <div className="container" style={styles.root}>
        <h1 style={styles.title}>{title}</h1>
        <IconButton
          style={styles.iconButtonStyle}
          iconStyle={styles.iconButtonIconStyle}
          onTouchTap={this.handleTouchTapLeftIconButton}
        ><NavigationMenu style={styles.iconButtonIconStyle}/></IconButton>

      </div>
    );
  }
}

NavBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default NavBar;
