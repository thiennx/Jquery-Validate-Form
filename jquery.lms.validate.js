/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {
    var validate = function(form) {
        var inputs = $(form).find(":input[rules]");
        inputs.each(function() {
            addValidateRule(this);
        });
    };
    var addValidateRule = function(input) {
        var rulesString = $(input).attr("rules");
        if ($.trim(rulesString) == "") {
            return;
        }
        var rules;
        try {
            rules = JSON.parse(rulesString);
        } catch (e) {
            rules = "";
        }
        console.log(rules);
        if (typeof rules == "object") {
            if (rules.length) {
                for (var i = 0; i < rules.length; i++) {
                    $(input).rules('add', convertRule(rules[i]));
                }
            } else {
                $(input).rules('add', convertRule(rules));
            }
        }
    }
    var convertRule = function(rule) {
        var r;
        for (var key in rule) {
            if (key != 'message') {
                r = key;
                break;
            }
        }
        var $return = new Object();
        $return[r] = rule[r];
        if (rule["message"]) {
            $return["messages"] = new Object();
            $return["messages"][r] = rule["message"];
        }
        console.log($return);
        return $return;
    }
    var bindValidate = function() {
        $("form[validate]").each(function() {
            $(this).validate();
            validate(this);
        });
    }

    bindValidate();
})(jQuery);

