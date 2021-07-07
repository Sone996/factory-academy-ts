// const ModalMixin = {
//     computed: {
//         getModalObj() {
//             return this.$store.getters["appStore/getState"]('modalData');
//         },
//     },
//     methods: {
//         openModal(modalName, modalData) {
//             this.$store.commit('appStore/setState', {
//                 prop: 'showModal',
//                 value: true
//             });
//             this.$store.commit('appStore/setModalData', {
//                 modalName,
//                 modalData
//             });
//         },
//     }
// };

// export default ModalMixin;
