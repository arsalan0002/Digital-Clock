const ShowTime = () => {
    let currentTime = new Date();
    // console.log(currentTime);

    let hrs = (currentTime.getHours()<10?"0" : "") + currentTime.getHours();
    let mins = (currentTime.getMinutes()<10?"0" : "") + currentTime.getMinutes();
    let sec = (currentTime.getSeconds()<10?"0" : "") + currentTime.getSeconds(); 
    let session = document.getElementById("session");

    if(hrs >= 12){
        session.innerHTML = "AM"
    }
    else{
        session.innerHTML = "PM"
    }
    
    if(hrs > 12){
        hrs = hrs - 12;
    }


    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('sec').innerHTML = sec;

};

    
setInterval(ShowTime,1000);
