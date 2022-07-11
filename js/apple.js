const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if (validateEmail(email)) {
      $result.text(email + ' is valid :)');
      $result.css('color', 'green');
    } else {
      $result.text(email + ' is not valid :(');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#email').on('input', validate);

  

  var button=document.getElementById('btn');

button.addEventListener('click',function(){

    var inp=document.getElementById('input1').value;
  var inp1=document.getElementById('input2').value;
  var inp2=document.getElementById("email").value
  var p=document.getElementById("p");
  var p1=document.getElementById("p1");
  p.innerHTML=inp1
  p1.innerHTML=inp
  p1.innerHTML="Istifadeci adi boyuk herfnen baslamalidir"
  

    if(inp===""||inp1===""||inp2===""){
      alert("Zehmet olmasa xanalari doldurun")
      
    }
    else if(inp1.length<6){
      p.innerHTML="Password minimum 6 herfden ibaret olmalidir"
    }
    else{
      alert("Xos Geldiniz")
    }
    
    
    
    
   
})
    
    
    
  


  
   
