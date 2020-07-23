function setCookie (cookieName, username, email, exdate) {
    let date = new Date();
    date.setTime(date.getTime() + (exdate*24*60*60*1000));
    let expires = "expires: " + date.toUTCString()
    document.cookie = `${cookieName}= username:${username}, email:${email}, ${expires} :path=/`

}

setCookie("acookie","aname","email@realplace.mars",5)