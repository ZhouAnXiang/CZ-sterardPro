<template>
	<div>
		<x-header>GOS评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem  margins-bottom-sm">
			<div class="margins-top-md text-center">Glasgow结局分级：GOS （Glasgow Outcome Scale,GOS)</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="5">描述</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="5">
								死亡
							</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="5">
								植物状态
							</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="5">
								严重残疾，生活不能自理，需他人照顾
							</td>
							<td colspan="2">3&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="5">
								中度残疾，生活能够自理，但不能工作或学习
							</td>
							<td colspan="2">4&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="5">
								恢复良好，能返工作或学习，但可能有各种轻度后遗症
							</td>
							<td colspan="2" style=" max-width: 80px!important;min-width: 80px!important;">5&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">
				<div class="bg-ddd paddings-x">
					注释： 本量表史1975年专为严重脑外伤病人设计的，用于评估伤后6-12月的恢复情况，也可用于脑血管病患者的康复评估
				</div>
			</div>
			<div class="margins-top-xs">
				参考文献：
“Assessment of outcome after severe brain damage."Lancet.1975,Mar 1;1(7905):480-4.
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'

	export default {
		components: {
			XHeader,
			XTable,
			LoadMore

		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>

</style>