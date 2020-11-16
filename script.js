
function addGenerateButton(bodyEl) {
    //bodyEl.textContent = bodyEl.textContent.replace(/checkPage/gi, 'generate');
    var buttonanchor = document.getElementsByClassName("lmt__target_toolbar__save")[0];
    var parent = buttonanchor.parentElement,
    next = buttonanchor.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("Generate Audio Files!");
    
    button.id = "generatePhrazerButton";
    button.appendChild(text);
    if (next) parent.insertBefore(button, next);
    else parent.appendChild(button);
}

addGenerateButton(document.body);

generatePhrazerButton.addEventListener('click', function() {
    var fromlang = document.getElementsByClassName("lmt__source_textarea")[0].lang;
    var tolang = document.getElementsByClassName("lmt__target_textarea")[0].lang;
    var fromtext = document.getElementsByClassName("lmt__source_textarea")[0].value;
    var totext = document.getElementsByClassName("lmt__target_textarea")[0].value;




    alert(fromlang +':'+ fromtext +' --> '+ tolang +':'+ totext);
  }, false);


  function requestData()
  {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
  }

