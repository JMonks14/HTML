function getPosts() {
fetch('http://jsonplaceholder.typicode.com/posts')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
      for (let i = 0; i < 100; i++) {
        console.log(data[i].id)
        console.log(data[i].userId)
        console.log(data[i].title)
        console.log(data[i].body)
        

        let para = document.createElement("P"); // Create a <p> element
        para;
        para.className = "alert alert-danger col-md-8";
        para.innerText = `The id is : ${(data[i].id)} 
        \n The  user id is :  ${(data[i].userId)} 
        \n  The title is : ${data[i].title}  
        \n  The body is : ${(data[i].body)}`; // Insert text
        let myDiv = document.getElementById("posts");
        myDiv.appendChild(para);
      }
    });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});
}