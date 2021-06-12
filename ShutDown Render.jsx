// Main Window
var win = new Window("palette",undefined);
win.orientation = "column";

// Group 1 for Adding a Buttons or Elements
var Grp1 = win.add("group",undefined);
Grp1.orientation = "row";

//Button
var ButtonRender = Grp1.add("button",undefined);
ButtonRender.text =  "Rendown"; //Render + Shutdown Button


//Show the Window & Center its position
win.show();
win.center();

ButtonRender.onClick = function(){
        if(app.project.renderQueue.numItems<1){
            alert("Please Add Comps for Render");
            }else{
            app.project.renderQueue.render(); // Start Rendering
            app.executeCommand(5); //Save Project after Rendering
            ShutdownPC();
            };
    };

//Shutdown Function
function ShutdownPC(){
    
    var ShutdownCode = "c:\\windows\\system32\\shutdown -s -f -t 01";
    var filepass = new File(new File($.fileName).parent);
	var file0 = filepass.fullName;
    var file1 = file0 + "/";
    var file = File(file1 + "SD.bat");
    
    if(!file.exists){
        file.open("w");
        file.write(ShutdownCode);
        file.close();
        file.execute();
        }else{
            file.execute();
            };
    
    
    };