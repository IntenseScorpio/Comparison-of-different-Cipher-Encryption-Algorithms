function gcd(a,b){
    while(a!=a || b!=0){
        if (a==b){
            return a;
        }else if(a<b){
            b = b-a;
        }else{
            a = a-b;
        }
    }
    if (a==0){
        return b;
    }else{
        return a;
    }
}


document.querySelector('.submitBTN4').addEventListener('click', (f) => {
    f.preventDefault()
    let key = parseInt(document.querySelector('#mkey').value);
    let akey = parseInt(document.querySelector('#akey').value);
    let cipher = "";
    if (gcd(key,26)!=1){
        alert("Enter a key so that GCD of key and 26 is 1");
    }else{
        let a = document.querySelector('#plaintext').value;
        let n = a.length;
        let i;
        
        for(i=0;i<n;i++){
            let ascii = a.charCodeAt(i);
            if (ascii>96 && ascii<123){
                ascii -= 97;
                ascii = ((ascii*key+akey)%26)+97;
                cipher += String.fromCharCode(ascii);
            }else if (ascii>64 && ascii<91){
                ascii -= 65;
                ascii = ((ascii*key+akey)%26)+65;
                cipher += String.fromCharCode(ascii);
            }else{
                cipher += a[i];
            }

        }
    }
    document.querySelector('#cipher').innerHTML = cipher
})