1.  Explain the differences between `client-side routing` and `server-side routing`.
server side routing is done on the server. when we request a new page, the server has to send us an entire new page.
  pros: it only returns the page that we need, and search engines are optimized for it
  cons: every request makes the page refresh, so sometimes unnecessary data is requested/sent, and re-rendered
client side routing: routing is done on the client. when a link to a new page is clicked, the client simply renders the route by accessing data already available on the client
  pros: it's generally faster since less data is processed overall if the user is going to multiple pages
  cons: the whole app has to be loaded first, so the initial load will be slower, and you may potentially have to download data for views you'll never end up using, and it requires more work to setup. also, SEO lags behind that of server-side routing.

2.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create - post
read - get
update - put
delete - delete

3.  Mention three tools we can use to make AJAX requests
fetch
axios
XMLHttpRequest

also...

Request
SuperAgent
Qwest
jquery.ajax

4.  What does HTTP stand for? 
hypertext transfer protocol

5.  What does CRUD stand for? 
create-read-update-delete