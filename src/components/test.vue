<template>
	<div>
		<div style="padding:15px;">
			<load-more tip="full-bordered" :show-loading="false" background-color="#fbf9fe"></load-more>
			<x-table full-bordered style="background-color:#fff;">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="10">Banana</td>
						<td>x 08111</td>
						
						<td>x 08111</td>
					</tr>
					<tr>
						<td rowspan="4">Banana111</td>
					<td>x 08111</td>
			

					</tr>
					<tr>
						<td>x 08111</td>
					</tr>
				</tbody>
			</x-table>
		</div>
	</div>
</template>

<script>
	import { XTable, LoadMore } from 'vux'

	export default {
		components: {
			XTable,
			LoadMore
		}
	}
</script>