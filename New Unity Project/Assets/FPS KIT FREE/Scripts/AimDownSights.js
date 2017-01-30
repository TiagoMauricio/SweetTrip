 var gun : Transform;
 var nextPos = 0.206;
 var nextField = 40.0;
 var nextPos2 = -0.842;
 var dampVelocity = 2.0;
 var dampVelocity2 = 2.0;
 var dampVelocity3 = 2.0;
 
 function Update () {
    var newPos = Mathf.SmoothDamp(gun.transform.localPosition.x, nextPos, dampVelocity, .3);
    var newField = Mathf.SmoothDamp(Camera.main.fieldOfView, nextField, dampVelocity2, .3);
    var newPos2 = Mathf.SmoothDamp(gun.transform.localPosition.y, nextPos2, dampVelocity3, .3);
    
    gun.transform.localPosition.x = newPos;
    gun.transform.localPosition.y = newPos2;
    Camera.main.fieldOfView = newField;
    
    if (Input.GetButton("Fire2")) {
        //adjust viewpoint and gun position
        nextField = 40.0;
        nextPos = 0;
        nextPos2 = -0.8;
        
        //slow down turning and movement speed
        GetComponent("MouseLook").sensitivityX = 2;
        GetComponent.<Camera>().main.GetComponent("MouseLook").sensitivityX = 2;
        GetComponent.<Camera>().main.GetComponent("MouseLook").sensitivityY = 2;
    } else {
        //adjust viewpoint and gun position
        nextField = 60.0;
        nextPos = 0.206;
        nextPos2 = -0.842;
        
        //speed up turning and movement speed
        GetComponent("MouseLook").sensitivityX = 6;
        GetComponent.<Camera>().main.GetComponent("MouseLook").sensitivityX = 6;
        GetComponent.<Camera>().main.GetComponent("MouseLook").sensitivityY = 6;
    }
 }