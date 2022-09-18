//This will not run on the server, but on on the client server side. So in the browser.

const deleteProduct = (btn) => {
const prodId = btn.parentNode.querySelector('[name=productId]').value;
const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

};
