// console.log("hello");

//  $(document).ready(function(){
//      $('.submit').click(function(event){
//          event.preventDefault()
//          console.log("clicked")

//          var email= $('.email').val();
//          var name= $('.name').val();
//          var message= $('.message').val();
//          var statusEl= $('.status')
//          statusEl.empty()

//         //  if(email.length> 5 && email.includes('@') && email.includes('.')){
//         //      statusEl.append('<div>Email is valid</div>');
//         //  }else{
//         //      event.preventDefault();
//         //     statusEl.append('<div>Email is not valid</div>');
//         //  }

//          if(name.length>=2){
//             statusEl.append('<div>Name is valid</div>');
//          }else{
//              event.preventDefault();
//             statusEl.append('<div>Name is not valid</div>');
//          }

//          if(message.length>=2){
//             statusEl.append('<div>Message is valid</div>');
//          }else{
//              event.preventDefault();
//             statusEl.append('<div>Message is not valid</div>');
//          }
//      })
//  })


var form = document.getElementById("contact-form1");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
