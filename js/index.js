function displayTime(){
    var dateTime = new Date();
    var dt = dateTime.getDate();
    var mo = dateTime.getMonth()+1;
    var yr = dateTime.getFullYear();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    let link = document.getElementById('link');
    let link_bot = document.getElementById('link_bot');
    if(mo==1){
      link.href="https://drive.google.com/drive/folders/14MoVreA_LATNfWbXZGCrs1xLl_WO_C2q"
      link_bot.href="https://drive.google.com/drive/folders/14MoVreA_LATNfWbXZGCrs1xLl_WO_C2q"
    }else if(mo==2){
      link.href="https://drive.google.com/drive/folders/1tdM1dWZDCLT4TsTR5-kCHxaBUkWX4KD5"
      link_bot.href="https://drive.google.com/drive/folders/1tdM1dWZDCLT4TsTR5-kCHxaBUkWX4KD5"
    }else if(mo==3){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==4){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==5){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==6){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==7){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==8){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==9){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==10){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==11){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }else if(mo==12){
      link.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"
      link_bot.href="https://docs.google.com/spreadsheets/d/1PQnMF8dY8rBoKFEkCVN7GbFVC-fFKZvoBJZl17o4G6c/edit#gid=2071833528"

    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('date').innerHTML = dt;
    document.getElementById('month').innerHTML = mo;
    document.getElementById('year').innerHTML = yr;
}
setInterval(displayTime, 10);
