
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn1").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn1").classList.remove('active');
    },
    template: `<div>NF</div>`
}
