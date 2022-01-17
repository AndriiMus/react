const rootElement = document.querySelector('#root');

const renderGreeting = elem => {
  const element = React.createElement('div', { className: 'greeting' }, [
    React.createElement('div', { className: 'greeting__title' }, 'Hello, world!'),
    React.createElement('div', { className: 'greeting__text' }, "I'm learning React"),
  ]);
  ReactDOM.render(element, elem);
};

renderGreeting(rootElement);
