//This will inject the module.
//Add file to src

function injectModule(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'module');
    s.setAttribute('src', file);
    th.appendChild(s);
}

//Can be deleted. Use only if you need to inject custom css
function injectStyle(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('type', 'text/css');
    s.setAttribute('href', file);
    th.appendChild(s);
}

//Can be deleted. Use only if you need to inject custom Javascript
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

function add_base_url(url, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('base_ext');
    s.setAttribute('url', url);
    s.setAttribute('ext_id', chrome.runtime.id)
    th.appendChild(s);
}

//var base_url = chrome.extension.getURL('');
//add_base_url(base_url, 'body');
injectModule(chrome.runtime.getURL('./firebase.js'), 'body');