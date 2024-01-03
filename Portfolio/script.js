
// path Contect
// start Contect me
function sendEmail() {
    const form = document.querySelector('form');
    const senderName = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const msg = document.getElementById('message');

  // check console
  // console.log("test", senderName, email, subject, msg, form); 

  const bodyMessage = `Name: ${senderName.value}<br> Email: ${email.value}<br> Message: ${msg.value}`;
  
  Email.send({
    SecureToken: "5efc530d-6ddb-4b4a-8ecd-6058cfd9bbaa", //Token รวม Hosting name, Username, password
    To: 'ditoey2002@gmail.com', 
    From: "ditoey2002@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
          message => {
            if (message == "OK") {
              Swal.fire({
                title: "Success",
                text: "Message sent!",
                icon: "success"
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Failed to send message. Please try again later.",
                icon: "error"
              });
            }
          }
        );
    }


  form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendEmail();
  });

// End Contectme


// popup pic
  Swal.fire({
    imageUrl: "https://placeholder.pics/svg/300x1500",
    imageHeight: 1500,
    imageAlt: "A tall image"
  });

function showImageAlert(imageUrl) {
    Swal.fire({
      imageUrl: imageUrl,
      imageWidth: 500,
      imageHeight: 400,
      imageAlt: "A tall image"
    });
  }


  function showImageSub(imageUrl,title,text) {
  Swal.fire({
    title: title,
    text: text,
    imageUrl: imageUrl,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
}

function showtext(title) {
  Swal.fire({
    title: title,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
}
// end popup pic
