fetch('FILE.TXT')
.then(Response => {
    return Response.text();
}
)
.then(data => console.log(data))