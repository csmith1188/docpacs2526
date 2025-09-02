function loadScript(scriptURL) {
  const newScript = document.createElement("script");
  newScript.src = scriptURL;
  newScript.defer = true;
  document.body.appendChild(newScript);
}

function loadData(URL) {
  let xmlReq;

  if (window.XMLHttpRequest) {
    xmlReq = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // For very old IE versions (rarely needed now)
    try {
      xmlReq = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      return;
    }
  } else {
    return;
  }

  xmlReq.open("GET", URL, true);

  xmlReq.onreadystatechange = function () {
    if (xmlReq.readyState === 4) {
      if (xmlReq.status === 200) {
        ChangeData(xmlReq.responseText);
      } else {
        ChangeData("Error loading data");
      }
    }
  };

  xmlReq.send();
}
