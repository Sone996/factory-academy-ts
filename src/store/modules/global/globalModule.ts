import { Module, VuexModule } from 'vuex-module-decorators'

@Module
export default class MyModule extends VuexModule {
  someField: string = 'global module'
}