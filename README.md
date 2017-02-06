# cidm4385-tipcalc

This program is made to take a total and calculate and display the total with a tip and tax. Tax and tip rates set by user.

## Features

* Calculate Tax
* Calculate Tip
* Total all calculations
* Allow user to select State sales tax and tip rate

## Code Example

The 'Code' did not link properly to the 'tax.js' file:
```
<html ng-app="TipCalc">
    <head>
		<title>Tip Calculato</title>
		
	</head>
	<body>
	    <div ng-controller="TipController as tc">
            <input type="decimal" ng-model="tc.total" id="tax" name="VALUE" placeholder="Enter amount">
            <select ng-model="tc.selected_state" 
                    ng-options="tip.rate for rate in tc.state_tax" 
                    ng-change="tc.showSelectedRate()"></select>
            <select ng-model="tc.selected_tip_rate" 
                    ng-options="tip.tip for tip in tc.tip_rate" 
                    ng-change="tc.showSelectedPercent()"></select>
        </div>
        <div>
				<p>Selected state is: <span ng-bind="tc.selected_state.state_name"></span></p>
				<p>Selected Percent is: <span ng-bind="tc.selected_tip_rate.tip"></span></p>
				<p>Selected Percent is: <span ng-bind="net"></span></p>
		</div>
        <script src="angular.js"></script>
        <script src="tax.js"></script>
        <script>
            var myApp = angular.module('calculations',[]);
            
            calc.controller("TipController", [
                "$scope",
                function($scope){
                    var tc = this;
            
                    tc.total = 0
                    
                    tc.calcultate = function(net)
                    {
                        return (tc.total * tc.state_tax) + (tc.total * tc.tip_rate) + tc.total;
                    };
                }
            ]);
        </script>
	</body>
</html>
```# cidm4385-tipcalc
