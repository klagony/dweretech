
<html> 
 <head> 
  <script language="javascript" > 
    
  function getFiles(path) 
  { 
   var fso = new ActiveXObject("Scripting.FileSystemObject"); 
   var files = new Array(); 
   var fso_files = fso.GetFolder(path).Files; 
   for(i=0;i<fso_files.length;i++) 
   { 
  var filePath = fso_files[i].path; 
  if(filePath.substring(filePath.length-4,filePath.length).toLowerCase()=="html") 
   files.push(fso_files[i].path); 
   } 
  } 
    
  function init() 
  { 
   var filePaths = getFiles("\\var\\www\\html\\africa2020\\images\\flags\\"); 
   var tbTabControl = document.getElementById("tbTabControl"); 
   var tabPageContainer = document.getElementById("tabPageContainer"); 
   var tabButtonContainer = document.getElementById("tabButtonContainer"); 
   tbTabControl.activeTab = null; 
   for(var i =0;i<filePaths.length;i++) 
   { 
  var iFrm = document.createElement("iframe"); 
  iFrm.src = filePaths[i]; 
  iFrm.style.display="none"; 
  iFrm.style.height="600px"; 
  iFrm.style.width="400px"; 
  var tabBtn = document.createElement("button"); 
  tabBtn.style.width="100px"; 
  tabBtn.innerText="Page"; 
  tabBtn.tabIFrame=iFrm; 
    
  tabBtn.attachEvent("onclick",function() 
    { 
    if(event.srcElement && event.srcElement.tabIFrame) 
    { 
      if(tbTabControl.activeTab) 
      { 
       tbTabControl.activeTab.style.height="20px"; 
       tbTabControl.activeTab.tabIFrame.style.display="none"; 
      } 
      event.srcElement.style.height = "25px"; 
      tabIFrame.style.display="block";  
      tbTabControl.activeTab = event.srcElement; 
    } 
    } );
  tabButtonContainer.appendChild(tabBtn); 
  tabPageContainer.appendChild(iFrm); 
  } 
  if(tabButtonContainer.childNodes.length>0) 
   tabButtonContainer.childNodes[0].click(); 
  } 
  </script> 
 </head> 
 <body onload="init()"> 
  <table id="tbTabControl"> 
   <tr><td id="tabButtonContainer"></td></tr> 
   <tr><td id="tabPageContainer"></td></tr> 
  </table> 
 </body> 
</html>
