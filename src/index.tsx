import './index.css';

document.body.addEventListener('click', (event) => {
    console.log("clicked", event)
    event.preventDefault();
    event.stopPropagation();
}, {capture: true})
