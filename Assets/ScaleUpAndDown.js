﻿#pragma strict
 var maxSize = 2.0;
var minSize = 0.2;
var speed = 1.0;

 
function Update () {
    var range = maxSize - minSize;
    transform.localScale.y = minSize + Mathf.PingPong(Time.time * speed, range);
        transform.localScale.x = minSize + Mathf.PingPong(Time.time * speed, range);
    transform.localScale.z = minSize + Mathf.PingPong(Time.time * speed, range);

}
