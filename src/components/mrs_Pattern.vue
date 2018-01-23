<template>
	<div>
		<x-header>mRS评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<div class="margins-top-md text-center">mRS评估模式</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>描述</th>
							<th>分级</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>完全无症状</td>
							<td style="max-width: 80px;min-width: 80px;">0&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>有症状，但无明显功能障碍，能完成所有日常工作和生活</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>轻度残疾，不能完成病前所有活动，无需帮助能完成自己的日常事务</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>中度残疾，需部分帮助，但能独立行走</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>中重度残疾，不能独立行走，日常生活需别人帮助</td>
							<td>4&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>重度残疾，卧床，二便失禁，日常生活完全依赖他人</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>死亡</td>
							<td>6&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释： mRS评分用来评估卒中后功能预后结局。
			</div>
			<div class="margins-top-xs">
				
参考文献：
Interobserver agreement for the assessment of handicap in stroke patients.Stroke.1988 May;19(5):604-7.
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