<template>
	<div>
		<div class="margins-horizontal-x margins-bottom-sm margins-top-rem">
			<div class="margins-top-md text-center">患者端坐，喝下30毫升温开水，观察所需时间呛咳情况。</div>
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
							<td>能顺利地1次将水咽下</td>
							<td>1级（优）</td>
						</tr>
						<tr>
							<td>分两次以上，能不呛咳地咽下</td>
							<td>2级（良）</td>
						</tr>
						<tr>
							<td>能1次咽下，但有呛咳</td>
							<td>3级（中）</td>
						</tr>
						<tr>
							<td>分2次以上咽下，但有呛咳</td>
							<td>4级（可）</td>
						</tr>
						<tr>
							<td>频繁呛咳，不能全部咽下</td>
							<td>5级（差）</td>
						</tr>
					</tbody>
				</x-table>
				<p class="margins-top-xs text-center">评判标准</p>
				<x-table full-bordered style="background-color:#fff;">
					<tbody>
						<tr>
							<td >1级，5秒之内</td>
							<td >正常&nbsp;&nbsp;<input type="radio" name="waterTime" value="1"></td>
						</tr>
						<tr>
							<td>1级，5秒以上或2级</td>
							<td>可疑&nbsp;&nbsp;<input type="radio" name="waterTime" value="2"></td>
						</tr>
						<tr>
							<td>3～5级</td>
							<td>异常&nbsp;&nbsp;<input type="radio" name="waterTime" value="3"></td>
						</tr>
					</tbody>
				</x-table>
				<p class="margins-top-xs text-center">疗效评判标准</p>
				<x-table full-bordered style="background-color:#fff;">
					<tbody>
						<tr>
							<td colspan="2">吞咽障碍消失，饮水试验评定1级</td>
							<td colspan="1">治愈&nbsp;<input type="radio" name="waterLevel" value="1"></td>
						</tr>
						<tr >
							<td colspan="2">吞咽障碍明显改善，饮水试验评定2级</td>
							<td colspan="1">有效&nbsp;<input type="radio" name="waterLevel" value="2"></td>
						</tr>
						<tr >
							<td colspan="2">吞咽障碍改善不显著，饮水试验评定>=3级</td>
							<td colspan="1">异常&nbsp;<input type="radio" name="waterLevel" value="3"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs text-center"><button v-bind:style="{'border':'0', 'background-color':'rgba(22, 155, 213, 1)','color':'#fff','width':'1rem','border-radius':'8px','line-height':'22px',}">保存结果</button></div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释： 1.该量表由日本洼田俊夫提出，分级明确清楚，操作简单，利于选择有治疗适应证的患者。但要求患者意识清楚并能够按照指令完成试验。 2.该量表仅反映了对液体误吸的程度，不能全面反映各种食物的误吸情况，结果判定一定程度上依赖于患者主观感受，评估准确性不是很高（达60%以上）。
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore,ButtonTab } from 'vux'

	export default {
		components: {
			XHeader,
			XTable,
			LoadMore,

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