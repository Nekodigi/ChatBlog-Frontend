export const formatDate = (obj) => {
    let date = new Date(obj._seconds*1000);
    let y = date.getFullYear();
    let m = ('00' + (date.getMonth()+1)).slice(-2);
    let d = ('00' + date.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
}