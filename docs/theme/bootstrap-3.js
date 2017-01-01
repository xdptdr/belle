const bootstrap3Theme = {

  config: {
    button: {
      preventFocusStyleForTouchAndClick: false,
    },
    datePicker: {
      preventFocusStyleForTouchAndClick: false,
    },
    rating: {
      preventFocusStyleForTouchAndClick: false,
    },
    select: {
      shouldPositionOptions: false,
    },
    toggle: {
      preventFocusStyleForTouchAndClick: false,
    },
  },

  style: {
    actionArea: {
      style: {
        boxSizing: 'border-box',
        color: '#333',
        cursor: 'pointer',
        fontSize: 17,
        paddingTop: '11px',
        paddingBottom: '11px',
        paddingLeft: '16px',
        paddingRight: '16px',
        marginTop: -1,
        textAlign: 'center',
        textDecoration: 'none',
        width: 48,
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',

        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the button text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      hoverStyle: {
        background: '#e6e6e6',
        borderLeft: '1px solid #adadad',
        borderRight: '1px solid #adadad',
        borderTop: '1px solid #adadad',
        borderBottom: '1px solid #adadad',
      },

      activeStyle: {
        borderTop: '1px solid #adadad',
        borderLeft: '1px solid #adadad',
        borderRight: '1px solid #adadad',
        borderBottom: '1px solid #adadad',
        background: '#e6e6e6',

        outline: 0,
        WebkitBoxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
        boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
      },
    },
    button: {
      style: {
        boxSizing: 'border-box',
        display: 'inline-block',
        padding: '6px 12px',
        marginBottom: 0,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.42857143,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        msTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: '4px',

        color: '#333',
        backgroundColor: '#fff',
        borderColor: '#ccc',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      hoverStyle: {
        color: '#333',
        textDecoration: 'none',

        backgroundColor: '#e6e6e6',
        borderColor: '#adadad',
      },

      focusStyle: {
        outline: '5px auto -webkit-focus-ring-color',
        outlineOffset: -2,

        color: '#333',
        backgroundColor: '#e6e6e6',
        borderColor: '#8c8c8c',
      },

      activeStyle: {
        color: '#333',
        backgroundColor: '#e6e6e6',
        borderColor: '#adadad',

        backgroundImage: 'none',
        outline: 0,
        WebkitBoxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
        boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
      },

      disabledStyle: {
        cursor: 'not-allowed',
        filter: 'alpha(opacity=65)',
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        opacity: '0.65',

        backgroundColor: '#fff',
        borderColor: '#ccc',
      },

      disabledHoverStyle: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
      },

      primaryStyle: {
        boxSizing: 'border-box',
        display: 'inline-block',
        padding: '6px 12px',
        marginBottom: 0,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.42857143,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        msTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: '4px',

        color: '#fff',
        backgroundColor: '#337ab7',
        borderColor: '#2e6da4',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      primaryHoverStyle: {
        textDecoration: 'none',

        color: '#fff',
        backgroundColor: '#286090',
        borderColor: '#204d74',
      },

      primaryFocusStyle: {
        outline: '5px auto -webkit-focus-ring-color',
        outlineOffset: -2,

        color: '#fff',
        backgroundColor: '#286090',
        borderColor: '#122b40',
      },

      primaryActiveStyle: {
        color: '#fff',
        backgroundColor: '#286090',
        borderColor: '#204d74',

        backgroundImage: 'none',
        outline: 0,
        WebkitBoxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
        boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
      },

      primaryDisabledStyle: {
        cursor: 'not-allowed',
        filter: 'alpha(opacity=65)',
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        opacity: '0.65',

        backgroundColor: '#337ab7',
        borderColor: '#2e6da4',
      },

      primaryDisabledHoverStyle: {
        backgroundColor: '#337ab7',
        borderColor: '#2e6da4',
      },
    },
    datePicker: {
      // wrapper of entire component
      style: {
        borderRadius: 4,
        width: 267,
        fontSize: 14,
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: 'white',

        /*
         To avoid any kind of flickering the user won't get feedback
         for selecting the button text
         */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
         Prevent flickering while tapping on WebKit
         http://stackoverflow.com/a/3516243/837709
         */
        WebkitTapHighlightColor: 'transparent',

        transition: 'color 0.1s',
        transitionTimingFunction: 'ease-out',
      },

      disabledStyle: {
      },

      readOnlyStyle: {
      },

      hoverStyle: {
      },

      focusStyle: {
        outline: '5px auto -webkit-focus-ring-color',
        outlineOffset: -2,
      },

      disabledHoverStyle: {
        backgroundColor: '#E1E9EC',
      },

      // nav-bar at top for month navigation
      navBarStyle: {
        height: 38,
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      },

      // left button in nav-bar to go to previous month
      prevMonthNavStyle: {
        float: 'left',
        marginLeft: -1,
        paddingLeft: '15px',
        paddingRight: '19px',
      },

      prevMonthNavIconStyle: {
        width: 0,
        height: 0,
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent',
        borderRight: '12px solid #666',
        borderRadius: 2,
      },

      hoverPrevMonthNavStyle: {
      },

      activePrevMonthNavStyle: {
      },

      // right button in nav-bar to go to previous month
      nextMonthNavStyle: {
        float: 'right',
        marginRight: -1,
        paddingLeft: '19px',
        paddingRight: '15px',
      },

      nextMonthNavIconStyle: {
        width: 0,
        height: 0,
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent',
        borderLeft: '12px solid #666',
        borderRadius: 2,
      },

      hoverNextMonthNavStyle: {
      },

      activeNextMonthNavStyle: {
      },

      // styling for month label on top of calendar
      monthLabelStyle: {
        fontSize: 15,
        boxSizing: 'border-box',
        paddingTop: 7,
        display: 'inline-block',

        /*
         User should be able to copy date.
         */
        WebkitUserSelect: 'initial',
        MozUserSelect: 'initial',
        MsUserSelect: 'initial',
        userSelect: 'initial',
      },

      // styling for entire grid of week-header and weeks
      weekGridStyle: {
        boxSizing: 'border-box',
        overflow: 'auto',
        paddingBottom: 1,
      },

      weekHeaderStyle: {
        overflow: 'auto',
        boxSizing: 'border-box',
        boxShadow: '1px 0 0 0 #ccc inset, -1px 0 0 0 #ccc inset',
      },

      // styling for week's day label
      dayLabelStyle: {
        width: 39,
        height: 32,
        marginRight: -1,
        color: '#333',
        display: 'block',
        float: 'left',
        boxSizing: 'border-box',
        paddingTop: 5,

        /*
         User should be able to copy date.
         */
        WebkitUserSelect: 'initial',
        MozUserSelect: 'initial',
        MsUserSelect: 'initial',
        userSelect: 'initial',
      },

      disabledDayLabelStyle: {
      },

      weekendLabelStyle: {
      },

      // styling for individual day
      dayStyle: {
        width: 39,
        height: 32,
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        color: '#333',
        float: 'left',
        marginRight: -1,
        marginBottom: -1,
        boxSizing: 'border-box',
        paddingTop: 5,
        position: 'relative',
        zIndex: 100,
        cursor: 'default',

        /*
         To avoid any kind of flickering the user won't get feedback
         for selecting the button text
         */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
         Prevent flickering while tapping on WebKit
         http://stackoverflow.com/a/3516243/837709
         */
        WebkitTapHighlightColor: 'transparent',
      },

      readOnlyDayStyle: {
      },

      activeDayStyle: {
        background: '#e6e6e6',
        borderLeft: '1px solid #adadad',
        borderRight: '1px solid #adadad',
        borderTop: '1px solid #adadad',
        borderBottom: '1px solid #adadad',
        WebkitBoxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
        boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
        zIndex: 200,
      },

      focusDayStyle: {
        background: '#e6e6e6',
        borderLeft: '1px solid #adadad',
        borderRight: '1px solid #adadad',
        borderTop: '1px solid #adadad',
        borderBottom: '1px solid #adadad',
        cursor: 'pointer',
        zIndex: 201,
      },

      disabledDayStyle: {
        opacity: 0.65,
        cursor: 'not-allowed',
      },

      disabledFocusDayStyle: {
        cursor: 'not-allowed',
        background: '#fff',
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
      },

      todayStyle: {
        color: '#337ab7',
      },

      weekendStyle: {
        color: '#aa6708',
      },

      selectedDayStyle: {
        background: '#E0E0E0',
        zIndex: 200,
      },

      otherMonthDayStyle: {
        color: '#999',
      },
    },
    card: {
      style: {
        boxSizing: 'border-box',

        marginBottom: 20,
        backgroundColor: '#fff',
        border: '1px solid transparent',
        borderColor: '#ddd',
        borderRadius: 4,
        WebkitBoxShadow: '0 1px 1px rgba(0,0,0,.05)',
        boxShadow: '0 1px 1px rgba(0,0,0,.05)',

        padding: 15,
      },
    },
    comboBox: {
      style: {
        background: 'transparent',
        position: 'relative',

        boxSizing: 'border-box',
        overflow: 'hidden',
        resize: 'none',

        display: 'block',
        width: '100%',
        padding: '6px 12px',
        fontSize: 14,
        lineHeight: 1.42857143,
        color: '#555',
        backgroundImage: 'none',
        border: '1px solid #ccc',
        borderRadius: 4,
        WebkitBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
        boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
        WebkitTransition: 'border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s',
        OTransition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
        transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',

        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      focusStyle: {
        borderColor: '#66afe9',
        outline: 0,
        WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
      },

      hoverStyle: {
        border: '1px solid #ccc',
      },

      disabledStyle: {
        backgroundColor: '#eee',
        opacity: 1,
      },

      disabledHoverStyle: {
        backgroundColor: '#eee',
        opacity: 1,
      },

      wrapperStyle: {
        outline: 0, // to avoid default focus behaviour
        boxSizing: 'border-box',
        position: 'relative',
      },

      menuStyle: {
        boxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',

        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 1000,
        display: 'block',
        float: 'left',
        minWidth: 160,
        padding: '5px 0',
        margin: '2px 0 0',
        fontSize: 14,
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
        border: '1px solid #ccc',
        borderRadius: 4,
        WebkitBoxShadow: '0 6px 12px rgba(0,0,0,.175)',
        boxShadow: '0 6px 12px rgba(0,0,0,.175)',
        /* Improve scrolling for mobile Safari */
        WebkitOverflowScrolling: 'touch',
      },

      caretToOpenStyle: {
        boxSizing: 'border-box',

        position: 'absolute',
        top: 15,
        right: 8,

        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: 4,
        verticalAlign: 'middle',
        borderTop: '4px dashed',
        borderRight: '4px solid transparent',
        borderLeft: '4px solid transparent',
      },

      caretToCloseStyle: {
        boxSizing: 'border-box',

        position: 'absolute',
        top: 15,
        right: 8,

        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: 4,
        verticalAlign: 'middle',
        borderTop: '4px dashed',
        borderRight: '4px solid transparent',
        borderLeft: '4px solid transparent',
      },

      caretFocusStyle: {
        outline: 0,
      },

      disabledCaretToOpenStyle: {
        borderTop: '6px solid #9F9F9F',
      },

      hintStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        outline: 'none',
        color: '#ccc',

        boxSizing: 'border-box',
        overflow: 'hidden',
        resize: 'none',

        display: 'block',
        width: '100%',
        padding: '6px 12px',
        fontSize: 14,
        lineHeight: 1.42857143,
        backgroundColor: '#fff',
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: 4,

        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
         Prevent flickering while tapping on WebKit
         http://stackoverflow.com/a/3516243/837709
         */
        WebkitTapHighlightColor: 'transparent',
      },
    },
    option: {
      style: {
        boxSizing: 'border-box',

        display: 'block',
        padding: '3px 20px',
        clear: 'both',
        fontWeight: 400,
        lineHeight: 1.42857143,
        color: '#333',
        whiteSpace: 'nowrap',

        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the option text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      hoverStyle: {
        color: '#262626',
        backgroundColor: '#f5f5f5',
      },

      selectStyle: {
        boxSizing: 'border-box',
        color: '#333',
        padding: 0,
        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the button text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',

        display: 'inline-block',
      },

      disabledSelectStyle: {
        padding: 0,
      },
    },
    placeholder: {
      style: {
        display: 'inline-block',
        color: '#333',

        boxSizing: 'border-box',
        cursor: 'pointer',
        padding: 0,
        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the button text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      disabledStyle: {
        cursor: 'not-allowed',
      },
    },
    rating: {
      style: {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        fontSize: '2.6rem',
        lineHeight: '2.6rem',
        color: '#e3e3e3',

        /*
         To avoid any kind of flickering the user won't get feedback
         for selecting the rating stars
         */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        /* This button can only be pressed */
        MsTouchAction: 'none',
        touchAction: 'none',

        /*
         Prevent flickering while tapping on WebKit
         http://stackoverflow.com/a/3516243/837709
         */
        WebkitTapHighlightColor: 'transparent',
      },

      disabledStyle: {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      focusStyle: {
        outline: '5px auto -webkit-focus-ring-color',
        outlineOffset: -2,
        borderRadius: 3,
      },

      hoverStyle: {
        opacity: 1,
      },

      disabledHoverStyle: {
        opacity: 0.6,
      },

      characterStyle: {
        color: '#FFCC00',
      },

      hoverCharacterStyle: {
        color: '#FFDA46',
      },

      activeCharacterStyle: {
        color: '#F3C200',
      },
    },
    select: {
      style: {
        boxSizing: 'border-box',
        display: 'inline-block',
        padding: '6px 12px',
        marginBottom: 0,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.42857143,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        msTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: '4px',

        color: '#333',
        backgroundColor: '#fff',
        borderColor: '#ccc',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      focusStyle: {
        outline: '5px auto -webkit-focus-ring-color',
        outlineOffset: -2,

        color: '#333',
        backgroundColor: '#e6e6e6',
        borderColor: '#8c8c8c',
      },

      activeStyle: {
        color: '#333',
        backgroundColor: '#e6e6e6',
        borderColor: '#adadad',

        backgroundImage: 'none',
        outline: 0,
        WebkitBoxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
        boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
      },

      hoverStyle: {
        color: '#333',
        textDecoration: 'none',

        backgroundColor: '#e6e6e6',
        borderColor: '#adadad',
      },

      wrapperStyle: {
        outline: 0, // to avoid default focus behaviour
        boxSizing: 'border-box',
        position: 'relative',
      },

      disabledStyle: {
        cursor: 'not-allowed',
        filter: 'alpha(opacity=65)',
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        opacity: 0.65,
      },

      disabledHoverStyle: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
      },

      menuStyle: {
        boxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',

        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 1000,
        display: 'block',
        float: 'left',
        minWidth: 160,
        padding: '5px 0',
        margin: '2px 0 0',
        fontSize: 14,
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
        border: '1px solid #ccc',
        borderRadius: 4,
        WebkitBoxShadow: '0 6px 12px rgba(0,0,0,.175)',
        boxShadow: '0 6px 12px rgba(0,0,0,.175)',

        /* Improve scrolling for mobile Safari */
        WebkitOverflowScrolling: 'touch',
      },

      caretToOpenStyle: {
        boxSizing: 'border-box',

        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: 4,
        verticalAlign: 'middle',
        borderTop: '4px dashed',
        borderRight: '4px solid transparent',
        borderLeft: '4px solid transparent',
      },

      caretToCloseStyle: {
        boxSizing: 'border-box',

        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: 4,
        verticalAlign: 'middle',
        borderTop: '4px dashed',
        borderRight: '4px solid transparent',
        borderLeft: '4px solid transparent',
      },

      disabledCaretToOpenStyle: {
        borderTop: '6px solid #9F9F9F',
      },
    },
    separator: {
      style: {
        boxSizing: 'border-box',

        display: 'block',
        padding: '3px 20px',
        clear: 'both',
        fontWeight: 'bold',
        lineHeight: 1.42857143,
        color: '#333',
        whiteSpace: 'nowrap',
      },
    },
    spinner: {
      style: {
        display: 'inline-block',
        fontSize: 15,
        textAlign: 'center',
      },

      characterStyle: {
        color: '#666',
        display: 'inline-block',
        WebkitAnimation: 'xdrcl-spinner-pulse 2s infinite ease-in-out',
        OAnimation: 'xdrcl-spinner-pulse 2s infinite ease-in-out',
        animation: 'xdrcl-spinner-pulse 2s infinite ease-in-out',
      },
    },
    textInput: {
      style: {
        boxSizing: 'border-box',
        overflow: 'hidden',
        resize: 'none',

        display: 'block',
        width: '100%',
        padding: '6px 12px',
        fontSize: 14,
        lineHeight: 1.42857143,
        color: '#555',
        backgroundColor: '#fff',
        backgroundImage: 'none',
        border: '1px solid #ccc',
        borderRadius: 4,
        WebkitBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
        boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
        WebkitTransition: 'border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s',
        OTransition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
        transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
      },

      hoverStyle: {
        border: '1px solid #ccc',
      },

      focusStyle: {
        borderColor: '#66afe9',
        outline: 0,
        WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
      },

      disabledStyle: {
        backgroundColor: '#eee',
        opacity: 1,
      },

      disabledHoverStyle: {
        backgroundColor: '#eee',
        opacity: 1,
      },
    },
    toggle: {
      style: {
        boxSizing: 'border-box',
        borderRadius: 4,
        height: 32,
        width: 76,
        WebkitUserSelect: 'none',
        position: 'relative',
        cursor: 'pointer',
        display: 'inline-block',

        border: '1px solid transparent',
        borderColor: '#ccc',
      },

      focusStyle: {
        outline: '5px auto -webkit-focus-ring-color',
        outlineOffset: -2,
      },

      disabledStyle: {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      sliderStyle: {
        boxSizing: 'border-box',
        position: 'relative',

        // Calculated with 2 * the width of choice area
        width: 112,
        transition: 'left 0.1s ease-in-out',
      },

      sliderWrapperStyle: {
        boxSizing: 'border-box',
        overflow: 'hidden',
        borderRadius: 3,
      },

      handleStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        borderRadius: 3,
        backgroundColor: '#fff',
        height: 30,
        width: 36,
        cursor: 'pointer',
        transition: 'left 0.1s ease-in-out',
        boxShadow: '1px 0 0 0 #ccc, -1px 0 0 0 #ccc, 0 1px 0 0 #ccc, 0 -1px 0 0 #ccc',

        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the button text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        /* This button can only be pressed */
        MsTouchAction: 'none',
        touchAction: 'none',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      firstChoiceStyle: {
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 30,

        // Calculated with the width of the whole toggle - half of the width from the handle
        //
        // This allows to have a round handle that is position exactly in on top of the
        // border between the two choice areas.
        width: 56,
        lineHeight: '30px',
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: '#337ab7',
        textIndent: -18,

        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the button text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      secondChoiceStyle: {
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 30,

        // Calculated with the width of the whole toggle - half of the width from the handle
        //
        // This allows to have a round handle that is position exactly in on top of the
        // border between the two choice areas.
        width: 56,
        lineHeight: '30px',
        textAlign: 'center',
        color: '#333',
        backgroundColor: '#eeeeee',
        textIndent: 18,

        /*
        To avoid any kind of flickering the user won't get feedback
        for selecting the button text
        */
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',

        /* This button can only be pressed */
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',

        /*
        Prevent flickering while tapping on WebKit
        http://stackoverflow.com/a/3516243/837709
        */
        WebkitTapHighlightColor: 'transparent',
      },

      hoverHandleStyle: {
        backgroundColor: '#e6e6e6',
        boxShadow: '1px 0 0 0 #adadad, -1px 0 0 0 #adadad, 0 1px 0 0 #adadad, 0 -1px 0 0 #adadad',
      },

      activeHandleStyle: {
        backgroundColor: '#d4d4d4',
        boxShadow: '1px 0 0 0 #8c8c8c, -1px 0 0 0 #8c8c8c, 0 1px 0 0 #8c8c8c, 0 -1px 0 0 #8c8c8c',
        cursor: 'url(http://www.google.com/intl/en_ALL/mapfiles/closedhand.cur), move',
      },

      disabledHandleStyle: {
        cursor: 'not-allowed',
      },
    },
  },
};

export default bootstrap3Theme;
