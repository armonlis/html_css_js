const agents = document.getElementById('app_agents-container');
agents.addEventListener('click', event => {
    const parent = event.target.offsetParent;
    console.log(parent);
});
