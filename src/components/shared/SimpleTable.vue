<template>
<div class="flex flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class=" py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class=" shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th 
                                v-for="(item, index) in titles" :key="index" scope="col"
                                class="px-6 py-3 text-left text-xs text-center font-medium text-gray-500 uppercase tracking-wider">{{item}}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in model" :key="index"
							:class="index % 2 === 0 ? 'bg-gray-100 hover:bg-darkGreen' : 'bg-gray-300 hover:bg-darkGreen'"
                            @click="$emit('singleView', item)"
                        >
							<td v-for="(col, index) in modelCol()" :key="index" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item[modelCol()[index]] }}</td>
							<!-- <td class=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <span class="button bg-darkGreen">Edit</span>
                            </td>
                            <td class=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <span class="button bg-darkRed">Delete</span>
                            </td> -->
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({components: {},})
export default class SimpleTable extends Vue {

    @Prop(Array) readonly titles: any;
    @Prop(Array) readonly model: any; 

	// methods
    public modelCol() {
        let len = Object.keys(this.model[0]).length;
        let counter = 0;
        let colName = [];
        for (const key in this.model[0]) {
            if (counter <= len) {
                colName[counter] = key;
                counter ++;
            }
        }
        return colName;
    }
    public singleView() {
        console.log('klik')
        // console.log(item);
    }
	// END :: methods
}
</script>

<style></style>
