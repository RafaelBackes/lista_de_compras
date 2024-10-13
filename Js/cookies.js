// Função para definir um cookie
export function setCookie(name, value, days) {
     const d = new Date();
     d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Tempo em dias
     const expires = "expires=" + d.toUTCString();
     document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
 }
 
 // Função para obter um cookie
 export function getCookie(name) {
     const cname = name + "=";
     const decodedCookie = decodeURIComponent(document.cookie);
     const cookiesArray = decodedCookie.split(';');
     for (let i = 0; i < cookiesArray.length; i++) {
         let c = cookiesArray[i].trim();
         if (c.indexOf(cname) === 0) {
             return c.substring(cname.length, c.length);
         }
     }
     return "";
 }
 
 // Função para remover um cookie
 export function deleteCookie(name) {
     document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
 }
  