//Funkcija za formatiranje datuma i vremena
export function formatDateTime(dt){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    let d = new Date(dt);
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year= d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    return `${month} ${date}, ${year} at ${hours}:${minutes}`;
}
