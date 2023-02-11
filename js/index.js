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
      link.href="https://drive.google.com/drive/folders/1n1rylaau6gDAgNGJbuplkYcqqETtF3pN"
      link_bot.href="https://drive.google.com/drive/folders/1n1rylaau6gDAgNGJbuplkYcqqETtF3pN"

    }else if(mo==4){
      link.href="https://drive.google.com/drive/folders/1I03ctmYIsOXXi6nLjPuohS6avC1enjBi"
      link_bot.href="https://drive.google.com/drive/folders/1I03ctmYIsOXXi6nLjPuohS6avC1enjBi"

    }else if(mo==5){
      link.href="https://drive.google.com/drive/folders/1d11eqt5IOuiWLrgp6PhLajtIHq6FlcvQ"
      link_bot.href="https://drive.google.com/drive/folders/1d11eqt5IOuiWLrgp6PhLajtIHq6FlcvQ"

    }else if(mo==6){
      link.href="https://drive.google.com/drive/folders/1Jv3vC7pmwo5Da1qk2OnPL6HCsYCNEFWp"
      link_bot.href="https://drive.google.com/drive/folders/1Jv3vC7pmwo5Da1qk2OnPL6HCsYCNEFWp"

    }else if(mo==7){
      link.href="https://drive.google.com/drive/folders/1dUVHh_tcRaJqXvB955nHCMrMbnjBdjRB"
      link_bot.href="https://drive.google.com/drive/folders/1dUVHh_tcRaJqXvB955nHCMrMbnjBdjRB"

    }else if(mo==8){
      link.href="https://drive.google.com/drive/folders/15FiDd6vVhxm3NxL0nNnNqqAe8VDDlxR0"
      link_bot.href="https://drive.google.com/drive/folders/15FiDd6vVhxm3NxL0nNnNqqAe8VDDlxR0"

    }else if(mo==9){
      link.href="https://drive.google.com/drive/folders/1V7vO_IbQi6vpaSjRSvGF-2e3W7TPvhqT"
      link_bot.href="https://drive.google.com/drive/folders/1V7vO_IbQi6vpaSjRSvGF-2e3W7TPvhqT"

    }else if(mo==10){
      link.href="https://drive.google.com/drive/folders/1uVDUR5gz4gTzg9r21W8DMLN9v17NN_7L"
      link_bot.href="https://drive.google.com/drive/folders/1uVDUR5gz4gTzg9r21W8DMLN9v17NN_7L"

    }else if(mo==11){
      link.href="https://drive.google.com/drive/folders/1q5lBcsNLAxyjjkofks8BMzE9Grj60VAt"
      link_bot.href="https://drive.google.com/drive/folders/1q5lBcsNLAxyjjkofks8BMzE9Grj60VAt"

    }else if(mo==12){
      link.href="https://drive.google.com/drive/folders/1o0okVTN7wiHd-SQmG8CamtTUHYKoysnV"
      link_bot.href="https://drive.google.com/drive/folders/1o0okVTN7wiHd-SQmG8CamtTUHYKoysnV"

    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('date').innerHTML = dt;
    document.getElementById('month').innerHTML = mo;
    document.getElementById('year').innerHTML = yr;
}
setInterval(displayTime, 10);
