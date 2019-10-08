# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React lets us create single page applications that can use and refresh data without refreshing
 the page.

1. What does it mean to think in react?

It means structuring your app to utilize state and props for maintaining and passing between
 components.

1. Describe state.

State allows us to manipulate components' behavior. Rather than modify component behavior
 directly, we can direct it by modifying state objects.

1. Describe props.

Props are how we pass information to components. We can manipulate components by sending them
 different props to act on.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything changed outside of the component. API calls and console logging are
 side effects. You syn them by passing an array to the useEffect hook. useEffect will sync with
  whatever we pass in the array.
