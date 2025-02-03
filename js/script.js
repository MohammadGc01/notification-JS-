
// OOP for Make notification Box
function Notification(TEXT) {
    this.text = TEXT;
    
    this.SuccessNotification = function () {
        const div = document.createElement('div');
        div.className = 'success-notification';  
        div.innerHTML = `
        <h5> ${this.text} </h5>
        <span class="icon-back"></span>  
        <span><img src="./svg/success-svgrepo-com.svg"></span>
        <audio src="./audio/success_bell-6776.mp3" autoplay>

        `;
        document.body.appendChild(div);
        setTimeout(() => {
            deleteNotif('success');
        }, 1000);
    }
    
    this.ErrorNotification = function () {
        const div = document.createElement('div');
        div.className = 'error-notification';  
        div.innerHTML = `
        <h5> ${this.text} </h5>
         <span class="icon-back"></span>
         <span><img src="./svg/error-svgrepo-com.svg"></span>
         <audio src="./audio/success_bell-6776.mp3" autoplay>

        `;
        document.body.appendChild(div);
        
        setTimeout(() => {
            deleteNotif('error');
        }, 1000);
    }

    this.WarningNotification = function () {
        const div = document.createElement('div');
        div.className = 'warning-notification';  
        div.innerHTML = `
        <h5> ${this.text} </h5>
         <span class="icon-back"></span>
         <span><img src="./svg/warning-svgrepo-com.svg"></span>
         <audio src="./audio/success_bell-6776.mp3" autoplay>

        `;
        document.body.appendChild(div);
        
        setTimeout(() => {
            deleteNotif('warning');
        }, 1000);
    }
}

// this function for delete notification
function deleteNotif(Notification) {

    if(Notification === 'success') {
    const success = document.querySelector('.success-notification');
    success.classList.add('delete-notification');
    setTimeout(() => {
        success.remove();
     }, 500);
       
    }

if(Notification === 'error') {
    const error = document.querySelector('.error-notification');
    error.classList.add('delete-notification');
    setTimeout(() => {
        error.remove();
     }, 500);
     
}

if(Notification === 'warning') {
    const warning = document.querySelector('.warning-notification');
    warning.classList.add('delete-notification');
    setTimeout(() => {
        warning.remove();
     }, 500);
     
}

}


// this functions for testing notification
function successNotif() {
    const notif = new Notification('Success Notification');
    notif.SuccessNotification();
}

function errorNotif() {
    const notif = new Notification('Error Notification');
    notif.ErrorNotification();
}


function warningNotif() {
    const notif = new Notification('Warning Notification');
    notif.WarningNotification();
}
