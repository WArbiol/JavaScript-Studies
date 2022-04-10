export default {
    get AUtoKm() { 
        return 149587870 
    },

    convert(au) {
        return au * this.AUtoKm
    }
}