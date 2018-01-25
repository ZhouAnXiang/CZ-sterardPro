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
							<td>{{ patient_info.name }}</td>
							<td>{{ patient_info.sex }}</td>
                            <td>{{ patient_info.age }}</td>
                            <td>{{ patient_info.onset_time }}</td>
                            <td>本报告仅限于本院内部交流使用</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;'>患者概况</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr v-bind:style="{background:'#eee'}" v-show="general_situation.hospitalized">
							<th>入院情况</th>
							<th style="text-align:left;padding-left:0.2rem;">{{general_situation.hospitalized}}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-show="general_situation.past_history">
							<td>既往史</td>
							<td style="text-align:left;padding-left:0.2rem;" >{{general_situation.past_history}}</td>
						</tr>
						<tr v-bind:style="{background:'#eee'}" v-show="general_situation.mrs">
							<td>入院时mRS</td>
							<td style="text-align:left;padding-left:0.2rem;">{{general_situation.mrs}}</td>
						</tr>
						<tr v-show="general_situation.nihhs">
							<td>入院时NIHSS</td>
							<td style="text-align:left;padding-left:0.2rem;">{{general_situation.nihhs}}</td>
						</tr>
					</tbody>
				</x-table>
			</div>
            <div class="margins-top-xs text-left"style='font-size: 16px;font-weight: bold;'>诊断</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
            <div class="margins-top-xs">
                <x-table full-bordered style="background-color:#fff;">
                    <thead  v-bind:style="{background:'#eee'}">
                        <tr v-show="diagnosis.diagnosis_1">
                            <th style="text-align:left; padding-left:0.2rem;">{{diagnosis.diagnosis_1}}</th>
                        </tr>
                        <tr v-show="diagnosis.diagnosis_2">
                            <th style="text-align:left;padding-left:0.2rem;">{{diagnosis.diagnosis_2}}</th>
                        </tr>
                    </thead>
                </x-table>
            </div>
            <div class="margins-top-xs text-left"style='font-size: 16px;font-weight: bold;'>治疗方案</div>
            <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;'/> 
            <div class="margins-top-sm" style="background-color:#eee;">
                <div v-show="treat_plan.new_treat_plan ">
                    <span style="font-weight: bold;">最新指南推荐静脉溶栓治疗方案:</span>
                    <span  style="color:blue">{{treat_plan.new_treat_plan}}</span>
                </div>
                <div v-show="treat_plan.best_dosage">
                    <span style="font-weight: bold;">医生选择系统最优剂量:</span>
                    <span>{{treat_plan.best_dosage}}</span>
                </div>
                 <div v-show="treat_plan.intravascular_therapy">
                    <span style="font-weight: bold;">血管内治疗:</span>
                    <span>{{treat_plan.intravascular_therapy}}</span>
                </div>
                 <div v-show="treat_plan.anticoagulant_therapy">
                    <span style="font-weight: bold;">抗凝治疗:</span>
                    <span>{{treat_plan.anticoagulant_therapy}}</span>
                </div>
				 <div v-show="treat_plan.antithrombotic_therapy">
                    <span style="font-weight: bold;">抗栓治疗:</span>
                    <span>{{treat_plan.antithrombotic_therapy}}</span>
                </div>
                 <div v-show="treat_plan.antiplatelet_therapy">
                    <span style="font-weight: bold;">抗血小板治疗:</span>
                    <span>{{treat_plan.antiplatelet_therapy}}</span>
                </div>
				  <div v-show="treat_plan.follow_up_treatment">
                    <span style="font-weight: bold;">后续治疗:</span>
                    <span>{{treat_plan.follow_up_treatment}}</span>
                </div>
            </div>
               <div class="margins-top-xs text-left" style='font-size: 16px;font-weight: bold;' v-show="thrombolytic_risk_benefit"> 溶栓出血风险及获益</div>
               <hr class='t3X' style='margin-top:1px;height: 1px;width: 100%;background:#000;' v-show="thrombolytic_risk_benefit"/> 
            <div class="margins-top-sm">
               <x-table :cell-bordered="false" style="background-color:#fff;">
                    <thead>
                        <tr v-show="thrombolytic_risk_benefit.risk">
                            <th style="width:20%;line-height:24px;text-align:left;">出血风险</th>
                            <th style="width:80%;">
                                <div class="Bar">
                                    <div v-bind:style="{width: thrombolyticRisk+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{ thrombolyticRisk}}%</span>
								<span class="fr">{{policyrisksectionVal}}</span><span class="fr">95%Cl&nbsp;&nbsp;</span>  
                            </th>
                        </tr>
                        <tr v-show="thrombolytic_risk_benefit.benefit">
                            <td style="width:20%;line-height:24px;text-align:left;">溶栓获益</td>
                            <td style="width:80%;">
                                <div class="Bars">
                                    <div v-bind:style="{width: thrombolyticbenefit+'%'}">
                                    </div>
                                </div>
                                <span class="fl">{{thrombolyticbenefit}}%</span>
								<span class="fr">{{policyrisksectionVal}}</span><span class="fr">95%Cl &nbsp;&nbsp; </span>
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
            
        </div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'
    import  {config} from'../../../../static/js/common.js'
	export default {
		components: {
			XHeader,
			XTable,
			LoadMore

		},
		data() {
			return {
                arr:[],
                patient_info:{},
                diagnosis:{},
                treat_plan:{},
                general_situation:{},
                policy:{},
                thrombolytic_risk_benefit:{}
			}
		},
        created(){
            this.EmbolectomyAxios();
        },
        methods:{
            EmbolectomyAxios(){
                 let that=this;
                //  let url=config.domain+"outreport/dischargeReport?pid="+config.id
                let url= config.domain+ "outreport/treatReport/2?pid=" +config.id;
                this.$http
                .post(url)
                .then((res)=>{
                    var response =res.data;
                    that.arr=response.data;
                    that.patient_info=response.data.patient_info;
                    that.diagnosis=response.data.diagnosis;
                    that.general_situation=response.data.general_situation;
                    that.treat_plan=response.data.treat_plan;
                    that.policy=response.data.thrombolytic_policy;
                    that.thrombolytic_risk_benefit=response.data.thrombolytic_risk_benefit;
                })
            },
        },
        computed:{
            //溶栓出血风险及获益
            thrombolyticRisk:function () {
               let risk= this.arr.thrombolytic_risk_benefit.risk.riskVal;
                if(risk&&risk.length>=2){
                    risk=risk;
                }else{
                    risk= 0;
                }
                return risk
            },
            policyrisksectionVal:function () {
               let risksectionVal= this.arr.thrombolytic_risk_benefit.risk.sectionVal;
                if(risksectionVal&&risksectionVal.length>=2){
                    risksectionVal=risksectionVal;
                }else{
                    risksectionVal= 0;
                }
                return risksectionVal
            },
             thrombolyticbenefit:function () {
               let benefit= this.arr.thrombolytic_risk_benefit.benefit.riskVal;
                if(benefit&&benefit.length>=2){
                    benefit=benefit;
                }else{
                    benefit= 0;
                }
                return benefit
            },
            policyrisksectionVal:function () {
               let benefitsectionVal= this.arr.thrombolytic_risk_benefit.benefit.sectionVal;
                if(benefitsectionVal&&benefitsectionVal.length>=2){
                    benefitsectionVal=benefitsectionVal;
                }else{
                    benefitsectionVal= 0;
                }
                return benefitsectionVal
            },
            //溶栓决策支持概述
            policySICH:function () {
               let SICH= this.arr.thrombolytic_policy.SICH.riskVal;
                let arr =SICH.split(":");
                if(arr&&arr.length>=2){
                    SICH=arr[1];
                }else{
                    SICH= 0;
                }
                return SICH
            },
            policySICHsectionVal:function () {
               let SICHsectionVal= this.arr.thrombolytic_policy.SICH.sectionVal;
                let arr =SICHsectionVal.split(":");
                if(arr&&arr.length>=2){
                    SICHsectionVal=arr[1];
                }else{
                    SICHsectionVal= 0;
                }
                return SICHsectionVal
            },
            policyDRAGON:function () {
               let DRAGON= this.arr.thrombolytic_policy.DRAGON.riskVal;
                if(DRAGON&&DRAGON.length>=2){
                    DRAGON=DRAGON;
                }else{
                    DRAGON= 0;
                }
                return DRAGON
            },
            policyDRAGONsectionVal:function () {
               let DRAGONsectionVal= this.arr.thrombolytic_policy.DRAGON.sectionVal;
                if(DRAGONsectionVal&&DRAGONsectionVal.length>=2){
                    DRAGONsectionVal=DRAGONsectionVal;
                }else{
                    DRAGONsectionVal= 0;
                }
                return DRAGONsectionVal
            },
            policyTHRIVE5:function (){
                let THRIVE5=this.arr.thrombolytic_policy.THRIVE_RIC0005.riskVal;
                if(THRIVE5&&THRIVE5.length>=2){
                    THRIVE5=THRIVE5;
                }else{
                    THRIVE5=0;
                }
                return THRIVE5
            },
            policyTHRIVE5sectionVal:function (){
                let THRIVE5sectionVal=this.arr.thrombolytic_policy.THRIVE_RIC0005.sectionVal;
                if(THRIVE5sectionVal&&THRIVE5sectionVal.length>=2){
                    THRIVE5sectionVal=THRIVE5sectionVal;
                }else{
                    THRIVE5sectionVal=0;
                }
                return THRIVE5sectionVal
            },
            policyTHRIVE6:function (){
                let THRIVE6=this.arr.thrombolytic_policy.THRIVE_RIC0006.riskVal;
                if(THRIVE6&&THRIVE6.length>=2){
                    THRIVE6=THRIVE6;
                }else{
                    THRIVE6=0;
                }
                return THRIVE6
            },
            policyTHRIVE6sectionVal:function (){
                let THRIVE6sectionVal=this.arr.thrombolytic_policy.THRIVE_RIC0006.sectionVal;
                if(THRIVE6sectionVal&&THRIVE6sectionVal.length>=2){
                    THRIVE6sectionVal=THRIVE6sectionVal;
                }else{
                    THRIVE6sectionVal=0;
                }
                return THRIVE6sectionVal
            },
            policyTHRIVE7:function (){
                let THRIVE7=this.arr.thrombolytic_policy.THRIVE_RIC0007.riskVal;
                if(THRIVE7&&THRIVE7.length>=2){
                    THRIVE7=THRIVE7;
                }else{
                    THRIVE7=0;
                }
                return THRIVE7
            },
            policyTHRIVE7sectionVal:function (){
                let THRIVE7sectionVal=this.arr.thrombolytic_policy.THRIVE_RIC0007.sectionVal;
                if(THRIVE7sectionVal&&THRIVE7sectionVal.length>=2){
                    THRIVE7sectionVal=THRIVE7sectionVal;
                }else{
                    THRIVE7sectionVal=0;
                }
                return THRIVE7sectionVal
            },
        }
	}
</script>

<style>
    @import '../../../../static/css/iconfont.css';
	@import '../../../../static/css/global.css';
	@import '../../../../static/css/app.css';
    @import '../../../../static/css/reports.css';

</style>