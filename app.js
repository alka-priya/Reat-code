const heading = React.createElement('div', {id: 'parent', className: 'color'}, [
    React.createElement('div', {id: 'child1'}, React.createElement('h1', {id:'heading'}, 'Alka priya')),
    React.createElement('div', {id: 'child2'}, 'I am child 2')]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
root.render(Headers);
