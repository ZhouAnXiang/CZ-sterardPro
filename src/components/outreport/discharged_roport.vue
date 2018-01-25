<template>
	<div class="discharg-report">
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
            <div class="margins-top-md">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>患者姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>发病时间</th>
                            <th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{{ arr.name }}</td>
                            <td v-if="arr.sex==='0'">男</td>
                            <td v-else-if="arr.sex==='1'">女</td>
                            <td>{{ arr.age }}</td>
                            <td>{{ arr.onsetTime }}</td>
                            <td>本报告仅限于本院内部交流使用</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            
           <!-- <div id="t2" style="width: 100%;height:1rem;">
                <ul class="title-list" style="width: 100%;margin-top:0;margin-left:-0.4rem;">
					<li style="list-style: none;float: left;width:0.6rem;">患者姓名</li>
					<li style="list-style: none;float: left;font-size:0.1rem;width:0.3rem;">性别</li>
					<li style="list-style: none;float: left;font-size:0.1rem;width:0.3rem;">年龄</li>
					<li style="list-style: none;float: left;font-size:0.1rem;width:0.8rem;">开始发病时间</li>
					<li style="list-style: none;float: right;font-size:0.1rem;width:1.5rem;">报告日期：<span class="Report-date">2017年4月13日</span></li>
				</ul>
                <hr class="t2X" style="height: 2px;width: 100%;background: #000;line-height: 80px;"/>
                <ul class="user-list" style="width: 100%;margin-top:0;margin-left:-0.4rem;height:0.2rem;">
					<li style="list-style:none;float: left;font-size: 0.11rem;width:0.6rem;" class="name">王大</li>
					<li style="list-style:none;float: left;font-size: 0.11rem;width:0.3rem;" class="sex">男</li>
					<li style="list-style:none;float: left;font-size: 0.11rem;width:0.3rem;" class="age">18</li>
					<li style="list-style:none;float: left;font-size: 0.11rem;width:0.8rem;" class="age">10月15日 10：50</li>
					<li style="list-style:none;float: left;font-size: 0.11rem;width:1.5rem;" class="start-date">本报告仅限于本院内部交流使用</li>

				</ul>
			
			</div>
            -->
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>患者概况</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr v-bind:style="{background:'#eee'}" v-show="arr.hospitalized">
							<th>入院情况</th>
							<th style="text-align:left;padding-left:0.2rem;">{{arr.hospitalized}}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-show="arr.pastHistory">
							<td>既往史</td>
							<td style="text-align:left;padding-left:0.2rem;" >{{arr.pastHistory}}</td>
						</tr>
						<tr v-bind:style="{background:'#eee'}" v-show="arr.mRS">
							<td>入院时mRS</td>
							<td style="text-align:left;padding-left:0.2rem;">{{arr.mRS}}</td>
						</tr>
						<tr v-show="arr.nihhs">
							<td>入院时NIHSS</td>
							<td style="text-align:left;padding-left:0.2rem;">{{arr.nihhs}}</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>诊断</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-xs">
                <x-table full-bordered style="background-color:#fff;">
                    <thead  v-bind:style="{background:'#eee'}">
                        <tr v-show="diagnosis.diagnosis_1">
                            <th style="text-align:left; padding-left:0.2rem;" >{{diagnosis.diagnosis_1}}</th>
                        </tr>
                        <tr v-show="diagnosis.diagnosis_2">
                            <th style="text-align:left;padding-left:0.2rem;">{{diagnosis.diagnosis_2}}</th>
                        </tr>
                    </thead>
                </x-table>
            </div>
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>治疗方案</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-sm" style="background-color:#eee;">
                <div v-show="treatmentPlan.pt_pa || treatmentPlan.niao_ji_mei">
                    <span style="font-weight: bold;">最新指南推荐静脉溶栓治疗方案:</span>
                    <span  style="color:blue">{{treatmentPlan.pt_pa}}</span>
                    <span>{{treatmentPlan.niao_ji_mei}}</span>
                </div>
                <div v-show="treatmentPlan.best_dosage">
                    <span style="font-weight: bold;">医生选择系统最优剂量:</span>
                    <span>{{treatmentPlan.best_dosage}}</span>
                </div>
                 <div v-show="treatmentPlan.intravascular_therapy">
                    <span style="font-weight: bold;">血管内治疗:</span>
                    <span>{{treatmentPlan.intravascular_therapy}}</span>
                </div>
                 <div v-show="treatmentPlan.anticoagulant_therapy">
                    <span style="font-weight: bold;">抗凝治疗:</span>
                    <span>{{treatmentPlan.anticoagulant_therapy}}</span>
                </div>
                 <div v-show="treatmentPlan.antiplatelet_therapy">
                    <span style="font-weight: bold;">抗血小板治疗:</span>
                    <span>{{treatmentPlan.antiplatelet_therapy}}</span>
                </div>
            </div>
          <!--  <div class="margins-top-sm">
				<x-table full-bordered style="background-color:#eee; line-height: 24px">
					<thead>
						<tr  v-show="treatmentPlan.pt_pa || treatmentPlan.niao_ji_mei">
							<th>最新指南推荐静脉溶栓治疗方案</th>
							<th style="text-align:left;text-indent:0.2rem;">
                                <div style="color:blue">{{treatmentPlan.pt_pa}}</div>
                                <div>{{treatmentPlan.niao_ji_mei}}</div>
                            </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td v-show="treatmentPlan.best_dosage">医生选择系统最优剂量</td>
							<td style="text-align:left;text-indent:0.2rem;">{{treatmentPlan.best_dosage}}</td>
						</tr>
                        <tr v-show="treatmentPlan.intravascular_therapy">
							<td>血管内治疗</td>
							<td style="text-align:left;text-indent:0.2rem;">{{treatmentPlan.intravascular_therapy}}</td>
						</tr>
						<tr v-show="treatmentPlan.anticoagulant_therapy">
							<td>抗凝治疗</td>
							<td style="text-align:left;text-indent:0.2rem;">{{treatmentPlan.anticoagulant_therapy}}</td>
						</tr>
						<tr v-show="treatmentPlan.antiplatelet_therapy">
							<td>抗血小板治疗</td>
							<td style="text-align:left;text-indent:0.2rem;">{{treatmentPlan.antiplatelet_therapy}}</td>
						</tr>
					</tbody> 
				</x-table>
			</div> -->
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'> 溶栓出血风险及获益</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-sm">
                <x-table :cell-bordered="false" style="background-color:#fff;">
                    <thead>
                        <tr>
                            <th style="width:20%;line-height:24px;text-align:left;">出血风险</th>
                            <th style="width:80%;">
                                <div class="Bar">
                                    <div v-bind:style="{width: riskBenefit.riskVal+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{ riskBenefit.riskVal}}%</span>
                            </th>
                        </tr>
                        <tr >
                            <td style="width:20%;line-height:24px;text-align:left;">溶栓获益</td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width: riskBenefit.profitVal+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{riskBenefit.profitVal}}%</span>
                            </td>
                        </tr>
                    </thead>
                </x-table>
            </div>
            
           <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>溶栓决策支持概述</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-sm">
                <x-table :cell-bordered="false" style="background-color:#fff; line-height: 24px">
                        <tr>
                            <th style="width:20%;line-height:24px;text-align:left;">症状性脑出血 <br>THRIVE评分：<span>{{policy.THRIVE_RIC0005.strokeScore}}</span></th>
                            <th style="width:80%;">
                                <div class="Bar">
                                    <div v-bind:style="{width: policyTHRIVE5+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{policyTHRIVE5}}%</span>
								<span class="fr"> {{policyTHRIVE5sectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </th>
                        </tr>
                        <tr >
                            <td style="width:20%;line-height:24px;text-align:left;">3个月功能结局 <br> DRAGON评分：<span>{{policy.DRAGON.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width: policyDRAGON+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{policyDRAGON}}%</span>
								<span class="fr"> {{policyDRAGONsectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
					 	<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">3个月死亡率 <br>THRIVE评分：<span>{{policy.THRIVE_RIC0007.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width: policyTHRIVE7+'%'}">
                                    </div>
                                </div>
                                 <span class="fl">{{policyTHRIVE7}}%</span>
								<span class="fr"> {{policyTHRIVE7sectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
						<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">3个月不良结局 <br>THRIVE评分：<span>{{policy.THRIVE_RIC0006.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width: policyTHRIVE6+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{policyTHRIVE6}}%</span>
								<span class="fr"> {{policyTHRIVE6sectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
					<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">症状性脑出血 <br>SICH评分：<span>{{policy.SICH.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width: policySICH+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{policySICH}}%</span>
								<span class="fr">{{policySICHsectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span> 
                            </td>
                        </tr> 
                </x-table>
            </div>
                <!-- 报告Ⅱ-->
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>预后风险  </div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
            <div class="margins-top-sm">
                <x-table :cell-bordered="false" style="background-color:#fff; line-height: 24px">
                        <tr style="border:none">
                            <th style="width:20%;line-height:24px;text-align:left;">肺炎<br>APS评分：<span >{{arr.yuhoufengxian.AIS_APS.strokeScore}}</span></th>
                            <th style="width:80%;">
                                <div class="Bar">
                                    <div  v-bind:style="{width: filteredAPS+'%'}" >
                                        
                                    </div>
                                </div>
                                <span class="fl">{{ filteredAPS }}%</span>
								<span  class="fr" >{{ filteredAPSsectionVal }}</span><span class="fr">95%Cl &nbsp;&nbsp;</span> 
                            </th>
                        </tr>
                        <tr >
                            <td style="width:20%;line-height:24px;text-align:left;">消化道出血<br>GIB评分：<span >{{arr.yuhoufengxian.AIS_GIB.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width:filteredGIB+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{ filteredGIB }}%</span>
								<span class="fr"> {{ filteredGIBsectionVal }}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
						<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">住院死亡率 <br> GWTG评分：<span >{{arr.yuhoufengxian.GWTG.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width:filteredGWTG+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{filteredGWTG}}%</span>
								<span class="fr"> {{filteredGWTGsectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
						<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">30天后死亡风险<br>iScore评分：<span >{{arr.yuhoufengxian.iScore_month.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width:filteredmonth+'%'}">
                                    </div>
                                </div>
                                <span class="fl"> {{ filteredmonth }}%</span>
								<span class="fr"> {{filteredmonthsectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                            </td>
                        </tr>
						<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">1年后死亡风险 <br> iScore评分：<span>{{ arr.yuhoufengxian.iScore_year.strokeScore }}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width:filteredyear+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{filteredyear}}%</span>
								<span class="fr"> {{filteredyearsectionVal}}</span><span class="fr">95%Cl &nbsp; &nbsp;</span>
                            </td>
                        </tr>
						<tr >
                            <td style="width:20%;line-height:24px;text-align:left;">复发风险<br>ESRS评分：<span >{{arr.yuhoufengxian.ESRS.strokeScore}}</span></td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width:filteredESRS+'%'}">
                                    </div>
                                </div>
                                 <span class="fl" >{{filteredESRS}}%</span>
								<span class="fr"> {{filteredESRSsectionVal}}</span><span class="fr">95%Cl &nbsp; &nbsp;</span>
                            </td>
                        </tr>
                </x-table>
            </div> 
           
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;' v-show="arr.nihss_score">NIHSS评分对比</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;' v-show="arr.nihss_score"/>
            <div class="margins-top-md" v-show="arr.nihss_score">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr class="report_header_color" style="line-height:20px">
							<th >入院时</th>
							<th >溶栓后2小时</th>
							<th >溶栓后24小时</th>
                            <th >溶栓后7天</th>
                            <th >溶栓90天</th>
						</tr>
					</thead>
					<tbody >
						<tr >
							<td v-for="nihss in arr.nihss_score">{{nihss.score}}</td> 
						</tr>
						<tr >
							<td v-for="nihss in arr.nihss_score">{{nihss.desc}}</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;' v-show="arr.timeWindow">时间窗</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;' v-show="arr.timeWindow"/>
            <div class="margins-top-sm" v-show="arr.timeWindow">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr class="report_header_color">
							<th style="width:50%">项目</th>
							<th style="width:50%">时间</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for = "(item,index) in arr.timeWindow">
							<td >{{index}}</td>
							<td>{{item}}</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <!-- 报告Ⅲ-->
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>动态血压监测</div>
            
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>

                <div class="bottom" id="echart" ref="mychart" style=" height: 300px" onload="drawLine()"></div>

                <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'> 预测血压控制风险</div>
                <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>
                    <div class="margins-top-sm">
                        <x-table :cell-bordered="false" style="background-color:#fff;" >
                            <thead>
                                <tr v-show="arr.dbpsbp_ctrl">
                                    <th style="width:20%;line-height:24px;text-align:left">卒中复发风险<br><span>{{arr.dbpsbp_ctrl.message}}</span></th>
                                    <th style="width:80%;">
                                        <div class="Bar">
                                            <div v-bind:style="{width: dbpsbpCtrlAgainRisk+'%'}">
                                            </div>
                                        </div>
                                         <span class="fl" >{{dbpsbpCtrlAgainRisk}}%</span>
                                        <span class="fr"> {{dbpsbpCtrlAgainScore}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                                    </th>
                                </tr>
                                <tr >
                                    <td style="width:20%;line-height:24px;text-align:left;">联合血管事件<br><span>{{arr.dbpsbp_ctrl.message}}</span></td>
                                    <td style="width:80%;">
                                        <div class="Bars">
                                            <div v-bind:style="{width: dbpsbpCtrlbloodRisk+'%'}">
                                            </div>
                                        </div>
                                        <span class="fl">{{dbpsbpCtrlbloodRisk}}%</span>
                                        <span class="fr"> {{dbpsbpCtrlbloodScore}}</span><span class="fr">95%Cl &nbsp;&nbsp;</span>
                                    </td>
                                </tr>
                            </thead>
                        </x-table>
                    </div>
                <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>动态血压监测</div>
                
                <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/>   
                <div style="height:300px">
                    <div class="fl " style="width:50%;height:300px;">
                        <div class="margins-top-xs text-left" style="color:blue;">系统建议</div>
                        <div class="margins-top-xs " style="width:100%;text-indent:0.2rem;">
                            <div >{{arr.dbpsbp_ctrl.tips.title}}</div>
                            <div style="color:blue;">{{arr.dbpsbp_ctrl.tips.content}}</div>
                            <div>应先处理紧张焦虑、疼痛、恶心呕吐及颅内压增高等情况。血压持续升高，收缩压≥200 mmHg或舒张压≥110 mmHg，或伴有严重心功能不全、主动脉夹层、高血压脑病的患者，可予降压治疗，并严密观察血压变化。可选用拉贝洛尔、尼卡地平等静脉药物，避免使用引起血压急剧下降的药物。</div>
                        </div>
                    </div>
                    <div id="myChartMonitor" :style="{width: '50%', height: '300px',float:'right'}" ></div>
            </div>
            <!-- 报告Ⅳ-->
            <div class="margins-top-md " style='font-size: 16px;font-weight: bold;'  v-show="arr.drug_info_list">药物清单</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;' v-show="arr.drug_info_list"/>
			<div class="margins-top-md" v-show="arr.drug_info_list">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr class="report_header_color">
							<th>药名</th>
							<th>规格</th>
							<th>用量</th>
                            <th>用法</th>
                            <th>时间</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="drugs in arr.drug_info_list">
							<td>{{drugs.drugName}}</td>
							<td>{{drugs.drugSpec}}</td>
							<td>{{drugs.drugDosage}}</td>
							<td>{{drugs.drugUsage}}</td>
							<td v-if="drugs.medicationTimeType==='1'">入院前</td>
                            <td v-else-if="drugs.medicationTimeType==='2'">在院</td>
                            <td v-else="drugs.medicationTimeType==='3'">离院</td>
						</tr>
					</tbody>
				</x-table>
			</div>
        </div>
    </div>
</template>


<script>
    
    import { XHeader, XTable, LoadMore } from 'vux'
    import  {config} from '../../../static/js/common.js'
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/line')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
    
    let times = [];
    let systolic =[]; //收缩压
    let diastolic =[]; //舒张压
    let dynamicBloodPressure=[];//血压监测
	export default {/*  */
		name: 'discharg-report',
		components: {
			XHeader,
			XTable,
			LoadMore
		},
		data() {
			return {
                arr:[],
                diagnosis:[],
                treatmentPlan:{},
                policy:{},
                riskBenefit:{},
                strokeScore:{}
			}
		},
		created() {
    		this.HelloAxios(); 
            
		},
        mounted(){ 
            
        },
	    methods: {
            
             HelloAxios(){
                 let that=this;
                 let url=config.domain+"outreport/dischargeReport?pid="+config.id;
                this.$http
                .post(url)
                .then((res)=>{
                    let response =res.data;
                    that.arr=response.data;
                    that.diagnosis=response.data.diagnosis;
                    that.treatmentPlan=response.data.treatmentPlan;
                    that.policy=response.data.policy;
                    that.riskBenefit=response.data.riskBenefit;

                    let dbp =response.data.timedbpsbp.split(";");
                    let dbps = [];
                    for (let i in dbp) {
                        dbps = dbp[i].split(",");
                        times.push(dbps[0]);
                        systolic.push(Number(dbps[1]));
                        diastolic.push(Number(dbps[2]));
                        dynamicBloodPressure.push([dbps[0],Number(dbps[2])]);
                    }
                    this.$nextTick(function(){
                        this.drawLine();
                        this.bloodSetOption();
                    })
                })
            },
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
                 let dom = this.$refs.mychart;
				this.myChart = echarts.init(dom);
               
				// // 绘制图表
				this.myChart.setOption({
                     title: {
						text: ''
					},
                    tooltip: {
                        trigger: 'axis'
                    },
                     legend: {
                        data:['舒张压','收缩压']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data:times
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'舒张压',
                            type:'line',
                            stack: '总量',
                            data:diastolic
                        },
                        {
                            name:'收缩压',
                            type:'line',
                            stack: '总量',
                            data:systolic
                        }
                    ]
                } );

			},
            bloodSetOption(){
                let myChartMonitor = echarts.init(document.getElementById('myChartMonitor'))
                let data = dynamicBloodPressure;
                let dateList = data.map(function (item) {
                    return item[0];
                });
                let valueList = data.map(function (item) {
                    return item[1]; 
                });
                myChartMonitor.setOption({
                    // Make gradient line here
                    visualMap: [{
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: 400
                    }],


                    title: [{
                        
                    
                    }],
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [{
                    
                    }, {
                        data: dateList,
                        gridIndex: 1
                    }],
                    yAxis: [{
                        splitLine: {show: true}
                    }, {
                        splitLine: {show: false},
                        gridIndex: 1
                    }],
                    grid: [{
                    }, {
                    }],
                    series: [ {
                        type: 'line',
                        showSymbol: false,
                        data: valueList,
                        xAxisIndex: 1,
                        yAxisIndex: 1
                    }]
                });
          }
		},
        computed: {
            //预后风险
            filteredGWTG: function () {
                let arr= this.arr.yuhoufengxian.GWTG.riskVal;
                if(arr&&arr.length>=2){
                    arr=arr;
                }else{
                    arr= 0;
                }
                return arr
            },
            filteredGWTGsectionVal: function () {
               let GWTGsectionVal= this.arr.yuhoufengxian.GWTG.sectionVal;
                let arr =GWTGsectionVal.split(":");
                if(arr&&arr.length>=2){
                    GWTGsectionVal=arr[1];
                }else{
                    GWTGsectionVal= 0;
                }
                return GWTGsectionVal
            },
             filteredmonth: function () {
               let month= this.arr.yuhoufengxian.iScore_month.riskVal;
                if(month&&month.length>=2){
                    month=month;
                }else{
                    month= 0;
                }
                return month
            },
             filteredmonthsectionVal: function () {
               let monthsectionVal= this.arr.yuhoufengxian.iScore_month.sectionVal;
                let arr =monthsectionVal.split(":");
                if(arr&&arr.length>=2){
                    monthsectionVal=arr[1];
                }else{
                    monthsectionVal= 0;
                }
                return monthsectionVal
            },
             filteredyear: function () {
               let year= this.arr.yuhoufengxian.iScore_year.riskVal;
                if(year&&year.length>=2){
                    year=year;
                }else{
                    year= 0;
                }
                return year
            },
             filteredyearsectionVal: function () {
               let yearsectionVal= this.arr.yuhoufengxian.iScore_year.sectionVal;
                let arr =yearsectionVal.split(":");
                if(arr&&arr.length>=2){
                    yearsectionVal=arr[1];
                }else{
                    yearsectionVal= 0;
                }
                return yearsectionVal
            },
            filteredAPS: function () {
               let APS= this.arr.yuhoufengxian.AIS_APS.riskVal;
                if(APS&&APS.length>=2){
                    APS=APS;
                }else{
                    APS= 0;
                }
                return APS;

            },
             filteredAPSsectionVal: function () {
               let APSsectionVal= this.arr.yuhoufengxian.AIS_APS.sectionVal;
                let arr =APSsectionVal.split(":");
                if(arr&&arr.length>=2){
                    APSsectionVal=arr[1];
                }else{
                    APSsectionVal= 0;
                }
                return APSsectionVal
            },
             filteredGIB: function () {
               let GIB= this.arr.yuhoufengxian.AIS_GIB.riskVal;
                if(GIB&&GIB.length>=2){
                    GIB=GIB;
                }else{
                    GIB= 0;
                }
                return GIB
            },
             filteredGIBsectionVal: function () {
               let GIBsectionVal= this.arr.yuhoufengxian.AIS_GIB.sectionVal;
                let arr =GIBsectionVal.split(":");
                if(arr&&arr.length>=2){
                    GIBsectionVal=arr[1];
                }else{
                    GIBsectionVal= 0;
                }
                return GIBsectionVal
            },
            filteredESRS: function () {
               let ESRS= this.arr.yuhoufengxian.ESRS.riskVal;
                if(ESRS&&ESRS.length>=2){
                    ESRS=ESRS;
                }else{
                    ESRS= 0;
                }
                return ESRS
            },
             filteredESRSsectionVal: function () {
               let ESRSsectionVal= this.arr.yuhoufengxian.ESRS.sectionVal;
                let arr =ESRSsectionVal.split(":");
                if(arr&&arr.length>=2){
                    ESRSsectionVal=arr[1];
                }else{
                    ESRSsectionVal= 0;
                }
                return ESRSsectionVal
            },
            //溶栓决策支持概述
            policySICH:function () {
               let SICH= this.arr.policy.SICH.riskVal;
                let arr =SICH.split(":");
                if(arr&&arr.length>=2){
                    SICH=arr[1];
                }else{
                    SICH= 0;
                }
                return SICH
            },
            policySICHsectionVal:function () {
               let SICHsectionVal= this.arr.policy.SICH.sectionVal;
                let arr =SICHsectionVal.split(":");
                if(arr&&arr.length>=2){
                    SICHsectionVal=arr[1];
                }else{
                    SICHsectionVal= 0;
                }
                return SICHsectionVal
            },
            policyDRAGON:function () {
               let DRAGON= this.arr.policy.DRAGON.riskVal;
                let arr =DRAGON.split(":");
                if(arr&&arr.length>=2){
                    DRAGON=arr[1];
                }else{
                    DRAGON= 0;
                }
                return DRAGON
            },
            policyDRAGONsectionVal:function () {
               let DRAGONsectionVal= this.arr.policy.DRAGON.sectionVal;
                let arr =DRAGONsectionVal.split(":");
                if(arr&&arr.length>=2){
                    DRAGONsectionVal=arr[1];
                }else{
                    DRAGONsectionVal= 0;
                }
                return DRAGONsectionVal
            },
            policyTHRIVE5:function (){
                let THRIVE5=this.arr.policy.THRIVE_RIC0005.riskVal;
                if(THRIVE5&&THRIVE5.length>=2){
                    THRIVE5=THRIVE5;
                }else{
                    THRIVE5=0;
                }
                return THRIVE5
            },
            policyTHRIVE5sectionVal:function (){
                let THRIVE5sectionVal=this.arr.policy.THRIVE_RIC0005.sectionVal;
                if(THRIVE5sectionVal&&THRIVE5sectionVal.length>=2){
                    THRIVE5sectionVal=THRIVE5sectionVal;
                }else{
                    THRIVE5sectionVal=0;
                }
                return THRIVE5sectionVal
            },
            policyTHRIVE6:function (){
                let THRIVE6=this.arr.policy.THRIVE_RIC0006.riskVal;
                if(THRIVE6&&THRIVE6.length>=2){
                    THRIVE6=THRIVE6;
                }else{
                    THRIVE6=0;
                }
                return THRIVE6
            },
            policyTHRIVE6sectionVal:function (){
                let THRIVE6sectionVal=this.arr.policy.THRIVE_RIC0006.sectionVal;
                if(THRIVE6sectionVal&&THRIVE6sectionVal.length>=2){
                    THRIVE6sectionVal=THRIVE6sectionVal;
                }else{
                    THRIVE6sectionVal=0;
                }
                return THRIVE6sectionVal
            },
            policyTHRIVE7:function (){
                let THRIVE7=this.arr.policy.THRIVE_RIC0007.riskVal;
                if(THRIVE7&&THRIVE7.length>=2){
                    THRIVE7=THRIVE7;
                }else{
                    THRIVE7=0;
                }
                return THRIVE7
            },
            policyTHRIVE7sectionVal:function (){
                let THRIVE7sectionVal=this.arr.policy.THRIVE_RIC0007.sectionVal;
                if(THRIVE7sectionVal&&THRIVE7sectionVal.length>=2){
                    THRIVE7sectionVal=THRIVE7sectionVal;
                }else{
                    THRIVE7sectionVal=0;
                }
                return THRIVE7sectionVal
            },
            //预测血压控制风险
            dbpsbpCtrlAgainRisk:function(){
                let Risk=this.arr.dbpsbp_ctrl.again_risk.risk;
                if(Risk&&Risk.length>=2){
                    Risk=Risk;
                }else{
                    Risk=0;
                }
                return Risk
            },
            dbpsbpCtrlAgainScore:function(){
                let Score=this.arr.dbpsbp_ctrl.again_risk.score;
                if(Score&&Score.length>=2){
                    Score=Score;
                }else{
                    Score=0;
                }
                return Score
            },
            dbpsbpCtrlbloodRisk:function(){
                let bloodRisk=this.arr.dbpsbp_ctrl.blood_event.risk;
                if(bloodRisk&&bloodRisk.length>=2){
                    bloodRisk=bloodRisk;
                }else{
                    bloodRisk=0;
                }
                return bloodRisk
            },
            dbpsbpCtrlbloodScore:function(){
                let bloodScore=this.arr.dbpsbp_ctrl.blood_event.score;
                if(bloodScore&&bloodScore.length>=2){
                    bloodScore=bloodScore;
                }else{
                    bloodScore=0;
                }
                return bloodScore
            },
           
        }
       
	
    }
</script>
<style>
    @import '../../../static/css/iconfont.css';
	@import '../../../static/css/global.css';
	@import '../../../static/css/app.css';
    @import '../../../static/css/reports.css';

</style>