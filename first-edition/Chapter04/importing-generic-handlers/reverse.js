// Exports a generic function that changes the
// state of a component, causing it to re-render
// itself. Notice that the state property, "items",
// is very generic? This function is likely useful
// for several components as an event handler.
export default function reverse() {
  this.setState(this.state.items.reverse());
}
