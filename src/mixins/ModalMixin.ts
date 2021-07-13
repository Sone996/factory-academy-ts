import store from '@/store'

import { Component, Vue } from 'vue-property-decorator'
@Component
class ModalMixin extends Vue {
    get getModalObj(): {} {
        return store.getters["globalModule/getState"]('modalData');
    }
    openModal(modalName: string, modalData: {} | null) {
        store.commit('globalModule/toggleModal', true);
        store.commit('globalModule/setModalData', {
            modalName,
            modalData
        });
    }
}
export default ModalMixin
