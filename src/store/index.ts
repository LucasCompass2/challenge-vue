import { type IContact } from "@/interface/IContact";
import { type StoreState } from "@/interface/StoreType";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { type ActionContext } from 'vuex';
import { SEND_CONTACT } from "./actions";
import { DEFINE_CONTACT } from "./mutations";
import http from "@/http"
import type { InjectionKey } from "vue";

interface Estado {
    contact: IContact[],
}
export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        contact: []
    },
    mutations: {
        [DEFINE_CONTACT](state: StoreState, contact: IContact) {
            state.contact.push(contact)
        }
    },
    actions: {
        [SEND_CONTACT] ({ commit }: ActionContext<StoreState, StoreState>, contact: IContact, ) {
            commit(DEFINE_CONTACT, contact)
            return http.post('/contact', contact)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}