import React, { Component } from 'react';

// Import all the jQuery UI widget stuff...
import $ from 'jquery';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/themes/base/all.css';

export default class MyButton extends Component {
  // When the component is mounted, we need to
  // call "button()" to initialize the widget.
  componentDidMount() {
    $(this.button).button(this.props);
  }

  // After the component updates, we need to use
  // "this.props" to update the options of the
  // jQuery UI button widget.
  componentDidUpdate() {
    $(this.button).button('option', this.props);
  }

  // Renders the "<button>" HTML element. The "onClick()"
  // handler will always be a assigned, even if it's a
  // noop function. The "ref" property is used to assign
  // "this.button". This is the DOM element itself, and
  // it's needed by the "componentDidMount()" and
  // "componentDidUpdate()" methods.
  render() {
    return (
      <button
        onClick={this.props.onClick}
        ref={button => {
          this.button = button;
        }}
      />
    );
  }
}
