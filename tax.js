var tipCalc = angular.module("TipCalc", []);

tipCalc.controller('TipCalc', [
    '$scope', function($scope){
        var tc = this;
        tc.tax = 0.0;
        
        tc.state_tax =
        [
            {state_name:	"Alabama",
            rate: ".1350%"},
            
            {state_name:	"Alaska",
            rate:	".07%"},
            
            {state_name:	"Arizona",
            rate:	".1073%"},
            
            {state_name:	"Arkansas",
            rate:	".1163%"},
            
            {state_name:	"California",
            rate:	".0975%"},
            
            {state_name:	"Colorado",
            rate:	".10%"},
            
            {state_name:	"Connecticut",
            rate:	".0635%"},
            
            {state_name:	"District of Columbia",
            rate:	".0575%"},
            
            {state_name:	"Florida",
            rate:	".0750%"},
            
            {state_name:	"Georgia",
            rate:	".08%"},
            
            {state_name:	"Hawaii",
            rate:	".0471%"},
            
            {state_name:	"Idaho"	,
            rate:	".0850%"},
            
            {state_name:	"Illinois"	,
            rate:	".1025%"},
            
            {state_name:	"Indiana"	,
            rate:	".07%"},
            
            {state_name:	"Iowa",	
            rate:	".07%"},
            
            {state_name:	"Kansas",
            rate:	".1015%"},
            {state_name:	"Kentucky",	
            rate:	".06%"},
            
            {state_name:	"Louisiana"	,
            rate:	".12%"},
            
            {state_name:	"Maine"	,
            rate:	".0550%"},
            
            {state_name:	"Maryland"	,
            rate:	".06%"},
            
            {state_name:	"Massachusetts"	,
            rate:	".0625%"},
            
            {state_name:	"Michigan"	,
            rate:	".06%"},
            
            {state_name:	"Minnesota"	,
            rate:	".0788%"},
            
            {state_name:	"Mississippi",	
            rate:	".0725%"},
            
            {state_name:	"Missouri"	,
            rate:	".1085%"},
            
            {state_name:	"Nebraska"	,
            rate:	".750%"},
            
            {state_name:	"Nevada",	
            rate:	".0815%"},
            
            {state_name:	"New Jersey",	
            rate:	".1288%"},
            
            {state_name:	"New Mexico",	
            rate:	".0869%"},
            
            {state_name:	"New York"	,
            rate:	".0888%"},
            
            {state_name:	"North Carolina"	,
            rate:	".0750%"},
            
            {state_name:	"North Dakota"	,
            rate:	".08%"},
            
            {state_name:	"Ohio"	,
            rate:	".08%"},
            
            {state_name:	"Oklahoma"	,
            rate:	".11%"},
            
            {state_name:	"Pennsylvania",	
            rate:	".08%"},
            
            {state_name:	"Rhode Island"	,
            rate:	".07%"},
            
            {state_name:	"South Carolina",	
            rate:	".09%"},
            
            {state_name:	"South Dakota",	
            rate:	".06%"},
            
            {state_name:	"Tennessee"	,
            rate:	".0975%"},
            
            {state_name:	"Texas"	,
            rate:	".0825%"},
            
            {state_name:	"Utah"	,
            rate:	".0835%"},
            
            {state_name:	"Vermont"	,
            rate:	".07%"},
            
            {state_name:	"Virginia"	,
            rate:	".06%"},
            
            {state_name:	"Washington",	
            rate:	".0960"},
            
            {state_name:	"West Virginia"	,
            rate:	".07%"},
            
            {state_name:	"Wisconsin"	,
            rate:	".0675%"},
            
            {state_name:	"Wyoming",	
            rate:	".06%"}
        ];
        
        tc.selected_state = tc.state_tax[0];
        
        tc.tip_rate =
        [
            {
                percent: "10%",
                tip: .10
            },
            {
                percent: "15%",
                tip: .15
            },
            {
                percent: "20%",
                tip: .2
            },
        ];
        
        tc.selected_tip_rate = tc.tip_rate[0];
    }
        
    ]);